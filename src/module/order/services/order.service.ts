import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entity/Order.entity';
import { Repository } from 'typeorm';
import { OrderInput } from '../dto/order.input';
import { Product } from 'src/entity/Product.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private productRepository: Repository<OrderInput>,
    ) { }

    create(order: Array<OrderInput>): Promise<any> {
        return this.productRepository.save(
            this.productRepository.create(order)
        );
    }

    delete(orderId: number): Promise<any> {
        return this.productRepository
            .createQueryBuilder()
            .delete()
            .from(Order)
            .where('orderId = :orderId', { orderId })
            .execute()
    }

    getOrderDetail(orderId: number): Promise<any> {
        return this.productRepository
            .query(
                `SELECT *
                FROM "Order" as o inner join "Product" as pro on o."productId" = pro.id where o."orderId" = ${orderId}`
            );
    }
}
