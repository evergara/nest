import { Test, TestingModule } from '@nestjs/testing';
import { Fundament2Controller } from './fundament2.controller';

describe('Fundament2Controller', () => {
  let controller: Fundament2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Fundament2Controller],
    }).compile();

    controller = module.get<Fundament2Controller>(Fundament2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
