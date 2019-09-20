import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner";
import SwapiService from "../../services/swapi";

import "./style.css";
class ItemList extends Component {
  state = {
    listItems: null,
    selected: 0,
    loading: true
  };

  onItemSelected = id => {
    const { onItemSelected } = this.props;

    this.setState({
      selected: id
    });
    onItemSelected(id);
  };

  render() {
    const { listItems, loading, selected } = this.state;
    const list = (
      <List
        listItems={listItems}
        selected={selected}
        onRender={this.props.children}
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
          className={`list-group-item ${active} ${id}`}
        >
          {label}
        </li>
      );
    });

  return <ul className="list-group item-list">{items(listItems, selected)}</ul>;
};

const viewWithData = (View, getDate) => {
  return class ViewWithData extends Component {
    componentDidMount() {
      const { selected } = this.state;
      const { getData, onItemsLoaded, defaultSelect = selected } = this.props;

      getData().then(data => {
        this.setState({
          listItems: data,
          loading: false,
          selected: data[defaultSelect].id
        });
        onItemsLoaded(this.state.selected);
      });
    }

    render() {
      return <View {...this.props} data={data} />;
    }
  };
};

const { getAllPeople } = new SwapiService();

export default viewWithData(ItemList, getAllPeople);

ItemList.propTypes = {
  defaultSelect: PropTypes.number,
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  onItemsLoaded: PropTypes.func.isRequired
};

List.propTypes = {
  listItems: PropTypes.array,
  onRender: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  onItemSelected: PropTypes.func.isRequired
};
