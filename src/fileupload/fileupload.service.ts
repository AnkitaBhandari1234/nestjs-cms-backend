import { Injectable } from '@nestjs/common';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fileupload } from './entities/fileupload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileuploadService {
  constructor(
    @InjectRepository(Fileupload) private readonly fileRepo:Repository<Fileupload>
    
  ){}
  async create(createFileuploadDto: CreateFileuploadDto) {
    const datatosave={
      file:createFileuploadDto.fileurl
    }
    const data=this.fileRepo.create(datatosave)
    return this.fileRepo.save(data);
  }

  findAll() {
    return `This action returns all fileupload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileupload`;
  }

  update(id: number, updateFileuploadDto: UpdateFileuploadDto) {
    return `This action updates a #${id} fileupload`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileupload`;
  }
}
