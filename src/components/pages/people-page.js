import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../context";
import { PersonList, PersonDetails } from "../sw-components";

import SwapiService from "../../services/swapi";

export default class PeoplePage extends Component {
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
      <PersonDetails onGoBack={this.onGoBack} itemId={selected} />
    ) : (
      <PersonList onSelect={this.onItemSelected} />
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
