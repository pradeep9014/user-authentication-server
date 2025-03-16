import { Injectable } from '@nestjs/common';
import { CreateUserSigninDto } from './dto/create-user-signin.dto';
import { UpdateUserSigninDto } from './dto/update-user-signin.dto';

@Injectable()
export class UserSigninService {
  create(createUserSigninDto: CreateUserSigninDto) {
    return 'This action adds a new userSignin';
  }

  findAll() {
    return `This action returns all userSignin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSignin`;
  }

  update(id: number, updateUserSigninDto: UpdateUserSigninDto) {
    return `This action updates a #${id} userSignin`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSignin`;
  }
}
