import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";
import { ISpecieInput, ISpecieOutput } from "../interfaces/specie";

const { species } = CATEGORIES;

const transformSpecie = (data: ISpecieInput): ISpecieOutput => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, species.imageUrl, id.toString());

  return {
    id,
    image,
    name: data.name,
    classification: data.classification,
    designation: data.designation,
    averageHeight: data.average_height,
    skinColors: data.skin_colors,
    hairColors: data.hair_colors,
    eyeColors: data.eye_colors,
    averageLifespan: data.average_lifespan,
    homeworld: data.homeworld,
    language: data.language
  };
};

export default transformSpecie;
