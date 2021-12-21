import { Connection, getRepository } from 'typeorm';
import { Config } from '../entities/config';
import { Ingredient } from '../entities/ingredient';
import { Review } from '../entities/review';
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
			bread.image = '/img/bread.webp';
			await connection.manager.save(bread);

			const cheese = new Ingredient();
			cheese.name = 'cheese';
			cheese.count = 6;
			cheese.image = '/img/cheese.webp';
			await connection.manager.save(cheese);

			const ham = new Ingredient();
			ham.name = 'ham';
			ham.count = 14;
			ham.image = '/img/ham.webp';
			await connection.manager.save(ham);

			const tomato = new Ingredient();
			tomato.name = 'tomato';
			tomato.count = 15;
			tomato.image = '/img/tomato.webp';
			await connection.manager.save(tomato);

			const pineapple = new Ingredient();
			pineapple.name = 'pineapple';
			pineapple.count = 0;
			pineapple.image = '/img/pineapple.webp';
			await connection.manager.save(pineapple);

			const salad = new Ingredient();
			salad.name = 'salad';
			salad.count = 16;
			salad.image = '/img/salad.webp';
			await connection.manager.save(salad);

			// seed sandwiches
			const regularSandwich = new Sandwich();
			regularSandwich.name = 'Regular Sandwich';
			regularSandwich.description = 'A simple and delicious sandwich.';
			regularSandwich.image = '/img/regular.webp';
			regularSandwich.price = 9.99;
			regularSandwich.rating = 9;
			regularSandwich.ingredients = Promise.resolve([bread, cheese, ham]);
			await connection.manager.save(regularSandwich);

			const deluxeSandwich = new Sandwich();
			deluxeSandwich.name = 'Deluxe Sandwich';
			deluxeSandwich.description = 'An exotic sandwich.';
			deluxeSandwich.image = '/img/deluxe.webp';
			deluxeSandwich.price = 14.99;
			deluxeSandwich.rating = 7;
			deluxeSandwich.ingredients = Promise.resolve([bread, cheese, ham, tomato, pineapple]);
			await connection.manager.save(deluxeSandwich);

			const specialSandwich = new Sandwich();
			specialSandwich.name = 'Special Sandwich';
			specialSandwich.description = 'A special sandwich for special people.';
			specialSandwich.image = '/img/special.webp';
			specialSandwich.price = 15.99;
			specialSandwich.rating = 8;
			specialSandwich.ingredients = Promise.resolve([bread, cheese, ham, tomato]);
			await connection.manager.save(specialSandwich);

			const basicSandwich = new Sandwich();
			basicSandwich.name = 'Basic Sandwich';
			basicSandwich.description = 'Sandwich with basic ingredients.';
			basicSandwich.image = '/img/basic.webp';
			basicSandwich.price = 7.99;
			basicSandwich.rating = 6;
			basicSandwich.ingredients = Promise.resolve([bread, cheese]);
			await connection.manager.save(basicSandwich);

			const grilledSandwich = new Sandwich();
			grilledSandwich.name = 'Grilled Sandwich';
			grilledSandwich.description = 'Sandwich with grilled cheese.';
			grilledSandwich.image = '/img/grilled.webp';
			grilledSandwich.price = 19.99;
			grilledSandwich.rating = 10;
			grilledSandwich.ingredients = Promise.resolve([bread, cheese]);
			await connection.manager.save(grilledSandwich);

			const vegeSandwich = new Sandwich();
			vegeSandwich.name = 'Vegetarian Sandwich';
			vegeSandwich.description = 'Sandwich with no animal products.';
			vegeSandwich.image = '/img/vege.webp';
			vegeSandwich.price = 12.99;
			vegeSandwich.rating = 4;
			vegeSandwich.ingredients = Promise.resolve([bread, salad, tomato]);
			await connection.manager.save(vegeSandwich);

			const blt = new Sandwich();
			blt.name = 'BLT Sandwich';
			blt.description = 'Bacon Letuce Tomato.';
			blt.image = '/img/blt.webp';
			blt.price = 12.99;
			blt.rating = 8;
			blt.ingredients = Promise.resolve([bread, salad, tomato, ham]);
			await connection.manager.save(blt);

			const Chicken = new Sandwich();
			Chicken.name = 'Chicken Sandwich';
			Chicken.description = 'Sandwich with chicken.';
			Chicken.image = '/img/chicken.webp';
			Chicken.price = 12.99;
			Chicken.rating = 6;
			Chicken.ingredients = Promise.resolve([bread, salad, ham]);
			await connection.manager.save(Chicken);

			const Ham = new Sandwich();
			Ham.name = 'Ham Sandwich';
			Ham.description = 'Sandwich with Ham.';
			Ham.image = '/img/hamsandwich.webp';
			Ham.price = 12.99;
			Ham.rating = 7;
			Ham.ingredients = Promise.resolve([bread, salad, ham]);
			await connection.manager.save(Ham);

			// seed reviews
			const review0 = new Review();
			review0.rating = 8;
			review0.comment = 'Very good sandwiches!';
			await connection.manager.save(review0);

			const review1 = new Review();
			review1.rating = 6;
			review1.comment = 'Fast delivery!';
			await connection.manager.save(review1);

			const review2 = new Review();
			review2.rating = 8;
			review2.comment = 'Awesome!';
			await connection.manager.save(review2);

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
