import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";
import { IPlanetInput, IPanetOutput } from "../interfaces/planet";

const { planets } = CATEGORIES;

const transformPlanet = (data: IPlanetInput): IPanetOutput => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, planets.imageUrl, id.toString());
  const category = planets.name;

  return {
    id,
    image,
    category,
    name: data.name,
    rotationPeriod: data.rotation_period,
    orbitalPeriod: data.orbital_period,
    diameter: data.diameter,
    climate: data.climate,
    gravity: data.gravity,
    terrain: data.terrain,
    surfaceWater: data.surface_water,
    population: data.population
  };
};

export default transformPlanet;
