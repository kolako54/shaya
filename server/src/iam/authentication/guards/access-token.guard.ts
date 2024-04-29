import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import jwtConfig from 'src/iam/config/jwt.config';
import { USER_REQUEST_KEY } from 'src/iam/iam.constant';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly jwtService: JwtService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = this.getAccessTokenFromCookie(request);
    try {
      const decoded = this.jwtService.verifyAsync(
        accessToken,
        this.jwtConfiguration,
      );
      request[USER_REQUEST_KEY] = decoded;
    } catch (e) {
      throw new UnauthorizedException();
    }

    return true;
  }
  private getAccessTokenFromCookie(request: Request) {
    const token = request.rawHeaders[3].split('accessToken=')[1];
    return token;
  }
}
