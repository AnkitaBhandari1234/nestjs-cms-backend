import { Injectable } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Testimonial } from './entities/testimonial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestimonialService {
  constructor(
          @InjectRepository(Testimonial) private readonly TestimonialRepo:Repository<Testimonial>
        ){}
  async create(createTestimonialDto: CreateTestimonialDto) {
    const data=this.TestimonialRepo.create(createTestimonialDto);
    return await this.TestimonialRepo.save(data);
  }

  async findAll() {
    return await this.TestimonialRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} testimonial`;
  }

  update(id: number, updateTestimonialDto: UpdateTestimonialDto) {
    return `This action updates a #${id} testimonial`;
  }

  remove(id: number) {
    return `This action removes a #${id} testimonial`;
  }
}
