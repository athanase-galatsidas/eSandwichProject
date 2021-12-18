import { Connection, getRepository } from 'typeorm';
import { Config } from '../entities/config';
import { Ingredient } from '../entities/ingredient';
import { Sandwich } from '../entities/sandwich';

export const seedDatabase = async (connection: Connection) => {
	try {
		const isSeeded = await getRepository(Config).findOne('seeded');

		// only seed if seeded is not seeded
		if (isSeeded === undefined) {
			// seed ingredients
			const bread = new Ingredient();
			bread.name = 'bread';
			bread.count = 12;
			await connection.manager.save(bread);

			const cheese = new Ingredient();
			cheese.name = 'cheese';
			cheese.count = 6;
			await connection.manager.save(cheese);

			// seed sandwiches
			const regularSandwich = new Sandwich();
			regularSandwich.name = 'Regular Sandwich';
			regularSandwich.description = 'A simple and delicious sandwich.';
			regularSandwich.image = '/img/regular.webp';
			regularSandwich.available = true;
			regularSandwich.price = 9.99;
			regularSandwich.rating = 9;
			regularSandwich.ingredients = Promise.resolve([bread, cheese]);
			await connection.manager.save(regularSandwich);

			const deluxeSandwich = new Sandwich();
			deluxeSandwich.name = 'Deluxe Sandwich';
			deluxeSandwich.description = 'An exotic sandwich.';
			deluxeSandwich.image = '/img/deluxe.webp';
			deluxeSandwich.available = true;
			deluxeSandwich.price = 14.99;
			deluxeSandwich.rating = 7;
			deluxeSandwich.ingredients = Promise.resolve([bread, cheese]);
			await connection.manager.save(deluxeSandwich);

			const specialSandwich = new Sandwich();
			specialSandwich.name = 'Special Sandwich';
			specialSandwich.description = 'A special sandwich for special people.';
			specialSandwich.image = '/img/special.webp';
			specialSandwich.available = true;
			specialSandwich.price = 15.99;
			specialSandwich.rating = 8;
			specialSandwich.ingredients = Promise.resolve([bread, cheese]);
			await connection.manager.save(specialSandwich);

			const basicSandwich = new Sandwich();
			basicSandwich.name = 'Basic Sandwich';
			basicSandwich.description = 'Sandwich with basic ingredients.';
			basicSandwich.image = '/img/basic.webp';
			basicSandwich.available = true;
			basicSandwich.price = 7.99;
			basicSandwich.rating = 6;
			basicSandwich.ingredients = Promise.resolve([bread, cheese]);
			await connection.manager.save(basicSandwich);

			const grilledSandwich = new Sandwich();
			grilledSandwich.name = 'Grilled Sandwich';
			grilledSandwich.description = 'Sandwich with grilled cheese.';
			grilledSandwich.image = '/img/grilled.webp';
			grilledSandwich.available = true;
			grilledSandwich.price = 19.99;
			grilledSandwich.rating = 10;
			grilledSandwich.ingredients = Promise.resolve([bread, cheese]);
			await connection.manager.save(grilledSandwich);

			const vegeSandwich = new Sandwich();
			vegeSandwich.name = 'Vegetarian Sandwich';
			vegeSandwich.description = 'Sandwich with no animal products.';
			vegeSandwich.image = '/img/vege.webp';
			vegeSandwich.available = true;
			vegeSandwich.price = 12.99;
			vegeSandwich.rating = 4;
			vegeSandwich.ingredients = Promise.resolve([bread, cheese]);
			await connection.manager.save(vegeSandwich);

			// save seeded status
			const seeded = new Config();
			seeded.key = 'seeded';
			seeded.value = 'true';
			await connection.manager.save(seeded);

			// logging
			console.log('db seeded');
		} else {
			console.log('db already seeded');
		}
	} catch (err) {
		console.error(`could not seed db\n${err}`);
	}
};
