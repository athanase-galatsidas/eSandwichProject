import express, { Request, Response } from 'express';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';

import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from 'typeorm';
import { createDatabase, dropDatabase } from 'typeorm-extension';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import cors from 'cors';

import { seedDatabase } from './seeders/dataSeeder';
import { SandwichResolver } from './resolvers/sandwichResolver';
import { IngredientResolver } from './resolvers/ingredientResolver';
import { OrderResolver } from './resolvers/orderResolver';
import { ReviewResolver } from './resolvers/reviewResolver';
import { SocketController } from './controllers/socketController';

(async () => {
	const connectionOptions: ConnectionOptions = await getConnectionOptions();

	await dropDatabase({ ifExist: true }).then(() => {
		console.log('db dropped');
	});

	// TODO: this creates a db even if it exists already
	await createDatabase({ ifNotExist: true }, connectionOptions)
		.then(() => console.log('db created'))
		.then(
			async () =>
				await createConnection().then(async (connection: Connection) => {
					seedDatabase(connection);

					let schema: GraphQLSchema = {} as GraphQLSchema;
					await buildSchema({
						resolvers: [SandwichResolver, IngredientResolver, OrderResolver],
					}).then((_) => {
						schema = _;
					});

					// APP
					const port = process.env.PORT || 31001;
					const app = express();
					const httpServer = createServer(app);
					const io = new Server(httpServer, {
						cors: {
							origin: '*',
							methods: ['GET', 'POST'],
						},
					});

					const url = `http://localhost:${port}`;

					// MIDDLEWARE
					app.use(express.json());
					app.use(cors());
					app.use('/img', express.static(`${__dirname}/assets/images`));
					app.use(
						'/v1/',
						graphqlHTTP((req, res) => ({
							schema: schema,
							context: { req, res },
							graphiql: true,
						})),
					);

					// ROUTES
					app.get('/', (request: Request, response: Response) => {
						response.send(`Welcome to Sandwitches Sandwich Service!`);
					});

					// START
					app.listen(port, () => {
						console.info(`\nServer listening on ${url}/v1`);
					});

					// SOCKET
					io.on('connection', (socket: Socket) => {
						console.log('new socket connection');

						const socketController = new SocketController(io, socket);

						socket.on('order:process', socketController.broadcastOrderStatus);

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
				}),
		)
		.catch((err) => {
			console.error(`could not create connection\n${err}`);
		});
})();
