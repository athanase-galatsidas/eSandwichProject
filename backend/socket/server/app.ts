import express, { Request, Response } from 'express';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';

import cors from 'cors';

import { SocketController } from './controllers/socketController';

// APP
const port = process.env.PORT || 31002;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
});

const url = `ws://localhost:${port}`;

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.get('/', (request: Request, response: Response) => {
	response.send(`Welcome to Sandwitches Sandwich Socket Server!`);
});

// SOCKET
io.on('connection', (socket: Socket) => {
	console.log('new socket connection');

	const socketController = new SocketController(io, socket);

	socket.on('order:status', socketController.broadcastOrderStatus);
	socket.on('order:process', socketController.changeOrderStatus);

	socket.on('disconnect', (reason: any) => {
		console.log('socket disconnecting');
	});

	io.engine.on('connection_error', (err: any) => {
		console.log(err.req);
		console.log(err.code);
		console.log(err.message);
		console.log(err.context);
	});
});

// START
httpServer.listen(port, () => {
	console.info(`\nServer listening on ${url}`);
});
