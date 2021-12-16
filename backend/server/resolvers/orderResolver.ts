import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { AddOrderInput, Order } from '../entities/order';
import { Sandwich } from '../entities/sandwich';

@Resolver((of) => Order)
export class OrderResolver {
	orderRepo = getRepository<Order>('Order');
	sandwchRepo = getRepository<Sandwich>('Sandwich');

	// TODO: this requires auth
	@Query(() => [Order], { nullable: true })
	async getOrders(): Promise<Order[]> {
		return await this.orderRepo.find();
	}

	@Query(() => Order, { nullable: true })
	async getOrderById(@Arg('id') id: string): Promise<Order | undefined | null> {
		return await this.orderRepo.findOne(id);
	}

	@Mutation(() => Order)
	async addOrder(@Arg('data') newOrder: AddOrderInput): Promise<Order | undefined | null> {
		console.log(`received order: ${newOrder}`);

		// error checking
		if (!newOrder.sandwiches) return undefined;

		// create and save new order
		const order = new Order();
		order.userId = newOrder.userId ? newOrder.userId : 'anonymous';

		// TODO: this does not work
		// match ids to sandwiches
		const sandwiches: Sandwich[] = [];
		newOrder.sandwiches.forEach(async (id) => {
			sandwiches.push((await this.sandwchRepo.findOne(id)) as Sandwich);
		});

		order.sandwiches = Promise.resolve(sandwiches);
		order.status = 'processing';
		const res = await this.orderRepo.save(order).catch((err) => console.error(err));

		if (res) return res;
		return undefined;
	}
}
