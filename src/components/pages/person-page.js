import React, { Component } from "react";
import PropTypes from "prop-types";

import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../context";
import { PersonList, PersonDetails } from "../sw-components";

import SwapiService from "../../services/swapi";

export default class PersonPage extends Component {
  static propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
  };

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

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Row
            left={<PersonDetails itemId={selected} />}
            right={
              <PersonList selected={selected} onSelect={this.onItemSelected} />
            }
          />
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
