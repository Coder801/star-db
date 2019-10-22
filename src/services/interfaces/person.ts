import { IDataInput, IDataOutput } from "./data";

interface IPersonInput extends IDataInput {
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

interface IPersonOutput extends IDataOutput {
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
}

export { IPersonInput, IPersonOutput };
