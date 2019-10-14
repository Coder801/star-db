import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";

const { starships } = CATEGORIES;

interface IStarshipData {
  url: string;
  image: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
}

interface IStarship {
  id: number;
  image: string;
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  maxAtmospheringSpeed: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
  consumables: string;
  hyperdriveRating: string;
  mglt: string;
  starshipClass: string;
}

const transformStarship = (data: IStarshipData): IStarship => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, starships.imageUrl, id.toString());

  return {
    id,
    image,
    name: data.name,
    model: data.model,
    manufacturer: data.manufacturer,
    costInCredits: data.cost_in_credits,
    length: data.length,
    maxAtmospheringSpeed: data.max_atmosphering_speed,
    crew: data.crew,
    passengers: data.passengers,
    cargoCapacity: data.cargo_capacity,
    consumables: data.consumables,
    hyperdriveRating: data.hyperdrive_rating,
    mglt: data.MGLT,
    starshipClass: data.starship_class
  };
};

export default transformStarship;
