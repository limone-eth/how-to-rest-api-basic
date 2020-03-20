import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";
@Entity('movies')
export class Movie extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    plot_summary: string;
    @Column()
    duration: number;
}
