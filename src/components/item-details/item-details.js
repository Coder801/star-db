import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";

import "./style.css";

export default class ItemDetails extends Component {
  state = {
    item: null
  };

  componentDidMount() {
    this.onItemUpdate();
  }

  componentDidUpdate(prevState) {
    if (this.props.itemId !== prevState.itemId) {
      this.onItemUpdate();
    }
  }

  onItemUpdate = () => {
    this.setState({
      item: null
    });

    const { itemId, getData } = this.props;
    if (itemId) {
      getData(itemId).then(item => {
        this.setState({
          item
        });
      });
    }
  };

  render() {
    const details = this.state.item ? (
      <Details item={this.state.item} />
    ) : (
      <Spinner />
    );

    return <div className="row no-gutters bg-light">{details}</div>;
  }
}

const Details = ({ item }) => {
  const {
    image,
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender
  } = item;

  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title text-white mb-0">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Height: {height}cm</li>
        <li className="list-group-item">Mass: {mass}kg</li>
        <li className="list-group-item">Hair color: {hairColor}</li>
        <li className="list-group-item">Skin color: {skinColor}</li>
        <li className="list-group-item">Eye color: {eyeColor}</li>
        <li className="list-group-item">Birth year: {birthYear}</li>
        <li className="list-group-item">Gender: {gender}</li>
      </ul>
      <div className="card-body">
        <a href="/" className="card-link">
          Card link
        </a>
        <a href="/" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  itemId: PropTypes.number,
  getData: PropTypes.func.isRequired
};

Details.propTypes = {
  item: PropTypes.object.isRequired
};
