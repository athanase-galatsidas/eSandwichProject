import { Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { Sandwich } from '../entities/sandwich';

@Resolver()
export class SandwichResolver {
	manager = getRepository<Sandwich>('Sandwich');

	@Query(() => [Sandwich], { nullable: true })
	async getSandwiches(): Promise<Sandwich[]> {
		return await this.manager.find(Sandwich);
	}
}
