import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} aboutus`;
  }

  update(id: number, updateAboutusDto: UpdateAboutusDto) {
    return `This action updates a #${id} aboutus`;
  }

  remove(id: number) {
    return `This action removes a #${id} aboutus`;
  }
}
