import {
	BaseEntity,
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

@Entity('Order')
export class Order extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	orderId?: string;

	@ManyToOne(() => User, (user) => user.orders)
	user?: User;

	@ManyToMany(() => Sandwich)
	@JoinTable()
	sandwiches?: Sandwich[];
}
