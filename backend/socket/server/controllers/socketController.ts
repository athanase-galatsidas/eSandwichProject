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
				console.log(status);

				this.socket.broadcast.emit(`order:${payload}`, status);
			})
			.catch((err) => console.error('error'));
	};

	changeOrderStatus = async (payload: any) => {
		console.log(`received: ${payload}`);

		// try {
		// 	const newOrder = await this.manager.findOne(payload.id);

		// 	if (newOrder) {
		// 		newOrder.status = payload.status;
		// 		await this.manager.update(payload.id, newOrder);
		// 	}

		// 	this.socket.broadcast.emit(`order:${payload.id}`, newOrder?.status);

		// 	this.socket.broadcast.emit(`order:${payload.id}`, 1);
		// } catch (err) {
		// 	console.error(err);
		// }
	};
}
