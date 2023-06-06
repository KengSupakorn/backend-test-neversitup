import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/Product.entity';
import { Repository } from 'typeorm';
import { ProductResponse } from '../dto/product.res';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<ProductResponse>,
    ) { }

    findAll(): Promise<ProductResponse[]> {
        return this.productRepository.find();
    }

    findById(id:number): Promise<ProductResponse> {
        return this.productRepository.findOne({
            where: {
              id,
            },
          });
    }
}
