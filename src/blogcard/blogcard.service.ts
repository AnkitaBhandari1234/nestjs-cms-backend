import { Injectable } from '@nestjs/common';
import { CreateBlogcardDto } from './dto/create-blogcard.dto';
import { UpdateBlogcardDto } from './dto/update-blogcard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blogcard } from './entities/blogcard.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogcardService {
  constructor(
        @InjectRepository(Blogcard) private readonly BlogcardRepo:Repository<Blogcard>
      ){}
   async create(createBlogcardDto: CreateBlogcardDto) {
        const data=this.BlogcardRepo.create(createBlogcardDto);
    return await this.BlogcardRepo.save(data);
  }

  async findAll() {
    return await this.BlogcardRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} blogcard`;
  }

  update(id: number, updateBlogcardDto: UpdateBlogcardDto) {
    return `This action updates a #${id} blogcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogcard`;
  }
}
