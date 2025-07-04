import { HttpException, Injectable } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Testimonial } from './entities/testimonial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestimonialService {
  constructor(
    @InjectRepository(Testimonial)
    private readonly TestimonialRepo: Repository<Testimonial>,
  ) {}
  async create(createTestimonialDto: CreateTestimonialDto) {
    const data = this.TestimonialRepo.create(createTestimonialDto);
    return await this.TestimonialRepo.save(data);
  }

  async findAll() {
    return await this.TestimonialRepo.find();
  }

   async findOne(id: number) {
    const data=await this.TestimonialRepo.findOneBy({id:id});
       if(!data) throw HttpException
    return data ;
  }

  update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    return `This action updates a #${id} testimonial`;
  }

  async remove(id: number) {
    const data = await this.TestimonialRepo.findOneBy({ id: id });
    console.log(data);
    if (!data) throw HttpException;
    return await this.TestimonialRepo.remove(data);
  }
}
