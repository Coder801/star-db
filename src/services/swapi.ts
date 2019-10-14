import ApiService from "./api-service";
import {
  transformPerson,
  transformFilm,
  transformPlanet,
  transformSpecie,
  transformVehicle,
  transformStarship
} from "./handlers";
import { API_BASE } from "./../constants";

interface Service {
  get(url: string, conf?: object): Promise<any>;
}

class SwapiService {
  private service: Service = new ApiService({ baseURL: API_BASE });

  private getAll = async (url: string, handler: any) => {
    const response = await this.service.get(url);
    return response.data.results.map(handler);
  };

  private getById = async (url: string, handler: any) => {
    const response = await this.service.get(url);
    return handler(response.data);
  };

  private getCount = async (url: string) => {
    const response = await this.service.get(url);
    return response.data.count;
  };

  getAllPeople = async () => await this.getAll("/people", transformPerson);
  getPerson = async (id: number) => await this.getById(`/people/${id}/`, transformPerson);

  getAllFilms = async () => await this.getAll("/films", transformFilm);
  getFilm = async (id: number) => await this.getById(`/films/${id}/`, transformFilm);

  getAllPlanets = async () => await this.getAll("/planets", transformPlanet);
  getPlanet = async (id: number) => await this.getById(`/planets/${id}/`, transformPlanet);

  getAllSpecies = async () => await this.getAll("/species", transformSpecie);
  getSpecie = async (id: number) => await this.getById(`/species/${id}/`, transformSpecie);

  getAllVehicles = async () => await this.getAll("/vehicles", transformVehicle);
  getVehicle = async (id: number) => await this.getById(`/vehicles/${id}/`, transformVehicle);

  getAllStarships = async () => await this.getAll("/starships", transformStarship);
  getStarships = async (id: number) => await this.getById(`/starships/${id}/`, transformStarship);

  getTotalPlanets = async (id: number) => await this.getCount(`/planets/`);
}

export default SwapiService;
