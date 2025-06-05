import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogcontentService } from './blogcontent.service';
import { CreateBlogcontentDto } from './dto/create-blogcontent.dto';
import { UpdateBlogcontentDto } from './dto/update-blogcontent.dto';

@Controller('blogcontent')
export class BlogcontentController {
  constructor(private readonly blogcontentService: BlogcontentService) {}

  @Post()
  create(@Body() createBlogcontentDto: CreateBlogcontentDto) {
    return this.blogcontentService.create(createBlogcontentDto);
  }

  @Get()
  findAll() {
    return this.blogcontentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogcontentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogcontentDto: UpdateBlogcontentDto) {
    return this.blogcontentService.update(+id, updateBlogcontentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogcontentService.remove(+id);
  }
}
