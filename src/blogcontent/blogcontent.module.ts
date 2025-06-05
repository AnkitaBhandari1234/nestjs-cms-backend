import { Module } from '@nestjs/common';
import { BlogcontentService } from './blogcontent.service';
import { BlogcontentController } from './blogcontent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogcontent } from './entities/blogcontent.entity';

@Module({
   imports:[TypeOrmModule.forFeature([Blogcontent])],
  controllers: [BlogcontentController],
  providers: [BlogcontentService],
})
export class BlogcontentModule {}
