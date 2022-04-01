import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateProductDto } from './../../dtos/product.dto';
import { UpdateProductDto } from '../../dtos/product.dto';
import { ProductsService } from 'src/products/services/products/products.service';
import { Product } from '../../entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {

    return {
      message: 'Listado de productos',
      filters: {
        limit,
        offset,
        brand,
      },
      product: [
        this.productsService.findAll()
      ]
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(
    @Param('productId', ParseIntPipe) productId: number,
    @Res() response: Response,
  ) {

    let product: Product = this.productsService.findOne(productId);
    response.status(HttpStatus.OK).send({
      product
    });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProductDto) {
    let product: Product = this.productsService.create(payload);
    return {
      message: 'accion de crear',
      product
    };
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe)  productId: number, @Body() payload: UpdateProductDto) {
    let product: Product = this.productsService.update(productId, payload);
    return {
      message: {
        id: productId,
        product,
      },
    };
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe)  productId: number) {
    let isRemove = this.productsService.remove(productId);
    return isRemove;
  }
}
