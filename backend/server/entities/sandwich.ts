import { Field, ID, InputType, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Ingredient } from './ingredient';
import { Review } from './review';

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
	@Field()
	@Column('int')
	rating?: number;

	@Field((type) => [Ingredient], { nullable: true })
	@ManyToMany(() => Ingredient)
	@JoinTable()
	ingredients?: Ingredient[];
}
