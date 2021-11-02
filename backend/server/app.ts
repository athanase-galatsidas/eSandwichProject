import express, { Request, Response } from 'express';
import {
	Connection,
	ConnectionOptions,
	createConnection,
	getConnectionOptions,
	getRepository,
} from 'typeorm';
import { createDatabase } from 'typeorm-extension';
import { Sandwich } from './entities/sandwich';
import { seedDatabase } from './seeders/dataSeeder';

(async () => {
	const connectionOptions: ConnectionOptions = await getConnectionOptions();

	// Create the database before we make the connection
	createDatabase({ ifNotExist: true }, connectionOptions)
		.then(() => console.log('database created'))
		.then(createConnection)
		.then(async (connection: Connection) => {
			// seed database
			seedDatabase(connection);

			// APP SETUP
			const app = express(),
				port = process.env.PORT || 3000;

			// MIDDLEWARE
			app.use(express.json());

			// ROUTES
			app.get('/', (request: Request, response: Response) => {
				response.send(`Welcome to Sandwitches Sandwich Service!`);
			});

			// app.get('/v1/sandwich', async (request: Request, response: Response) => {
			// 	// quick test
			// 	// todo: move this to sandwich controller
			// 	const data = await getRepository(Sandwich).find();
			// 	response.send(JSON.stringify(data));
			// });

			// APP START
			app.listen(port, () => {
				console.info(`\nServer listening on http://localhost:${port}/`);
			});
		})
		.catch((error) => console.error(error));
})();
