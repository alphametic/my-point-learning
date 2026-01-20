import { IsEmail, IsOptional, IsString, IsNotEmpty, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @MinLength(2, {message: 'Name should be at least 2 characters'})
  name?: string;
@IsEmail({}, { message: 'Invalid email format' })
  email?: string;
}
