import React, { Component, Fragment } from "react";
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
    const { itemId, getData, onLoadData } = this.props;

    if (itemId) {
      getData(itemId).then(data => {
        this.setState({
          data
        });
        onLoadData(data.name);
      });
    }
  };

  render() {
    const { children, category } = this.props;
    const { data } = this.state;

    return data ? (
      <Details
        name={data.name}
        image={data.image}
        data={data}
        records={children}
        category={category}
      />
    ) : (
      <Spinner />
    );
  }
}

const ListItem = ({ data, label, field, size }) => (
  <li className={`${style.item} ${style[size]}`}>
    <span className={style.label}>{label}:</span> <span className={style.field}>{data[field]}</span>
  </li>
);

const ListItemDesc = ({ data, label, field, size }) => (
  <li className={`${style.item} ${style[size]}`}>
    <span className={style.label}>{label}:</span> <span className={style.text}>{data[field]}</span>
  </li>
);

const ListItemPoint = ({ data, label, field, size }) => (
  <li className={`${style.item} ${style[size]}`}>
    <span className={style.label}>{label}:</span> <span className={style.field}>{data[field]}</span>
  </li>
);

const Details = ({ name, image, data, records, category }) => (
  <div className={`${style.details} ${style[category]}`}>
    <h3 className={style.title}>{name}</h3>
    <div className={style.info}>
      <figure className={style.figure}>
        <img className={style.image} src={image} alt={name} />
      </figure>
      <div className={style.description}>
        <ul className={style.list}>
          {React.Children.map(records, record => React.cloneElement(record, { data }))}
        </ul>
      </div>
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
