import { Controller } from '@nestjs/common';
import { ProductService } from 'src/services/product.service';
import { CreateProductDto } from '../../dtos/product.dtos';
//Para poner el tipo esperado por el payload

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
}
