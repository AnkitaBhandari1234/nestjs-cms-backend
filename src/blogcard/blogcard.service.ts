import { HttpException, Injectable } from '@nestjs/common';
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

   async findOne(id: number) {
      const data=await this.BlogcardRepo.findOneBy({id:id});
       if(!data) throw HttpException
    return data ;
  }

   async update(id: number, updateBlogcardDto: UpdateBlogcardDto) {
     const data=await this.BlogcardRepo.findOneBy({id:id});
    console.log(data);
    if(!data) throw HttpException
    Object.assign(data,updateBlogcardDto)
    return await this.BlogcardRepo.save(data);
  }

  async remove(id: number) {
    const data=await this.BlogcardRepo.findOneBy({id:id});
    console.log(data);
    if(!data) throw HttpException
 
    return await this.BlogcardRepo.remove(data);
  }
}
