import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";
import SwapiService from "../../services/swapi";

import "./style.css";

export default class PersonDetails extends Component {
  swapiServer = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.onPesonUpdate();
  }

  componentDidUpdate(prevState) {
    if (this.props.personId !== prevState.personId) {
      this.onPesonUpdate();
    }
  }

  onPesonUpdate = () => {
    this.setState({
      person: null
    });

    const { personId } = this.props;
    if (personId) {
      this.swapiServer.getPerson(personId).then(person => {
        this.setState({
          person
        });
      });
    }
  };

  render() {
    const details = this.state.person ? (
      <Details person={this.state.person} />
    ) : (
      <Spinner />
    );

    return <div className="row no-gutters bg-light">{details}</div>;
  }
}

const Details = ({ person }) => {
  const {
    id,
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender
  } = person;

  return (
    <React.Fragment>
      <div className="col-lg-5 col-sm-12 d-flex flex-column">
        <img
          className="details-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={name}
        />
      </div>
      <div className="col-lg-7 col-sm-12 d-flex flex-column">
        <ul className="details-list list-group list-group-flush">
          <li className="list-group-item">
            <h5 className="mb-0 pt-2 pb-2">{name}</h5>
          </li>
          <li className="list-group-item">Height: {height}cm</li>
          <li className="list-group-item">Mass: {mass}kg</li>
          <li className="list-group-item">Hair color: {hairColor}</li>
          <li className="list-group-item">Skin color: {skinColor}</li>
          <li className="list-group-item">Eye color: {eyeColor}</li>
          <li className="list-group-item">Birth year: {birthYear}</li>
          <li className="list-group-item">Gender: {gender}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

PersonDetails.propTypes = {
  personId: PropTypes.number.isRequired
};
