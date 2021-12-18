import { createStore } from 'vuex';
import { Sandwich } from '@/interfaces/Sandwich';
import { OrderTrackStage } from '@/interfaces/OrderTrackStage';
import useGraphql from '@/composable/useGraphql';

const url = 'http://localhost:31001';
const { query } = useGraphql();

const store = createStore({
	state: {
		sandwitches: Array<Sandwich>(),
		cart: Array<Sandwich>(),
		trackStage: {} as OrderTrackStage,
	},

	mutations: {
		setData(state, payload: any) {
			state.sandwitches = payload;
		},
		addCartItem(state, payload: Sandwich) {
			state.cart.push(payload);
		},
		removeCartItem(state, payload: Sandwich) {
			const index = state.cart.indexOf(payload);
			if (index > -1) state.cart.splice(index, 1);
		},
		setOrderStage(state, payload: OrderTrackStage) {
			state.trackStage = payload;
		},
	},

	actions: {
		async getData() {
			await query(
				`${url}/v1`,
				'getSandwiches',
				`{
				getSandwiches
					{
						sandwichId,
						name,
						description,
						image,
						available,
						price,
						rating,
						ingredients {
							ingredientId,
							name,
						}
					}
				}`,
			).then((data) => {
				const sandwiches: Sandwich[] = data.map((res: Object) => res as Sandwich);
				sandwiches.forEach((sandwich) => (sandwich.image = `${url}${sandwich.image}`));

				// TODO: remove this later, small delay for testing loading states
				setTimeout(() => {
					this.commit('setData', sandwiches);
				}, 2000);

				// this.commit('setData', sandwiches);
			});
		},
	},
});

export default store;
