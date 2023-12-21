import { Test, TestingModule } from '@nestjs/testing';
import { PddiktiService } from './pddikti.service';

describe('PddiktiService', () => {
  let service: PddiktiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PddiktiService],
    }).compile();

    service = module.get<PddiktiService>(PddiktiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
