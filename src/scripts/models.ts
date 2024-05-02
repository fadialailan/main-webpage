import { type AstroInstance } from "astro";

export interface AstroPage extends AstroInstance {
	creation_date: Date;
	title: string;
}
