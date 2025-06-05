import { PartialType } from '@nestjs/swagger';
import { CreateBlogcontentDto } from './create-blogcontent.dto';

export class UpdateBlogcontentDto extends PartialType(CreateBlogcontentDto) {}
