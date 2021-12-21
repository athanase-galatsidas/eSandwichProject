import { Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@InputType('ReviewInput')
@Entity('Review')
export class Review extends BaseEntity {
	@Field(() => ID, { nullable: true })
	@PrimaryGeneratedColumn('uuid')
	reviewId?: string;

	@Field()
	@Column('int')
	rating?: number;

	@Field()
	@Column('varchar')
	comment?: string;
}

@InputType('AddReviewInput')
export class AddReviewInput {
	@Field({ nullable: true })
	rating?: number;

	@Field({ nullable: true })
	comment?: string;
}
