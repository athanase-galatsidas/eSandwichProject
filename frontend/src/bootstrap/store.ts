import { createStore } from 'vuex';
import { get, post } from '../modules/network';

const url = 'http://localhost:3001/v1';

export default createStore({
	state: {
		sandwitches: [],
	},

	mutations: {
		setData(state, payload: any) {
			state.sandwitches = payload;
		},
	},

	actions: {
		async getData() {
			await get(`${url}/sandwiches`)
				.then((res) => res.json())
				.then((data) => {
					// TODO: doe iets met data
					this.commit('setData', data.sandwiches);
				});
		},
	},
});
