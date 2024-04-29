import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Redis } from 'ioredis';

export class InvalidatedRefreshTokenError extends Error {}

@Injectable()
export class RefreshTokenIdsStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisClient: Redis;
  onApplicationBootstrap() {
    this.redisClient = new Redis({
      host: 'localhost',
      port: 6379,
    });
  }

  onApplicationShutdown(signal?: string) {
    return this.redisClient.quit();
  }

  async insert(userId: number, tokenId: string): Promise<void> {
    try {
      await this.redisClient.set(this.getKey(userId), tokenId);
    } catch (e) {
      console.log('oops');
      console.log(e.message);
      throw e;
    }
  }

  async validate(userId: number, refreshTokenId: string): Promise<boolean> {
    const storedRefreshTokenId = await this.redisClient.get(
      this.getKey(userId),
    );
    console.log('storedRefreshTokenId', storedRefreshTokenId);
    if (storedRefreshTokenId !== refreshTokenId) {
      console.log('instaintiated');
      throw new InvalidatedRefreshTokenError();
    }
    return storedRefreshTokenId === refreshTokenId;
  }

  async invalidate(userId: number): Promise<void> {
    await this.redisClient.del(this.getKey(userId));
  }

  private getKey(userId: number): string {
    return `user-${userId}`;
  }
}
