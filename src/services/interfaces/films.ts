import { IDataInput, IDataOutput } from "./data";

export interface IFilmInput extends IDataInput {
  url: string;
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

export interface IFilmOutput extends IDataOutput {
  id: number;
  image: string;
  name: string;
  episodeId: string;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
}
