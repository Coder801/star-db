import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../context";
import { StarshipList, StarshipDetails } from "../sw-components";

import SwapiService from "../../services/swapi";

export default class StarshipPage extends Component {
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
      <StarshipDetails onGoBack={this.onGoBack} itemId={selected} />
    ) : (
      <StarshipList onSelect={this.onItemSelected} />
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
