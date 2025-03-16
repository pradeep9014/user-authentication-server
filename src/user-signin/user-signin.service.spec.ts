import { Test, TestingModule } from '@nestjs/testing';
import { UserSigninService } from './user-signin.service';

describe('UserSigninService', () => {
  let service: UserSigninService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSigninService],
    }).compile();

    service = module.get<UserSigninService>(UserSigninService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
