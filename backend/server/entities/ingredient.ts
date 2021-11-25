import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Ingredient')
export class Ingredient extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	ingredientId?: string;

	@Column('varchar')
	name?: string;
	@Column('int')
	count?: number;
}
