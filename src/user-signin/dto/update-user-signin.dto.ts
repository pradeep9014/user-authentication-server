import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSigninDto } from './create-user-signin.dto';

export class UpdateUserSigninDto extends PartialType(CreateUserSigninDto) {}
