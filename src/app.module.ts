import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'process';
import { ConfigModule } from '@nestjs/config';
import { UserSigninModule } from './user-signin/user-signin.module';
import { UserSignupModule } from './user-signup/user-signup.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }), MongooseModule.forRoot(env.MONGO_URL),UserSigninModule,UserSignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
