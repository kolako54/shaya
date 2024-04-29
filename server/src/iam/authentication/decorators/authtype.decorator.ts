import { SetMetadata } from '@nestjs/common';
import { AuthType } from '../enums/authtype.enum';

export const AUTH_TYPE_KEY = 'AuthType';
export const Auth = (...auth: AuthType[]) => {
  return SetMetadata(AUTH_TYPE_KEY, auth);
};
