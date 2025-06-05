import { Module } from '@nestjs/common';
import { BlogcardService } from './blogcard.service';
import { BlogcardController } from './blogcard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogcard } from './entities/blogcard.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Blogcard])],
  controllers: [BlogcardController],
  providers: [BlogcardService],
})
export class BlogcardModule {}
