import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";

import "./style.css";
export default class ItemList extends Component {
  state = {
    listItems: null,
    loading: true,
    selected: 1
  };

  componentDidMount() {
    const { selected } = this.state;
    const { getData, onItemsLoaded } = this.props;

    getData().then(data => {
      this.setState({
        listItems: data,
        loading: false
      });
      onItemsLoaded(selected);
    });
  }

  onItemSelected = id => {
    const { onItemSelected } = this.props;

    this.setState({
      selected: id
    });
    onItemSelected(id);
  };

  render() {
    const { listItems, loading, selected } = this.state;
    const { onRender } = this.props;
    const list = (
      <List
        listItems={listItems}
        selected={selected}
        onRender={onRender}
        onItemSelected={this.onItemSelected}
      />
    );

    const spinner = <Spinner />;

    return !loading ? list : spinner;
  }
}

const List = ({ listItems, selected, onItemSelected, onRender }) => {
  const items = (listItems, selected) =>
    listItems.map(item => {
      const { id } = item;
      const label = onRender(item);
      const active = selected === id ? "active" : "";

      return (
        <li
          key={id}
          onClick={onItemSelected.bind(null, id)}
          className={`list-group-item ${active}`}
        >
          {label}
        </li>
      );
    });

  return <ul className="list-group item-list">{items(listItems, selected)}</ul>;
};

List.propTypes = {
  listItems: PropTypes.array,
  onRender: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  onItemSelected: PropTypes.func.isRequired
};

ItemList.propTypes = {
  getData: PropTypes.func.isRequired,
  onRender: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  onItemsLoaded: PropTypes.func.isRequired
};
