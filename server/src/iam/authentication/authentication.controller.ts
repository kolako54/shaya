import { Body, Controller, Post, Res } from '@nestjs/common';
import { SignInDto } from './dto/signIn.dto';
import { Response, response } from 'express';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/signUp.dto';
import { GetRefreshToken } from './decorators/refresh-token.decorator';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authenticationService.signUp(signUpDto);
  }
  @Post('sign-in')
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const tokens = await this.authenticationService.signIn(signInDto);
    console.log('tokens', tokens);
    this.produceCookies(tokens, response);
    // response.cookie('accessToken', tokens['accessToken'], {
    //   secure: false,
    //   sameSite: true,
    //   httpOnly: false,
    // });
  }

  @Post('refresh-token')
  async refreshToken(
    @GetRefreshToken() refreshToken: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const tokens = await this.authenticationService.refreshToken(refreshToken);
    console.log('refreshToken', tokens);
    this.produceCookies(tokens, response);
  }

  private produceCookies(
    tokens: {
      accessToken: string;
      refreshToken: string;
    },
    response: Response,
  ) {
    Object.keys(tokens).forEach((token) => {
      console.log(token);
      response.cookie(token, tokens[token], {
        secure: token === 'refreshToken',
        sameSite: true,
        httpOnly: token === 'refreshToken',
      });
    });
  }
}
