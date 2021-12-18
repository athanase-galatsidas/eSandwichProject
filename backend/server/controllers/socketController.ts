import { Server, Socket } from 'socket.io';
import { getRepository } from 'typeorm';
import { Order } from '../entities/order';

export class SocketController {
	public io: Server;
	public socket: Socket;

	manager = getRepository<Order>('Order');

	constructor(io: Server, socket: Socket) {
		this.io = io;
		this.socket = socket;
	}

	broadcastOrderStatus = async (payload: any) => {
		console.log(`received: ${payload}`);

		try {
			const order = await this.manager.findOne(payload.id);
			this.socket.broadcast.emit(`order:${payload.id}`, order?.status);
		} catch (err) {
			console.error(err);
		}
	};

	changeOrderStatus = async (payload: any) => {
		console.log(`received: ${payload}`);

		try {
			const newOrder = await this.manager.findOne(payload.id);

			if (newOrder) {
				newOrder.status = payload.status;
				await this.manager.update(payload.id, newOrder);
			}

			this.socket.broadcast.emit(`order:${payload.id}`, newOrder?.status);
		} catch (err) {
			console.error(err);
		}
	};
}
