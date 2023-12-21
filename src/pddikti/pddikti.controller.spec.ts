import { Test, TestingModule } from '@nestjs/testing';
import { PddiktiController } from './pddikti.controller';

describe('PddiktiController', () => {
  let controller: PddiktiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PddiktiController],
    }).compile();

    controller = module.get<PddiktiController>(PddiktiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
