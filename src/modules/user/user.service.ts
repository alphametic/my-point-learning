import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUserName(): string {
    return '홍길동';
  }

  getUserPoints(): number {
    return 1000;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User>{
    const user = await this.userRepository.findOne({ where: { id } });
    if(!user){
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    Object.assign(user, updateUserDto);

    try{
      return await this.userRepository.save(user);
    } catch(error){
      if(error.code === 'ER_DUP_ENTRY'){
        throw new ConflictException('Email already exists');
      }
    }

    return user;
  }
  async createUser(name: string, email: string): Promise<User> {

    const user = this.userRepository.create({ name, email });
    return await this.userRepository.save(user);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try{
      const user = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch(error){
      if(error.code === 'ER_DUP_ENTRY'){
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  async remove(id: number): Promise<{message: string}> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
    return {message: 'User removed successfully'};
  }

}