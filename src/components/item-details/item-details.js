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
  <div className="item-details row no-gutters">
    <div className="card col-sm-5 bg-light">
      <img className="card-img" src={image} alt={name} />
    </div>
    <div className="card col-sm-7 bg-light">
      <div className="card-body">
        <h5 className="card-title text-white mb-0">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {React.Children.map(records, record =>
          React.cloneElement(record, { data })
        )}
      </ul>
      <div className="card-body">
        <a href="/" className="btn btn-primary card-link">
          Back
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
