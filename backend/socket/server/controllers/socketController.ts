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

		await axios
			.post(url, `{getOrderById(id: "393d45f8-c4c8-4ee1-a738-6618c10424aa") {status}}`)
			// .then((res) => console.log(res.data.json()))
			.then((data) => {
				console.log(data);
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
