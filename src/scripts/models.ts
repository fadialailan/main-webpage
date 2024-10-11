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

export interface AstroProjectPage extends AstroInstance {
  title: string;
  description: string;
  repository_url: string;
  repository_type: RepositoryType;
  repository_location: RepositoryLocation;
  image_link?: string;
}


