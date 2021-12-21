import { Field, ID, InputType, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Sandwich } from './sandwich';

@ObjectType()
@InputType('OrderInput')
@Entity('Order')
export class Order extends BaseEntity {
	@Field(() => ID, { nullable: true })
	@PrimaryGeneratedColumn('uuid')
	orderId?: string;

	@Field({ nullable: true })
	@CreateDateColumn({ type: 'timestamp', nullable: true })
	date?: Date;

	@Field({ nullable: true })
	@Column('varchar')
	userId?: string;

	@Field((type) => [Sandwich], { nullable: true })
	@ManyToMany(() => Sandwich)
	@JoinTable()
	sandwiches?: Promise<Sandwich[]>;

	@Field({ nullable: true })
	@Column('varchar')
	status?: string;
}

@InputType('AddOrderInput')
export class AddOrderInput {
	@Field({ nullable: true })
	userId?: string;

	// @Field((type) => [Sandwich], { nullable: true })
	@Field((type) => [String], { nullable: true })
	sandwiches?: string[];
}
