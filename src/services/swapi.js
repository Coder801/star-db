export default class SwapiService {
  constructor() {
    this.apiBase = "https://swapi.co/api";
  }

  async getResource(url) {
    const response = await fetch(`${this.apiBase}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const body = await response.json();
    return body;
  }

  async getTotalPlanets() {
    const response = await this.getResource("/planets/");
    return response.count;
  }

  async getAllPeople() {
    const response = await this.getResource("/people/");
    return response.results;
  }

  async getAllPlanets() {
    const response = await this.getResource("/planets/");
    return response.results;
  }

  async getAllStarships() {
    const response = await this.getResource("/starships/");
    return response.results;
  }

  async getPerson(id) {
    const planet = await this.getResource(`/people/${id}`);
    return this._transformPlanet(planet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }

  _extractIdFromUrl(url) {
    return url.match(/\/([0-9]*)\/$/)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractIdFromUrl(planet.url),
      name: planet.name,
      diameter: planet.diameter,
      population: planet.population,
      rotationPeriod: planet.rotation_period
    };
  }
}
