import { Controller } from '@nestjs/common';

// Al tener el categories en el controllar(abajo) se puede acceder a la ruta /categories
// Es decir no es necesario poner /categories en el @Get
@Controller('categories')
export class CategoriesController {}
