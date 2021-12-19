import { post } from '@/modules/network';

const url = 'http://localhost:31001/v1';

export default () => {
	const query = async (name: string, query: string) => {
		const res = await post(url, JSON.stringify({ query: query }))
			.then((res) => res.json())
			.catch((err) => console.error({ err }));

		if (res.errors) console.log(res.errors);
		else return res.data[name];
	};

	const mutation = async (name: string, mutation: string) => {
		const res = await post(url, JSON.stringify({ query: mutation }))
			.then((res) => res.json())
			.catch((err) => console.error({ err }));

		if (res.errors) console.log(res.errors);
		else return res.data[name];
	};

	return {
		query,
		mutation,
	};
};
