import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner";

import "./style.css";

class ItemDetails extends Component {
  static propTypes = {
    data: PropTypes.object,
    itemId: PropTypes.number.isRequired,
    getData: PropTypes.func.isRequired,
    children: PropTypes.node
  };

  state = {
    data: null
  };

  componentDidMount() {
    this.onItemUpdate(this.props.itemId);
  }

  componentDidUpdate(prevState) {
    if (this.props.itemId !== prevState.itemId) {
      this.onItemUpdate();
    }
  }

  onItemUpdate = () => {
    this.setState({
      data: null
    });

    const { itemId, getData } = this.props;

    if (itemId) {
      getData(itemId).then(data => {
        this.setState({
          data
        });
      });
    }
  };

  render() {
    const { children } = this.props;
    const { data } = this.state;

    return data ? <Details data={data} records={children} /> : <Spinner />;
  }
}

const Record = ({ data, label, field }) => (
  <li className="list-group-item">
    {label}: {data[field]}
  </li>
);

const Details = ({ data, data: { name, image }, records }) => (
  <div className="row no-gutters bg-light">
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title text-white mb-0">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {React.Children.map(records, record =>
          React.cloneElement(record, { data })
        )}
      </ul>
      <div className="card-body">
        <a href="/" className="card-link">
          More details
        </a>
      </div>
    </div>
  </div>
);

Details.propTypes = {
  data: PropTypes.object,
  records: PropTypes.node
};

Record.propTypes = {
  data: PropTypes.object,
  label: PropTypes.string,
  field: PropTypes.string
};

export default ItemDetails;
export { Record };
