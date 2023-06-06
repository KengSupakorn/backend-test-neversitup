import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ProductResponse } from '../dto/product.res';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }
    @Get()
    @ApiTags('product')
    async findAll() {
        const product: Array<ProductResponse> = await this.productService.findAll()
        return product
    }

    @Get('/:id')
    @ApiTags('product')
    @ApiParam({name: 'id'})
    async getProductById(@Param('id') id:number) {
        const product: ProductResponse = await this.productService.findById(id)
        return product
    }
}
