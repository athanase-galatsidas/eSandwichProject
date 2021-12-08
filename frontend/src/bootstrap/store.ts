import { createStore } from 'vuex';
import { get, post } from '@/modules/network';
import { Sandwich } from '@/interfaces/Sandwich';
import { OrderTrackStage } from '@/interfaces/OrderTrackStage';
import useGraphql from '@/composable/useGraphql';

const url = 'http://localhost:3001';
const { query } = useGraphql();

export default createStore({
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
						image,
					}
				}`,
			).then((data) => {
				const sandwiches: Sandwich[] = data.map((res: Object) => res as Sandwich);
				sandwiches.forEach((sandwich) => (sandwich.image = `${url}${sandwich.image}`));
				this.commit('setData', sandwiches);

				console.log(sandwiches);
			});
		},
	},
});
