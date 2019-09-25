export default class SwapiService {
  _apiBase = "https://swapi.co/api";
  _imgBase = "https://starwars-visualguide.com/assets/img";

  _extractIdFromUrl(url) {
    return parseInt(url.match(/\/([0-9]*)\/$/)[1]);
  }

  _getImageUrl(base, type, id) {
    return `${base}/${type}/${id}.jpg`;
  }

  _transformPlanet = planet => {
    const id = this._extractIdFromUrl(planet.url);
    return {
      id,
      image: this._getImageUrl(this._imgBase, "planets", id),
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
      image: this._getImageUrl(this._imgBase, "characters", id),
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
    const response = await fetch(`${this._apiBase}${url}`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const body = await response.json();
    return body;
  }

  getTotalPlanets = async () => {
    const response = await this.getResource("/planets/");
    return response.count;
  };

  getAllPeople = async () => {
    const response = await this.getResource("/people/");
    return response.results.map(person => this._transformPerson(person));
  };

  getAllPlanets = async () => {
    const response = await this.getResource("/planets/");
    return response.results.map(planet => this._transformPlanet(planet));
  };

  getAllStarships = async () => {
    const response = await this.getResource("/starships/");
    return response.results.map(starship => this._transformPlanet(starship));
  };

  getPerson = async id => {
    const planet = await this.getResource(`/people/${id}/`);
    return this._transformPerson(planet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getStarship = async id => {
    return this.getResource(`/starships/${id}/`);
  };
}
