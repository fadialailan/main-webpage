import { type AstroInstance } from "astro";

//repository
export enum RepositoryType {
  GIT_REPO,
}

export enum RepositoryLocation {
  GITHUB,
}

export interface AstroPlaygroundPage extends AstroInstance {
	creation_date: Date;
	title: string;
}


