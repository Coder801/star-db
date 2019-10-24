import { IDataInput, IDataOutput } from "./data";

export interface IPersonInput extends IDataInput {
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

export interface IPersonOutput extends IDataOutput {
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
}
