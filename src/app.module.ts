import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { devConfig } from './config/database.config';
import { AuthModule } from './module/auth/auth.module'
import { OrderModule } from './module/order/order.module';
import { ProductModule } from './module/product/product.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(devConfig), AuthModule, OrderModule, ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
