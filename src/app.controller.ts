import { Controller, Get, Post } from '@nestjs/common';
import { UsersController } from '@/user/users.controller';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return this.appService.getTest();
  }

  @Post()
  postRoot(): string {
    return this.appService.postRoot();
  }
}
