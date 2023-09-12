import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '@/user/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getRoot(): string {
    return 'User router';
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create({ ...createUserDto });
  }
}
