import express, { Request, Response } from 'express';
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

(async () => {
	const connectionOptions: ConnectionOptions = await getConnectionOptions();

	// await dropDatabase({ ifExist: true }).then(() => {
	// 	console.log('db dropped');
	// });

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
					const app = express(),
						port = process.env.PORT || 31001;

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
						console.info(`\nServer listening on ${url}/`);
					});
				}),
		)
		.catch((err) => {
			console.error(`could not create connection\n${err}`);
		});
})();
