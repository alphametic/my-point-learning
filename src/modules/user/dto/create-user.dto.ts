import { IsEmail, IsOptional, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto{
  @IsString()
  @IsNotEmpty({message: 'Name should not be empty'})
  @MinLength(2, {message: 'Name should be at least 2 characters'})
  name: string;

  @IsEmail({}, {message: 'Invalid email format'})
  @IsNotEmpty({message: 'Email should not be empty'})
  email: string;
}