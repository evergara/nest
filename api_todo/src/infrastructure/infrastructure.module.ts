import { Module } from '@nestjs/common';

import { TodoController } from '@infrastructure/controller/todo/todo.controller';
import { FundamentController } from '@infrastructure/controller/fundament/fundament.controller';
import { Fundament2Controller } from './controller/fundament/fundament2.controller';
import { FundamentalService } from './controller/fundament/service/fundamental.service';

@Module({
  controllers: [TodoController, FundamentController, Fundament2Controller],
  providers: [FundamentalService],
})
export class InfrastructureModule {}
