export const get = async (url: string) => {
	return await fetch(url, {
		method: 'GET',
	});
};

export const post = async (url: string, body: any, auth?: string) => {
	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${auth}`,
		},
		body: body,
	});
};
