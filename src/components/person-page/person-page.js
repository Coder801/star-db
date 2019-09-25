import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { PersonList, PersonDetails } from "../sw-components";
import { SwapiServiceProvider } from "../context";

import SwapiService from "../../services/swapi";

export default class PersonPage extends Component {
  swapiService = new SwapiService();

  state = {
    selected: 1
  };

  onItemSelected = id => {
    this.setState({
      selected: id
    });
  };

  render() {
    const { selected } = this.state;
    const personList = (
      <PersonList selected={selected} onSelect={this.onItemSelected} />
    );

    const personDetails = <PersonDetails itemId={this.state.selected} />;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Row left={personDetails} right={personList} />
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
