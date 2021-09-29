import express, { Request, Response } from 'express';

// APP SETUP
const app = express(),
	port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/', (request: Request, response: Response) => {
	response.send(`test test`);
});

// APP START
app.listen(port, () => {
	console.info(`\nServer listening on http://localhost:${port}/`);
});
