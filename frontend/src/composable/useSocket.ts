import { io } from 'socket.io-client';
const socket = io('ws://localhost:31002');

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
