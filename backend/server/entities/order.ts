import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Sandwich } from './sandwich';
import { User } from './user';

@Entity('order')
export class Order {
	@PrimaryGeneratedColumn('uuid')
	orderId?: string;

	@ManyToOne(() => User, (user) => user.orders)
	user?: User;

	@ManyToMany(() => Sandwich)
	@JoinTable()
	sandwiches?: Sandwich[];
}
