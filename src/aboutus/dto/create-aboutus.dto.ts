import { ApiProperty } from '@nestjs/swagger';
export class CreateAboutusDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
