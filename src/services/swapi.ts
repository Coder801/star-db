import ApiService from "./api-service";
import {
  transformPerson,
  transformFilm,
  transformPlanet,
  transformSpecie,
  transformVehicle,
  transformStarship
} from "./handlers";
import { API_BASE, CATEGORIES } from "./../constants";
const { people, films, species, starships, vehicles, planets } = CATEGORIES;

interface Service {
  get(url: string, conf?: object): Promise<any>;
}

class SwapiService {
  private service: Service = new ApiService({ baseURL: API_BASE });

  private getAll = async (url: string, handler: any, limit: number = 100, config: object = {}) => {
    const getDataRecursiveByLimit = async (limit: number) => {
      const getData = async (url: string, data: object[] = []): Promise<any> => {
        const response = await this.service.get(url, config);
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

  private getById = async (url: string, handler: any, config: object = {}) => {
    const response = await this.service.get(url, config);
    return handler(response.data);
  };

  private getCount = async (url: string) => {
    const response = await this.service.get(url);
    return response.data.count;
  };

  private getBySearch = async (value: string) => {
    // const data = routes.reduce(async (acc: any, route: string) => {
    //   const accumulator = await acc.then();
    //   const response = await this.service.get(route, {
    //     params: {
    //       search: value
    //     }
    //   });
    //   accumulator.push(response.data);
    //   return Promise.resolve(accumulator);
    // }, Promise.resolve([]));
    // return data;

    const config = {
      params: {
        search: value
      }
    }

    const result = Promise.all([
      this.getAllPeople(10, config),
      this.getAllFilms(10, config),
      this.getAllPlanets(10, config),
      this.getAllSpecies(10, config),
      this.getAllVehicles(10, config),
      this.getAllStarships(10, config)
    ]);

    return result.then(values =>
      values.reduce((accumulator, current) => accumulator.concat(current), [])
    );
  };

  getAllPeople = async (limit: number, config: object = {}) =>
    await this.getAll(people.route, transformPerson, limit, config);
  getPerson = async (id: number) => await this.getById(`${people.route}/${id}/`, transformPerson);

  getAllFilms = async (limit: number, config: object = {}) =>
    await this.getAll(films.route, transformFilm, limit, config);
  getFilm = async (id: number) => await this.getById(`${films.route}/${id}/`, transformFilm);

  getAllPlanets = async (limit: number, config: object = {}) =>
    await this.getAll(planets.route, transformPlanet, limit, config);
  getPlanet = async (id: number) => await this.getById(`${planets.route}/${id}/`, transformPlanet);

  getAllSpecies = async (limit: number, config: object = {}) =>
    await this.getAll(species.route, transformSpecie, limit, config);
  getSpecie = async (id: number) => await this.getById(`${species.route}/${id}/`, transformSpecie);

  getAllVehicles = async (limit: number, config: object = {}) =>
    await this.getAll(vehicles.route, transformVehicle, limit, config);
  getVehicle = async (id: number) =>
    await this.getById(`${vehicles.route}/${id}/`, transformVehicle);

  getAllStarships = async (limit: number, config: object = {}) =>
    await this.getAll(starships.route, transformStarship, limit, config);
  getStarship = async (id: number) =>
    await this.getById(`${starships.route}/${id}/`, transformStarship);

  getTotalPlanets = async (id: number) => await this.getCount(`/planets/`);

  getFromSearch = async (search: string) => await this.getBySearch(search);
}

export default SwapiService;
