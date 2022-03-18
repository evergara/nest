import { Test, TestingModule } from '@nestjs/testing';
import { FundamentController } from './fundament.controller';

describe('FundamentController', () => {
  let controller: FundamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundamentController],
    }).compile();

    controller = module.get<FundamentController>(FundamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
