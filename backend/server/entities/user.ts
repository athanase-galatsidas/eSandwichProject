import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order';

@Entity('user')
export class User {
	@PrimaryGeneratedColumn('uuid')
	userId?: string;

	@Column('varchar')
	name?: string;
	@Column('varchar')
	password?: string;
	@Column('bool')
	isAdmin?: boolean;

	@ManyToOne(() => Order, (order) => order.user)
	orders?: Order[];
}
