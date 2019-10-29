import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner";

import style from "./style.module.scss";

class ItemDetails extends Component {
  static propTypes = {
    data: PropTypes.object,
    itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    getData: PropTypes.func,
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

    return data ? (
      <Details name={data.name} image={data.image} data={data} records={children} />
    ) : (
      <Spinner />
    );
  }
}

const ListItem = ({ data, label, field }) => (
  <li className={style.item}>
    <span className={style.label}>{label}:</span> <span className={style.field}>{data[field]}</span>
  </li>
);

const ListItemDesc = ({ data, label, field }) => (
  <li className={style.item}>
    <span className={style.label}>{label}:</span> <span className={style.field}>{data[field]}</span>
  </li>
);

const ListItemPoint = ({ data, label, field }) => (
  <li className={style.item}>
    <span className={style.label}>{label}:</span> <span className={style.field}>{data[field]}</span>
  </li>
);

const Details = ({ name, image, data, records }) => (
  <div className={style.details}>
    <figure className={style.figure}>
      <img className={style.image} src={image} alt={name} />
    </figure>
    <div className={style.description}>
      <h3 className={style.title}>{name}</h3>
      <ul className={style.list}>
        {React.Children.map(records, record => React.cloneElement(record, { data }))}
      </ul>
    </div>
  </div>
);

Details.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  data: PropTypes.object,
  records: PropTypes.node
};

ListItem.propTypes = {
  data: PropTypes.object,
  label: PropTypes.string,
  field: PropTypes.string
};

export default ItemDetails;
export { ListItem, ListItemDesc, ListItemPoint };
