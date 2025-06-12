import { HttpException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
            @InjectRepository(Category) private readonly CategoryRepo:Repository<Category>
          ){}
    async create(createCategoryDto: CreateCategoryDto) {
       const data=this.CategoryRepo.create(createCategoryDto);
      return await this.CategoryRepo.save(data);
  }

  async findAll() {
   return await this.CategoryRepo.find();
  }


  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

   async update(id: number, updateCategoryDto: UpdateCategoryDto) {
     const data= await this.CategoryRepo.findOneBy({id:id});
      console.log(data);
     if(!data) throw HttpException
     Object.assign(data,updateCategoryDto);
     return await this.CategoryRepo.save(data);
  }

  async remove(id: number) {
      const data= await this.CategoryRepo.findOneBy({id:id});
      console.log(data);
     if(!data) throw HttpException
     return await this.CategoryRepo.remove(data);
    }
}
