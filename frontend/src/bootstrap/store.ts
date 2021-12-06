import { createStore } from 'vuex';
import { get, post } from '@/modules/network';
import { Sandwich } from '@/interfaces/Sandwich';

const url = 'http://localhost:3001';

export default createStore({
	state: {
		sandwitches: Array<Sandwich>(),
		cart: Array<Sandwich>(),
	},

	mutations: {
		setData(state, payload: any) {
			state.sandwitches = payload;
		},
		addCartItem(state, payload: Sandwich) {
			state.cart.push(payload);
		},
	},

	actions: {
		async getData() {
			await get(`${url}/sandwiches`)
				.then((res) => res.json())
				.then((data) => {
					// TODO: doe iets met data
					const sandwiches = data.sandwiches.map((res: Object) => res as Sandwich);
					this.commit('setData', sandwiches);
				});
		},
	},
});
