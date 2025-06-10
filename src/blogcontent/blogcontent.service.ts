import { HttpException, Injectable } from '@nestjs/common';
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

 async findOne(id: number) {
      const data=await this.BlogcontentRepo.findOneBy({id:id});
       if(!data) throw HttpException
    return data ;
  }
  update(id: number, updateBlogcontentDto: UpdateBlogcontentDto) {
    return `This action updates a #${id} blogcontent`;
  }

  async remove(id: number) {
    const data= await this.BlogcontentRepo.findOneBy({id:id});
    console.log(data);
   if(!data) throw HttpException
   return await this.BlogcontentRepo.remove(data);
  }
}
