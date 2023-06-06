import {ApiProperty} from '@nestjs/swagger'

export class ProductResponse {
    @ApiProperty({name:'id', description:'id'})
    id: number;

    @ApiProperty({name:'name', description:'name'})
    name: string;

    @ApiProperty({name:'price', description:'price'})
    price: string;
}