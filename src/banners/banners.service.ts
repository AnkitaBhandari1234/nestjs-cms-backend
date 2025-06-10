import { HttpException, Injectable } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from './entities/banner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannersService {
  constructor(
    @InjectRepository(Banner) private readonly BannerRepo:Repository<Banner>
  ){}
  async create(createBannerDto: CreateBannerDto) {
    const data=this.BannerRepo.create(createBannerDto);
    return await this.BannerRepo.save(data);
  }

   async findAll() {
    return await this.BannerRepo.find();
  }

  async findOne(id: number) {
      const data=await this.BannerRepo.findOneBy({id:id});
       if(!data) throw HttpException
    return data ;
  }

  update(id: number, updateBannerDto: UpdateBannerDto) {
    return `This action updates a #${id} banner`;
  }

  async remove(id: number) {
    const data=await this.BannerRepo.findOneBy({id:id})
    console.log(data);
    if(!data) throw HttpException
    return await this.BannerRepo.remove(data)
   
  }
}
