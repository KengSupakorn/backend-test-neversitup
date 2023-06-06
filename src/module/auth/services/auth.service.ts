import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/๊User.entity';
import { RegisterUserInput } from '../dto/register.input';
import { UserModal } from '../dto/user,modal';
import { LoginUserInput } from '../dto/login.input';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<UserModal>,
    ) { }
    create(user: RegisterUserInput): Promise<RegisterUserInput> {
        return this.userRepository.save(
            this.userRepository.create(user)
        );
    }
    login(user: LoginUserInput): Promise<any> {
        return this.userRepository.createQueryBuilder("user").where("user.username = :username and user.password = :password", { username: user.username, password: user.password }).execute()

    }
}