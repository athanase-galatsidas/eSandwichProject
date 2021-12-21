import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@InputType('IngredientInput')
@Entity('Ingredient')
export class Ingredient extends BaseEntity {
	@Field(() => ID, { nullable: true })
	@PrimaryGeneratedColumn('uuid')
	ingredientId?: string;

	@Field()
	@Column('varchar')
	name?: string;
	@Field((type) => Int)
	@Column('int')
	count?: number;

	@Field()
	@Column('text')
	image?: string;
}
