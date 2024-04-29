import { Role } from 'src/user/enums/user.enum';

export interface ActiveUserData {
  sub: number;
  email: string;
  role: Role;
}
