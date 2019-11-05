import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";
import { IStarshipInput, IStarshipOutput } from "../interfaces/starship";

const { starships } = CATEGORIES;

const transformStarship = (data: IStarshipInput): IStarshipOutput => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, starships.imageUrl, id.toString());
  const category = starships.name;

  return {
    id,
    image,
    category,
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
