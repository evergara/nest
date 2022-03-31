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
  getOne(
    @Param('productId', ParseIntPipe) productId: number,
    @Res() response: Response,
  ) {
    response.status(HttpStatus.OK).send({
      message: `product ${productId}`,
    });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
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
