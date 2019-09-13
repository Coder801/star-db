import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";

import SwapiService from "../../services/swapi";

export default class ItemList extends Component {
  state = {
    people: null
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.swapiService.getAllPeople().then(people => {
      this.setState({
        people
      });
      this.props.onPeopleLoaded(people[0].id);
    });
  }

  onPersonSelected = id => {
    this.props.onPersonSelected(id);
  };

  personItems = people =>
    people.map(({ id, name }) => (
      <span
        key={id}
        onClick={() => {
          this.onPersonSelected(id);
        }}
        className="list-group-item list-group-item-action"
      >
        {name}
      </span>
    ));

  render() {
    const { people } = this.state;

    if (!people) {
      return <Spinner />;
    }

    const items = this.personItems(people);

    return <div className="list-group">{items}</div>;
  }
}

ItemList.propTypes = {
  onPersonSelected: PropTypes.func.isRequired,
  onPeopleLoaded: PropTypes.func.isRequired
};
