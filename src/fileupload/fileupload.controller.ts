import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { CreateFileuploadDto } from './dto/create-fileupload.dto';
import { UpdateFileuploadDto } from './dto/update-fileupload.dto';
import { ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FormDataRequest } from 'nestjs-form-data';
import * as path from 'path';
import * as fs from 'fs';


@Controller('fileupload')
export class FileuploadController {
  constructor(private readonly fileuploadService: FileuploadService) {}

  @Post()
  @ApiOperation({summary:'Upload a file with name and description'})
  @ApiConsumes('multipart/form-data')
  @ApiResponse({status:201,description:'File uploaded successfully'})
  @FormDataRequest()
  create(@Body() createFileuploadDto :CreateFileuploadDto){
    if(!createFileuploadDto.files){
      throw new HttpException('No files uploaded',HttpStatus.BAD_REQUEST);

      
    }
    // prepare uploads folder
    const uploadsDir=path.join(process.cwd(),'uploads'); //safer than _dirname

    if(!fs.existsSync(uploadsDir)){
      fs.mkdirSync(uploadsDir);
    }
    // create unique file name to avoid collisions
    const timestamp=Date.now();
    const originalName=createFileuploadDto.files.originalName;
    const fileName=`${timestamp}-${originalName}`;
    const filepath=path.join(uploadsDir,fileName);

    // save file buffer to disk
    fs.writeFileSync(filepath,createFileuploadDto.files.buffer);

    // store relative path or url to DB (e.g /uploads/filename.ext)
    const fileUrl=`http://localhost:3000/uploads/${fileName}`;
    console.log(createFileuploadDto,'here',fileUrl)
    createFileuploadDto.fileurl=fileUrl
    return this.fileuploadService.create(createFileuploadDto);
  }
 

  @Get()
  findAll() {
    return this.fileuploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileuploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileuploadDto: UpdateFileuploadDto) {
    return this.fileuploadService.update(+id, updateFileuploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileuploadService.remove(+id);
  }
}
