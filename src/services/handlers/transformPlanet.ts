import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";

const { planets } = CATEGORIES;

interface IPlanetData {
  url: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

interface IPanet {
  id: number;
  image: string;
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
}

const transformPlanet = (data: IPlanetData): IPanet => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, planets.imageUrl, id.toString());

  return {
    id,
    image,
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
