import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

 

  @Column()
  description: string;
  @Column()
  price: number;
}
