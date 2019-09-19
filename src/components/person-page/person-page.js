import React, { Component } from "react";
import PropTypes from "prop-types";

import ItemList from "../item-list";
import PersonDetails from "../person-details";

import SwapiService from "../../services/swapi";
import ErrorBoundry from "../error-boundry";

const Row = ({ left, right }) => {
  return (
    <React.Fragment>
      <div className="col-sm-5">
        <h5 className="mb-3 mt-3">Details</h5>
        {left}
      </div>
      <div className="col-sm-7">
        <h5 className="mt-3 mb-3">Characters</h5>
        {right}
      </div>
    </React.Fragment>
  );
};

export default class PersonPage extends Component {
  swapiService = new SwapiService();

  state = {
    selected: null
  };

  onPersonSelected = id => {
    this.setState({
      selected: id
    });
  };

  onPeopleLoaded = id => {
    this.setState({
      selected: id
    });
  };

  render() {
    const { selected } = this.state;
    const personDetails = <PersonDetails personId={selected} />;
    const listItem = (
      <ItemList
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}
        onItemsLoaded={this.onPeopleLoaded}
      >
        {({ name }) => `${name}`}
      </ItemList>
    );

    return (
      <ErrorBoundry>
        <Row left={personDetails} right={listItem} />
      </ErrorBoundry>
    );
  }
}

Row.propTypes = {
  left: PropTypes.any.isRequired,
  right: PropTypes.any.isRequired
};
