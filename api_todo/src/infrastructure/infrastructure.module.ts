import { Module } from '@nestjs/common';

import { TodoController } from '@infrastructure/controller/todo/todo.controller';
import { FundamentController } from '@infrastructure/controller/fundament/fundament.controller';

@Module({
  controllers: [TodoController, FundamentController]
})
export class InfrastructureModule {}
