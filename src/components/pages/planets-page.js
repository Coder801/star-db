import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../context";
import { PlanetList, PlanetDetails } from "../sw-components";

import SwapiService from "../../services/swapi";

export default class PlanetPage extends Component {
  swapiService = new SwapiService();

  state = {
    selected: null
  };

  onGoBack = event => {
    event.preventDefault();
    this.setState({
      selected: null
    });
  };

  onItemSelected = id => {
    this.setState({
      selected: id
    });
  };

  render() {
    const { selected } = this.state;
    const content = selected ? (
      <PlanetDetails onGoBack={this.onGoBack} itemId={selected} />
    ) : (
      <PlanetList onSelect={this.onItemSelected} />
    );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          {content}
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
