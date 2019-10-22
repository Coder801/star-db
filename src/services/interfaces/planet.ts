import { IDataInput, IDataOutput } from "./data";

interface IPlanetInput extends IDataInput {
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

interface IPanetOutput extends IDataOutput {
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
}

export { IPlanetInput, IPanetOutput };
