import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingService {
  abstract hash(password: string | Buffer): Promise<string>;
  abstract compare(
    password: string | Buffer,
    encrypted: string,
  ): Promise<boolean>;
}
