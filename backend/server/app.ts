import express, { Request, Response } from 'express';
import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from 'typeorm';
import { createDatabase } from 'typeorm-extension';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import cors from 'cors';

import { seedDatabase } from './seeders/dataSeeder';
import { Sandwich } from './entities/sandwich';
import { SandwichResolver } from './resolvers/sandwichResolver';
import { IngredientResolver } from './resolvers/ingredientResolver';

(async () => {
	const connectionOptions: ConnectionOptions = await getConnectionOptions();

	createDatabase({ ifNotExist: true }, connectionOptions)
		.then(() => console.log('db created'))
		.then(
			async () =>
				await createConnection().then(async (connection: Connection) => {
					seedDatabase(connection);

					let schema: GraphQLSchema = {} as GraphQLSchema;
					await buildSchema({
						resolvers: [SandwichResolver, IngredientResolver],
					}).then((_) => {
						schema = _;
					});

					// APP
					const app = express(),
						port = process.env.PORT || 3001;
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

					// TODO: temporary oplosing tot database trug werkt
					app.get('/v1/sandwiches', (request: Request, response: Response) => {
						const data = {
							sandwiches: [
								{
									id: 0,
									name: 'Basic Sandwich',
									image: `${url}/img/basic.webp`,
									price: 11.5,
								},
								{
									id: 1,
									name: 'Regular Sandwich',
									image: `${url}/img/regular.webp`,
									price: 12.0,
								},
								{
									id: 2,
									name: 'Vegetarian Sandwich',
									image: `${url}/img/vege.webp`,
									price: 13.0,
								},
								{
									id: 3,
									name: 'Special Sandwich',
									image: `${url}/img/special.webp`,
									price: 14.0,
								},
								{
									id: 4,
									name: 'Grilled Sandwich',
									image: `${url}/img/grilled.webp`,
									price: 12.0,
								},
								{
									id: 5,
									name: 'Deluxe Sandwich',
									image: `${url}/img/deluxe.webp`,
									price: 14.0,
								},
							],
						};
						response.send(JSON.stringify(data));
					});

					// START
					app.listen(port, () => {
						console.info(`\nServer listening on ${url}/`);
					});
				}),
		);
})();
