import express, { Request, Response } from 'express';
import cors from 'cors';

// APP
const port = process.env.PORT || 31003;
const app = express();

const url = `http://localhost:${port}`;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use('/img', express.static(`${__dirname}/assets/images`));

// ROUTES
app.get('/', (request: Request, response: Response) => {
	response.send(`Welcome to Sandwitches Sandwich Service!`);
});

// START
app.listen(port, () => {
	console.info(`\nServer listening on ${url}/v1`);
});
