import { Connection, getRepository } from 'typeorm';
import { Config } from '../entities/config';
import { Ingredient } from '../entities/ingredient';
import { Sandwich } from '../entities/sandwich';

export const seedDatabase = async (connection: Connection) => {
	const isSeeded = await getRepository(Config).findOne('seeded');

	// only seed if seeded is not seeded
	if (isSeeded === undefined) {
		const bread = new Ingredient();
		bread.name = 'bread';
		bread.count = 12;
		await connection.manager.save(bread);

		const cheese = new Ingredient();
		cheese.name = 'cheese';
		cheese.count = 6;
		await connection.manager.save(cheese);

		const sandwich = new Sandwich();
		sandwich.name = 'Regular Sandwich';
		sandwich.description = 'Standard issue sandwich';
		sandwich.available = true;
		sandwich.image = '/img/regular.webp';
		sandwich.ingredients = [bread, cheese];
		await connection.manager.save(sandwich);

		const seeded = new Config();
		seeded.key = 'seeded';
		seeded.value = 'true';
		await connection.manager.save(seeded);

		console.log('db seeded');
	} else {
		console.log('db already seeded');
	}
};
