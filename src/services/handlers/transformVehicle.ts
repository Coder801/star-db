import { extractIdFromUrl, joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";
import { IVehicleInput, IVehicleOutput } from "../interfaces/vehicle";

const { vehicles } = CATEGORIES;

const transformVehicle = (data: IVehicleInput): IVehicleOutput => {
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
