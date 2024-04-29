import { Injectable } from '@nestjs/common';
import { HashingService } from './hashing.service';
import { hash, compare, genSalt } from 'bcrypt';

@Injectable()
export class BcryptService implements HashingService {
  async hash(password: string | Buffer): Promise<string> {
    const salt = await genSalt();
    return hash(password, salt);
  }
  compare(password: string | Buffer, encrypted: string): Promise<boolean> {
    const result = compare(password, encrypted);
    return result;
  }
}
