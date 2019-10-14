import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";

const { people } = CATEGORIES;

interface IPersonData {
  url: string;
  image: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

interface IPerson {
  id: number;
  image: string;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
}

const transformPerson = (data: IPersonData): IPerson => {
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
