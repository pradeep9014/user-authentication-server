import { Test, TestingModule } from '@nestjs/testing';
import { UserSigninController } from './user-signin.controller';
import { UserSigninService } from './user-signin.service';

describe('UserSigninController', () => {
  let controller: UserSigninController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSigninController],
      providers: [UserSigninService],
    }).compile();

    controller = module.get<UserSigninController>(UserSigninController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
