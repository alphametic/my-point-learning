import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto{
  @ApiProperty({ description: '사용자명', example: '홍길동', required: true })
  @IsString()
  @IsNotEmpty({message: 'Name should not be empty'})
  @MinLength(2, {message: 'Name should be at least 2 characters'})
  name: string;

  @ApiProperty({ description:'이메일', example:'john.doe@example.com'})
  @IsEmail({}, {message: 'Invalid email format'})
  @IsNotEmpty({message: 'Email should not be empty'})
  email: string;
}