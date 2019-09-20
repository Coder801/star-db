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
      <Details item={this.state.item} records={this.props.children} />
    ) : (
      <Spinner />
    );

    return <div className="row no-gutters bg-light">{details}</div>;
  }
}

const Details = ({ item, records }) => {
  const { image, name } = item;

  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title text-white mb-0">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {React.Children.map(records, record =>
          React.cloneElement(record, { item })
        )}
      </ul>
      <div className="card-body">
        <a href="/" className="card-link">
          More details
        </a>
      </div>
    </div>
  );
};

const Record = ({ item, label, field }) => {
  return (
    <li className="list-group-item">
      {label}: {item[field]}
    </li>
  );
};

export { Record };

ItemDetails.propTypes = {
  itemId: PropTypes.number,
  getData: PropTypes.func.isRequired
};

Details.propTypes = {
  item: PropTypes.object.isRequired
};

Record.propTypes = {
  item: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired
};
