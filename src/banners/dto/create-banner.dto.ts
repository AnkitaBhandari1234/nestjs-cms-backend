import { ApiProperty } from "@nestjs/swagger";

export class CreateBannerDto {
@ApiProperty()
  title: string;

  @ApiProperty()
  subtitle: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  like:number

  @ApiProperty()
  comments: number;


}
