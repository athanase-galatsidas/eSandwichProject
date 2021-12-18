import { Arg, Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { Ingredient } from '../entities/ingredient';
import { Sandwich } from '../entities/sandwich';

@Resolver((of) => Ingredient)
export class IngredientResolver {
	manager = getRepository<Ingredient>('Ingredient');

	@Query(() => [Ingredient], { nullable: true })
	async getIngredients(): Promise<Ingredient[]> {
		return await this.manager.find();
	}

	@Query(() => Ingredient, { nullable: true })
	async getIngredientById(@Arg('id') id: string): Promise<Ingredient | undefined | null> {
		return await this.manager.findOne(id);
	}
}
