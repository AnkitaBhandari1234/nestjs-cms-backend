import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Blogcard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
