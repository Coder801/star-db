import React from "react";
import PropTypes from "prop-types";

import { viewWithData } from "../hoc-helpers";

import "./style.css";

const ItemList = ({ ...props }) => {
  const renderList = ({ data, onSelect, selected, children: labelOutput }) =>
    data.map(item => {
      const { id } = item;
      const style = id === selected ? "active" : null;

      return (
        <li
          key={id}
          onClick={() => onSelect(id)}
          className={`list-group-item ${style}`}
        >
          {labelOutput(item)}
        </li>
      );
    });

  return <ul className="list-group item-list">{renderList(props)}</ul>;
};

export default viewWithData(ItemList);

ItemList.propTypes = {
  data: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};
