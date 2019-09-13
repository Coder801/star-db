export default class SwapiService {
  constructor() {
    this.apiBase = "https://swapi.co/api";
  }

  _extractIdFromUrl(url) {
    return url.match(/\/([0-9]*)\/$/)[1];
  }

  _transformPlanet = planet => {
    const id = this._extractIdFromUrl(planet.url);
    return {
      id,
      url: planet.url,
      image: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
      name: planet.name,
      diameter: planet.diameter,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      orbitalPeriod: planet.orbital_period,
      climate: planet.climate,
      gravity: planet.gravity,
      terrain: planet.terrain,
      surfaceWater: planet.surface_water
    };
  };

  _transformPerson = person => {
    const id = this._extractIdFromUrl(person.url);
    return {
      id,
      image: `https://starwars-visualguide.com/assets/img/person/${id}.jpg`,
      name: person.name,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      eyeColor: person.eye_color,
      birthYear: person.birth_year,
      gender: person.gender
    };
  };

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
    return response.results.map(person => this._transformPerson(person));
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
    return this._transformPerson(planet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}
