export const get = async (url: string) => {
	return await fetch(url, {
		method: 'GET',
	});
};

export const post = async (url: string, body: any) => {
	return await fetch(url, {
		method: 'POST',
		body: body,
	});
};
