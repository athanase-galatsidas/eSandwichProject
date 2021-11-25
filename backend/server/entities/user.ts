import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order';

@Entity('User')
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	userId?: string;

	@Column('varchar')
	name?: string;

	// authentication is handled by farebase
	// but still need a user reference for orders
	// @Column('varchar')
	// password?: string;
	// @Column('bool')
	// isAdmin?: boolean;

	@ManyToOne(() => Order, (order) => order.user)
	orders?: Order[];
}
