import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Blogcontent {
     @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
