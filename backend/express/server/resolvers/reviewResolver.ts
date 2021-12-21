import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { AddReviewInput, Review } from '../entities/review';

@Resolver()
export class ReviewResolver {
	manager = getRepository<Review>('Review');

	@Query(() => [Review], { nullable: true })
	async getReviews(): Promise<Review[]> {
		return await this.manager.find();
	}

	@Mutation(() => Review)
	async addReview(@Arg('data') newReview: AddReviewInput): Promise<Review | undefined | null> {
		try {
			console.log(`received review: ${JSON.stringify(newReview)}`);

			// error checking
			if (!newReview.rating) {
				console.log('no rating found');
				return undefined;
			}

			// create and save review
			const review = new Review();
			review.rating = newReview.rating;
			review.comment = newReview.comment;

			const res = await this.manager.save(review).catch((err) => console.error(err));

			if (res) return res;
			return undefined;
		} catch (error) {
			console.log(error);
		}
	}
}
