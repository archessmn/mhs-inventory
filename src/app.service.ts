import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return 'Testing!';
  }

  postRoot(): string {
    throw new Error('Method not implemented.');
  }
}
