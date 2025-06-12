import { HttpException, Injectable } from '@nestjs/common';
import { CreateAboutusDto } from './dto/create-aboutus.dto';
import { UpdateAboutusDto } from './dto/update-aboutus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aboutus } from './entities/aboutus.entity';


@Injectable()
export class AboutusService {
    constructor(
      @InjectRepository(Aboutus) private readonly AboutusRepo:Repository<Aboutus>
    ){}

  async create(createAboutusDto: CreateAboutusDto) {
      const data=this.AboutusRepo.create(createAboutusDto);
    return await this.AboutusRepo.save(data);
  }

  async findAll() {
    return await this.AboutusRepo.find();
  }

  async findOne(id: number) {
      const data=await this.AboutusRepo.findOneBy({id:id});
       if(!data) throw HttpException
    return data ;
  }

 async update(id: number, updateAboutusDto: UpdateAboutusDto) {
     const data=await this.AboutusRepo.findOneBy({id:id});
    console.log(data);
    if(!data) throw HttpException
     Object.assign(data,updateAboutusDto)
    return await this.AboutusRepo.save(data);
  }

  async remove(id: number) {
    const data=await this.AboutusRepo.findOneBy({id:id});
    console.log(data);
    if(!data) throw HttpException
    return await this.AboutusRepo.remove(data);
  }
}
