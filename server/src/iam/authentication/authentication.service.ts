import { InjectRepository } from '@nestjs/typeorm';
import { SignInDto } from './dto/signIn.dto';
import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { HashingService } from '../hashing/hashing.service';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { ActiveUserData } from '../interfaces/active-user.interface';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import {
  InvalidatedRefreshTokenError,
  RefreshTokenIdsStorage,
} from './refresh-token-ids.storage';
import { SignUpDto } from './dto/signUp.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly refreshTokenIdsStorage: RefreshTokenIdsStorage,
  ) {}
  async signUp(signUpDto: SignUpDto) {
    try {
      const user = new User();
      console.log('1');
      user.email = signUpDto.email;
      const password = await this.hashingService.hash(signUpDto.password);
      user.password = password;
      await this.userRepository.save(user);
      console.log('done');
    } catch (e) {
      const pgUniqueViolationErrorCode = '23505';
      if (e.code === pgUniqueViolationErrorCode) {
        throw new ConflictException();
      }
      console.log('eeee');
      console.log(e.message);
      throw e;
    }
  }
  async signIn(signInDto: SignInDto) {
    const user = await this.userRepository.findOne({
      where: { email: signInDto.email },
    });
    console.log('hey');
    if (!user) {
      throw new UnauthorizedException('user does not exist!');
    }
    const isEqual = this.hashingService.compare(
      signInDto.password,
      user.password,
    );
    if (!isEqual) throw new UnauthorizedException('password does not match!!');
    return await this.generateToken(user);
  }

  async generateToken(user: User) {
    const refreshTokenId = randomUUID();
    console.log(user.id, this.jwtConfiguration.accessTokenTtl);
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        {
          role: user.role,
          email: user.email,
        },
      ),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl, {
        refreshTokenId,
      }),
    ]);
    console.log('haha');
    await this.refreshTokenIdsStorage.insert(user.id, refreshTokenId);
    return { accessToken, refreshToken };
  }

  async refreshToken(refreshToken: string) {
    try {
      const decoded = await this.jwtService.verifyAsync<
        Pick<ActiveUserData, 'sub'> & { refreshTokenId: string }
      >(refreshToken, {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
      });
      console.log('decoded', decoded);
      const user = await this.userRepository.findOneByOrFail({
        id: decoded.sub,
      });
      const isValid = await this.refreshTokenIdsStorage.validate(
        user.id,
        decoded.refreshTokenId,
      );
      if (isValid) {
        await this.refreshTokenIdsStorage.invalidate(user.id);
      } else {
        throw new Error('Refresh token is invalid');
      }
      return await this.generateToken(user);
    } catch (e) {
      if (e instanceof InvalidatedRefreshTokenError) {
        throw new UnauthorizedException('Access denied!');
      }
      console.log('hmm');
      throw new UnauthorizedException();
    }
  }

  private async signToken<T>(userId: number, expiresIn: number, payload?: T) {
    console.log('secret', this.jwtConfiguration.secret);
    console.log('audience', this.jwtConfiguration.audience);
    console.log('issuer', this.jwtConfiguration.issuer);
    console.log('expiresIn', expiresIn);
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        expiresIn,
      },
    );
  }
}
