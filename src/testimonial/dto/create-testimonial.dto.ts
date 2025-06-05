import { ApiProperty } from '@nestjs/swagger';
export class CreateTestimonialDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  description: string;
}
