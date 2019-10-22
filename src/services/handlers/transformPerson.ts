import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";
import { IPersonInput, IPersonOutput } from "../interfaces/person";

const { people } = CATEGORIES;

const transformPerson = (data: IPersonInput): IPersonOutput => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, people.imageUrl, id.toString());

  return {
    id,
    image,
    name: data.name,
    height: data.height,
    mass: data.mass,
    hairColor: data.hair_color,
    skinColor: data.skin_color,
    eyeColor: data.eye_color,
    birthYear: data.birth_year,
    gender: data.gender
  };
};

export default transformPerson;
