import { Test, TestingModule } from '@nestjs/testing';
import { BlogcardController } from './blogcard.controller';
import { BlogcardService } from './blogcard.service';

describe('BlogcardController', () => {
  let controller: BlogcardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogcardController],
      providers: [BlogcardService],
    }).compile();

    controller = module.get<BlogcardController>(BlogcardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
