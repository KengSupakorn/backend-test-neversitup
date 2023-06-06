import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, JoinTable } from 'typeorm';
import { Product } from './Product.entity';

@Entity('Order')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    productId: number;

    @Column()
    qty: number;

    @Column()
    orderId: number;
    
}