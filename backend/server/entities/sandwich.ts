import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './ingredient';

@Entity('sandwich')
export class Sandwich {
	@PrimaryGeneratedColumn('uuid')
	sandwichId?: string;

	@Column('varchar')
	name?: string;
	@Column('text')
	description?: string;
	@Column('bool')
	available?: boolean;

	@ManyToMany(() => Ingredient)
	@JoinTable()
	ingredients?: Ingredient[];
}
