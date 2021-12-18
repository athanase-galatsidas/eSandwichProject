import { Ingredient } from './Ingredient';

export interface Sandwich {
	sandwichId: any;
	name: string;
	description: string;
	image: string;
	available: boolean;
	price: number;
	rating: number;
	ingredients: Ingredient[];
}
