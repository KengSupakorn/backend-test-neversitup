import {ApiProperty} from '@nestjs/swagger'

export class OrderInput {
    @ApiProperty({name:'orderId', description:'orderId'})
    orderId: number;

    @ApiProperty({name:'userId', description:'userId'})
    userId: number;

    @ApiProperty({name:'productId', description:'productId'})
    productId: number;

    @ApiProperty({name:'qty', description:'qty'})
    qty: number;
}