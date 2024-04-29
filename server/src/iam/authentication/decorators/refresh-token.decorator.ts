import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetRefreshToken = createParamDecorator(
  (field: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.rawHeaders[3]
      .split(' ')[0]
      .split('refreshToken=')[1]
      .split(';')[0];
  },
);
