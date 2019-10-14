import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";

const { species } = CATEGORIES;

interface ISpecieData {
  url: string;
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
}

interface ISpecie {
  id: number;
  image: string;
  name: string;
  classification: string;
  designation: string;
  averageHeight: string;
  skinColors: string;
  hairColors: string;
  eyeColors: string;
  averageLifespan: string;
  homeworld: string;
  language: string;
}

const transformSpecie = (data: ISpecieData): ISpecie => {
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
