import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";
import { IFilmInput, IFilmOutput } from "../interfaces/films";

const { films } = CATEGORIES;

const transformFilm = (data: IFilmInput): IFilmOutput => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, films.imageUrl, id.toString());
  const category = films.name;

  return {
    id,
    image,
    category,
    name: data.title,
    episodeId: data.episode_id,
    openingCrawl: data.opening_crawl,
    director: data.director,
    producer: data.producer,
    releaseDate: data.release_date
  };
};

export default transformFilm;
