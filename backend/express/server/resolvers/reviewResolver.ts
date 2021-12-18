import { Arg, Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { Review } from '../entities/review';

@Resolver()
export class ReviewResolver {
	manager = getRepository<Review>('Review');

	@Query(() => [Review], { nullable: true })
	async getReviews(): Promise<Review[]> {
		return await this.manager.find();
	}

	// TODO: dit crasht
	@Query(() => [Review], { nullable: true })
	async getReviewById(@Arg('id') id: string): Promise<Review | undefined | null> {
		return await this.manager.findOne(id);
	}
}
