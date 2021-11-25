import { Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { Ingredient } from '../entities/ingredient';

@Resolver()
export class IngredientResolver {
	manager = getRepository<Ingredient>('Ingredient');

	@Query(() => [Ingredient], { nullable: true })
	async getSandwiches(): Promise<Ingredient[]> {
		return await this.manager.find(Ingredient);
	}
}
