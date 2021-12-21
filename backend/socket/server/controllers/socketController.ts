import { Server, Socket } from 'socket.io';
import axios from 'axios';

const url = 'http://localhost:31001/v1';

export class SocketController {
	public io: Server;
	public socket: Socket;

	constructor(io: Server, socket: Socket) {
		this.io = io;
		this.socket = socket;
	}

	broadcastOrderStatus = async (payload: any) => {
		console.log(`received: ${payload}`);

		// get the current status
		await axios
			.post(url, {
				query: `{ getOrderById(id: "${payload}") {status} }`,
			})
			.then((res) => {
				// and broadcast it
				const status = res.data.data.getOrderById.status;
				this.socket.broadcast.emit('order:update', { id: payload, status: status });
			})
			.catch((err) => console.error(err));
	};

	changeOrderStatus = async (payload: any) => {
		try {
			console.log(`received: ${payload}`);

			this.socket.broadcast.emit('order:update', payload);

			await axios
				.post(url, {
					query: `{ setOrderStatus(id: "${payload.id}", status: "${payload.status}") {status} }`,
				})
				.catch((err) => console.error('error'));
		} catch (error) {
			console.log(error);
		}
	};
}
