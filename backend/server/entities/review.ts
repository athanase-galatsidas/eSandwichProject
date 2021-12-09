import { Field, ID } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Review')
export class Review extends BaseEntity {
	@Field(() => ID, { nullable: true })
	@PrimaryGeneratedColumn('uuid')
	reviewId?: string;

	@Field()
	@Column('int')
	rating?: number;
}
