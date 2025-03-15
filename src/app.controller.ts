import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Creacion de Endpoint
  @Get('new')
  getNew(): string {
    return 'New Endpoint';
  }

  //Obtencion de parametros con GET
  @Get('products/:id')
  getProduct(@Param('id') id: number): string {
    return `Product ${id}`;
  }

  //Obtencion de parametros con GET
  @Get('categories/:id/products/:productId')
  getCategoryProduct(
    @Param('id') id: number,
    @Param('productId') productId: number,
  ): string {
    return `Category ${id} - Product ${productId}`;
  }

  //Obtencion de parametros con Query
  @Get('products')
  getProducts(
    // Tambien se puede declarar el tipo
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
  ): string {
    return `Products: limit => ${limit}, offset => ${offset}`;
  }
}
