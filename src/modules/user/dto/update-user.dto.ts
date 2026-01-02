import { IsEmail, IsOptional, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UpdateUserDto{
    @IsString()
  @MinLength(2, {message: 'Name should be at least 2 characters'})
  name?: string;
      @IsEmail({}, { message: 'Invalid email format' })
  email?: string;
}
