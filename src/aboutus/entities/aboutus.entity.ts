import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Aboutus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
