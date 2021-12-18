import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('Config')
export class Config extends BaseEntity {
	@Column({ unique: true, primary: true })
	key?: string;

	@Column()
	value?: string;
}
