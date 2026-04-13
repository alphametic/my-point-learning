import { IsEmail, IsOptional, IsString, IsNotEmpty, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: '사용자명', example: '홍길동', required: false })  
  @IsString()
  @MinLength(2, {message: 'Name should be at least 2 characters'})
  name?: string;
    @ApiProperty({ description:'이메일', example:'john.doe@example.com', required: false })
@IsEmail({}, { message: 'Invalid email format' })
  email?: string;
}
