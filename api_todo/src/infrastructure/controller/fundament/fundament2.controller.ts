import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { FundamentalCreate } from './dto/fundamentcreate.dto';
import { Fundamentalupdate } from './dto/fundamentupdate.dto';
import { Fundamental } from './model/fundamenta.dto';
import { FundamentalService } from './service/fundamental.service';

@Controller('fundament2')
export class Fundament2Controller {
  constructor(private readonly fundamentalService: FundamentalService) {}

  @Get()
  findAll(): Fundamental[] {
    return this.fundamentalService.getFundamentals();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Fundamental {
    return this.fundamentalService.getFundamental(id);
  }
  @Post()
  create(@Body() fundamentalCreate: FundamentalCreate): Fundamental {
    return this.fundamentalService.createFundamental(fundamentalCreate);
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() fundamentalCreate: Fundamentalupdate,
  ): Fundamental {
    return this.fundamentalService.updateFundamental(id, fundamentalCreate);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): void {
    this.fundamentalService.deleteFundamental(id);
  }
}
