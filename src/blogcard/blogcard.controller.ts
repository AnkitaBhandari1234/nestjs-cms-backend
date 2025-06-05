import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogcardService } from './blogcard.service';
import { CreateBlogcardDto } from './dto/create-blogcard.dto';
import { UpdateBlogcardDto } from './dto/update-blogcard.dto';

@Controller('blogcard')
export class BlogcardController {
  constructor(private readonly blogcardService: BlogcardService) {}

  @Post()
  create(@Body() createBlogcardDto: CreateBlogcardDto) {
    return this.blogcardService.create(createBlogcardDto);
  }

  @Get()
  findAll() {
    return this.blogcardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogcardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogcardDto: UpdateBlogcardDto) {
    return this.blogcardService.update(+id, updateBlogcardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogcardService.remove(+id);
  }
}
