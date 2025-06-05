import { PartialType } from '@nestjs/swagger';
import { CreateBlogcardDto } from './create-blogcard.dto';

export class UpdateBlogcardDto extends PartialType(CreateBlogcardDto) {}
