import cors from 'cors';
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

// APP
const app = express(),
	port = process.env.PORT || 3001;
const url = `http://localhost:${port}`;

// MIDDLEWARE
app.use(express.json());
app.use(cors())
app.use('/img', express.static(`${__dirname}/assets/images`));

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
				toppings: "Cheese, lettuce, tomato, mayonaise",
				description: "Just a basic sandwich"

			},
			{
				id: 1,
				name: 'Regular Sandwich',
				image: `${url}/img/regular.webp`,
				price: 12.0,
				toppings: "Cheese, ham, lettuce, tomato, egg, mayonaise",
				description: "Just a regular sandwich"
			},
			{
				id: 2,
				name: 'Vegan Sandwich',
				image: `${url}/img/vege.webp`,
				price: 13.0,
				toppings: "Beyond ham, vegan cheese, lettuce, tomato, vegan mayonaise",
				description: "A vegan sandwich with beyond ham, vegan cheese and vegan mayonaise"
			},
			{
				id: 3,
				name: 'Special Sandwich',
				image: `${url}/img/special.webp`,
				price: 14.0,
				toppings: 'Sausage, lettuce, tomato, "special sauce"',
				description: 'A sandwich with our very own "special sauce"'
			},
			{
				id: 4,
				name: 'Grilled Sandwich',
				image: `${url}/img/grilled.webp`,
				price: 12.0,
				toppings: "Cheese",
				description: "A grilled cheese sandwich grilled with the butter made from the milk of a sad cow."
			},
			{
				id: 5,
				name: 'Deluxe Sandwich',
				image: `${url}/img/deluxe.webp`,
				price: 14.0,
				toppings: "Cheese, bacon, tomato, egg, deluxe sauce",
				description: "A sandwich for the people who think they are better than others"
			},
		],
	};
	response.send(JSON.stringify(data));

});

// START
app.listen(port, () => {
	console.info(`\nServer listening on ${url}/`);
});



// TODO: fix de database

// (async () => {
// 	const connectionOptions: ConnectionOptions = await getConnectionOptions();

// 	// Create the database before we make the connection
// 	createDatabase({ ifNotExist: true }, connectionOptions)
// 		.then(() => console.log('database created'))
// 		.then(createConnection)
// 		.then(async (connection: Connection) => {
// 			// seed database
// 			seedDatabase(connection);

// 			// APP SETUP
// 			const app = express(),
// 				port = process.env.PORT || 3001;

// 			// MIDDLEWARE
// 			app.use(express.json());
//			app.use(express.static('assets'));

// 			// ROUTES
// 			app.get('/', (request: Request, response: Response) => {
// 				response.send(`Welcome to Sandwitches Sandwich Service!`);
// 			});

// 			// app.get('/v1/sandwich', async (request: Request, response: Response) => {
// 			// 	// quick test
// 			// 	// todo: move this to sandwich controller
// 			// 	const data = await getRepository(Sandwich).find();
// 			// 	response.send(JSON.stringify(data));
// 			// });

// 			// APP START
// 			app.listen(port, () => {
//				console.info(`\nServer listening on ${url}/`);
// 			});
// 		})
// 		.catch((error) => console.error(error));
// })();
