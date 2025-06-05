import { Injectable } from '@nestjs/common';
import { CreateBlogcontentDto } from './dto/create-blogcontent.dto';
import { UpdateBlogcontentDto } from './dto/update-blogcontent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blogcontent } from './entities/blogcontent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogcontentService {
   constructor(
          @InjectRepository(Blogcontent) private readonly BlogcontentRepo:Repository<Blogcontent>
        ){}
  async create(createBlogcontentDto: CreateBlogcontentDto) {
     const data=this.BlogcontentRepo.create(createBlogcontentDto);
    return await this.BlogcontentRepo.save(data);
  }

  async findAll() {
   return await this.BlogcontentRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} blogcontent`;
  }

  update(id: number, updateBlogcontentDto: UpdateBlogcontentDto) {
    return `This action updates a #${id} blogcontent`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogcontent`;
  }
}
