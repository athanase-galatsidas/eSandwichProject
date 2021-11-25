import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './ingredient';

@ObjectType()
@InputType('SandwichInput')
@Entity('Sandwich')
export class Sandwich extends BaseEntity {
	@Field(() => ID, { nullable: true })
	@PrimaryGeneratedColumn('uuid')
	sandwichId?: string;

	@Field()
	@Column('varchar')
	name?: string;
	@Field()
	@Column('text')
	description?: string;
	@Field()
	@Column('text')
	image?: string;
	@Field()
	@Column('bool')
	available?: boolean;

	// @Field((type) => [Ingredient], { nullable: true })
	// @ManyToMany(() => Ingredient)
	// @JoinTable()
	// ingredients?: Ingredient[];
}
