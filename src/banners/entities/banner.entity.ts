import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Banner {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    title:string;

    @Column()
    subtitle:string;

    @Column()
    description:string;

}
