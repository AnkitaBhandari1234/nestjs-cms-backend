import { Test, TestingModule } from '@nestjs/testing';
import { BlogcardService } from './blogcard.service';

describe('BlogcardService', () => {
  let service: BlogcardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogcardService],
    }).compile();

    service = module.get<BlogcardService>(BlogcardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
