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

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}
