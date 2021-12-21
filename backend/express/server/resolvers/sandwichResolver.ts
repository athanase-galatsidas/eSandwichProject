import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { Ingredient } from '../entities/ingredient';
import { Sandwich } from '../entities/sandwich';

@Resolver((of) => Sandwich)
export class SandwichResolver {
	sandwichRepo = getRepository<Sandwich>('Sandwich');
	ingredientRepo = getRepository<Ingredient>('Ingredient');

	@Query(() => [Sandwich], { nullable: true })
	async getSandwiches(): Promise<Sandwich[]> {
		return await this.sandwichRepo.find();
	}

	@FieldResolver()
	async available(@Root() sandwich: Sandwich) {
		const ingredients = await sandwich.ingredients;

		let availabele = true;

		ingredients?.forEach((i) => {
			if (i.count == 0) {
				availabele = false;
			}
		});

		return availabele;
	}
}
