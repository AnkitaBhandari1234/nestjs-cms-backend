import { Test, TestingModule } from '@nestjs/testing';
import { BlogcontentService } from './blogcontent.service';

describe('BlogcontentService', () => {
  let service: BlogcontentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogcontentService],
    }).compile();

    service = module.get<BlogcontentService>(BlogcontentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
