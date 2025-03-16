import { Module } from '@nestjs/common';
import { UserSigninService } from './user-signin.service';
import { UserSigninController } from './user-signin.controller';

@Module({
  controllers: [UserSigninController],
  providers: [UserSigninService],
})
export class UserSigninModule {}
