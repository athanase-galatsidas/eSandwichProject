import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ingredient')
export class Ingredient {
	@PrimaryGeneratedColumn('uuid')
	ingredientId?: string;

	@Column('varchar')
	name?: string;
	@Column('int')
	count?: number;
}
