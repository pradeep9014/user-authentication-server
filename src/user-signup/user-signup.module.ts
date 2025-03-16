import { Module } from '@nestjs/common';
import { UserSignupService } from './user-signup.service';
import { UserSignupController } from './user-signup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSignup, UserSignupSchema } from './entities/user-signup.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:'userSignUp',schema:UserSignupSchema,collection:'userSignUp'}])],
  controllers: [UserSignupController],
  providers: [UserSignupService],
})
export class UserSignupModule {}
