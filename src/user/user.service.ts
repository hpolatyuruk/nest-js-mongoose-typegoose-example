import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async createUser(user: User) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async getAllUsers(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }
}
