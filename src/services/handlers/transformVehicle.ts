import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";

const { vehicles } = CATEGORIES;

interface IVehicleData {
  url: string;
  image: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
}

interface IVehicle {
  id: number;
  image: string;
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  maxAtmospheringSpeed: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
  consumables: string;
  vehicleClass: string;
}

const transformVehicle = (data: IVehicleData): IVehicle => {
  const id = extractIdFromUrl(data.url);
  const image = joinImagePathUrl.jpg(API_IMAGE_BASE, vehicles.imageUrl, id.toString());

  return {
    id,
    image,
    name: data.name,
    model: data.model,
    manufacturer: data.manufacturer,
    costInCredits: data.cost_in_credits,
    length: data.length,
    maxAtmospheringSpeed: data.max_atmosphering_speed,
    crew: data.crew,
    passengers: data.passengers,
    cargoCapacity: data.cargo_capacity,
    consumables: data.consumables,
    vehicleClass: data.vehicle_class
  };
};

export default transformVehicle;
