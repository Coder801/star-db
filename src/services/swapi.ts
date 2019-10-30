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

  private getAll = async (url: string, handler: any, limit: number = 10) => {
    const getDataRecursiveByLimit = async (limit: number) => {
      const getData = async (url: string, data: object[] = []): Promise<any> => {
        const response = await this.service.get(url);
        data.push(...response.data.results);

        if (limit > data.length && response.data.next) {
          return await getData(response.data.next, data);
        }

        return data;
      };

      const result = await getData(url);

      return result.slice(0, limit);
    };

    const response = await getDataRecursiveByLimit(limit);
    return response.map(handler);
  };

  private getById = async (url: string, handler: any) => {
    const response = await this.service.get(url);
    return handler(response.data);
  };

  private getCount = async (url: string) => {
    const response = await this.service.get(url);
    return response.data.count;
  };

  getAllPeople = async (limit: number) => await this.getAll("/people", transformPerson, limit);
  getPerson = async (id: number) => await this.getById(`/people/${id}/`, transformPerson);

  getAllFilms = async (limit: number) => await this.getAll("/films", transformFilm, limit);
  getFilm = async (id: number) => await this.getById(`/films/${id}/`, transformFilm);

  getAllPlanets = async (limit: number) => await this.getAll("/planets", transformPlanet, limit);
  getPlanet = async (id: number) => await this.getById(`/planets/${id}/`, transformPlanet);

  getAllSpecies = async (limit: number) => await this.getAll("/species", transformSpecie, limit);
  getSpecie = async (id: number) => await this.getById(`/species/${id}/`, transformSpecie);

  getAllVehicles = async (limit: number) => await this.getAll("/vehicles", transformVehicle, limit);
  getVehicle = async (id: number) => await this.getById(`/vehicles/${id}/`, transformVehicle);

  getAllStarships = async (limit: number) =>
    await this.getAll("/starships", transformStarship, limit);
  getStarship = async (id: number) => await this.getById(`/starships/${id}/`, transformStarship);

  getTotalPlanets = async (id: number) => await this.getCount(`/planets/`);
}

export default SwapiService;
