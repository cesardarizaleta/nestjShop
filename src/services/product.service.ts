import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dtos/product.dtos';

@Injectable()
export class ProductService {
  private counterID = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 10,
      image: 'https://via.placeholder.com/150',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  //Se agrega el DTO para que el payload tenga el tipo esperado
  create(payload: CreateProductDto) {
    const newProduct = {
      id: this.counterID++,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
