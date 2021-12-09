import { post } from '@/modules/network';

export default () => {
	const query = async (url: string, name: string, query: string, variables?: Object) => {
		const res = await post(
			url,
			JSON.stringify({
				query,
				variables,
			}),
		)
			.then((res) => res.json())
			.catch((err) => console.error({ err }));

		return res.data[name];
	};

	return {
		query,
	};
};
