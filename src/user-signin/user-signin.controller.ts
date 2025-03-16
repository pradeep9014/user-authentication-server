import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserSigninService } from './user-signin.service';
import { CreateUserSigninDto } from './dto/create-user-signin.dto';
import { UpdateUserSigninDto } from './dto/update-user-signin.dto';

@Controller('user-signin')
export class UserSigninController {
  constructor(private readonly userSigninService: UserSigninService) {}

  @Post()
  create(@Body() createUserSigninDto: CreateUserSigninDto) {
    return this.userSigninService.create(createUserSigninDto);
  }

  @Get()
  findAll() {
    return this.userSigninService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSigninService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSigninDto: UpdateUserSigninDto) {
    return this.userSigninService.update(+id, updateUserSigninDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSigninService.remove(+id);
  }
}
