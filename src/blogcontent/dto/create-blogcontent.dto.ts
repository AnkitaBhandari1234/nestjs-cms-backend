import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogcontentDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
