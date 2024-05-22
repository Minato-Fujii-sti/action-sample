import { CreateMyuserInput } from './create-myuser.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMyuserInput extends PartialType(CreateMyuserInput) {
  id: number;
}
