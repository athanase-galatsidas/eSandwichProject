import { post } from '@/modules/network';

const url = 'http://localhost:31001/v1';

export default () => {
	const query = async (name: string, query: string) => {
		const res = await post(
			url,
			JSON.stringify({
				query,
			}),
		)
			.then((res) => res.json())
			.catch((err) => console.error({ err }));

		if (res.error) console.log(res.error);
		else return res.data[name];
	};

	const mutation = async (name: string, mutation: string) => {
		const res = await post(url, JSON.stringify({ mutation }))
			.then((res) => res.json())
			.catch((err) => console.error({ err }));

		if (res.error) console.log(res.error);
		else return res.data[name];
	};

	return {
		query,
		mutation,
	};
};
