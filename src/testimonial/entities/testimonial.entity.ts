import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Testimonial {
 @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  rating: number;

  @Column()
  description: string;
}
