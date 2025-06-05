import { Test, TestingModule } from '@nestjs/testing';
import { BlogcontentController } from './blogcontent.controller';
import { BlogcontentService } from './blogcontent.service';

describe('BlogcontentController', () => {
  let controller: BlogcontentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogcontentController],
      providers: [BlogcontentService],
    }).compile();

    controller = module.get<BlogcontentController>(BlogcontentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
