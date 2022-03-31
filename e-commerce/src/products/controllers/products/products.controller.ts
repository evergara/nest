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
} from '@nestjs/common';
import { response } from 'express';

import { CreateProductDto } from './../../dtos/product.dto';
import { UpdateProductDto } from '../../dtos/product.dto';

@Controller('products')
export class ProductsController {
  constructor() {}

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
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // return response.status(200).send({
    //   message: `product ${productId}`,
    //});
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') productId: string, @Body() payload: UpdateProductDto) {
    return {
      message: {
        id: productId,
        payload,
      },
    };
  }

  @Delete(':id')
  delete(@Param('id') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }
}
