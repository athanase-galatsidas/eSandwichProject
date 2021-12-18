import { io } from 'socket.io-client';
const socket = io('localhost:3001');

export default () => {
	const emit = async (event: string, payload: any) => {
		socket.emit(event, payload);
	};

	const on = async (event: string, listener: any) => {
		socket.on(event, listener);
	};

	return {
		emit,
		on,
	};
};
