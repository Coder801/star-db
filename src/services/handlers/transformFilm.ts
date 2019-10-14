import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";

const { films } = CATEGORIES;

interface IFilmData {
  url: string;
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

interface IFilm {
  id: number;
  image: string;
  name: string;
  episodeId: string;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
}

const transformFilm = (data: IFilmData): IFilm => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, films.imageUrl, id.toString());

  return {
    id,
    image,
    name: data.title,
    episodeId: data.episode_id,
    openingCrawl: data.opening_crawl,
    director: data.director,
    producer: data.producer,
    releaseDate: data.release_date
  };
};

export default transformFilm;
