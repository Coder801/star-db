import { IDataInput, IDataOutput } from "./data";

interface ISpecieInput extends IDataInput {
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

interface ISpecieOutput extends IDataOutput {
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

export { ISpecieInput, ISpecieOutput };
