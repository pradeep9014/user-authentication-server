import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSignupDto } from './create-user-signup.dto';

export class UpdateUserSignupDto extends PartialType(CreateUserSignupDto) {}
