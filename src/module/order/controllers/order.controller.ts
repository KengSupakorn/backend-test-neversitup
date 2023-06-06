import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { OrderInput } from '../dto/order.input';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Post()
    @ApiTags('order')
    @ApiBody({type: OrderInput, isArray: true})
    async create(@Body() order: Array<OrderInput>) {
        const res = await this.orderService.create(order);
        return 'creat order successfully'
    }

    @Delete('/:orderId')
    @ApiTags('order')
    @ApiParam({name: 'orderId'})
    async remove(@Param('orderId') orderId: number) {
        const res = await this.orderService.delete(orderId);
        return 'remove order successfully'
    }

    @Get('/:orderId')
    @ApiTags('order')
    @ApiParam({name: 'orderId'})
    async getOrderDetail(@Param('orderId') orderId: number) {
        const order = await this.orderService.getOrderDetail(orderId);
        return order
    }
}
