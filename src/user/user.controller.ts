import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async listUsers(): Promise<User[] | null> {
    return await this.userService.getAllUsers();
  }

  @Post('')
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = dto.name;
    return await this.userService.createUser(user);
  }
}
