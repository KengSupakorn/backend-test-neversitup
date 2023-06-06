import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entity/Order.entity';
import { User } from 'src/entity/๊User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {

    }
    getUserById(userId: number): Promise<any> {
        return this.userRepository.createQueryBuilder("user").where("user.id = :id", { id: userId}).execute()

    }
    getOrderHistory(userId: number): Promise<any> {
        return this.userRepository
            .query(
                `SELECT *
                FROM "User" as u inner join "Order" as o on u.id = o."userId" where u."id" = ${userId}`
            );
    }
}
