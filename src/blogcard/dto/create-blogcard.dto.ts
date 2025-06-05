import { ApiProperty } from '@nestjs/swagger';
export class CreateBlogcardDto {
     @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
