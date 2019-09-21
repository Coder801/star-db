import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details";

import SwapiService from "../../services/swapi";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class PlanetPage extends Component {
  swapiService = new SwapiService();

  state = {
    selected: 2
  };

  onItemSelected = id => {
    this.setState({
      selected: id
    });
  };

  render() {
    const { selected } = this.state;
    const { getAllPlanets, getPlanet } = this.swapiService;
    const itemDetails = (
      <ItemDetails itemId={selected} getData={getPlanet}>
        <Record field="diameter" label="Diameter" />
        <Record field="population" label="Population" />
      </ItemDetails>
    );
    const listItem = (
      <ItemList
        selected={selected}
        getData={getAllPlanets}
        onSelect={this.onItemSelected}
      >
        {({ name }) => `${name}`}
      </ItemList>
    );

    return (
      <ErrorBoundry>
        <Row left={itemDetails} right={listItem} />
      </ErrorBoundry>
    );
  }
}
