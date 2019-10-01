import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const ItemList = ({ ...props }) => {
  const renderList = ({ data, onSelect, children: labelOutput }) =>
    data.map(item => {
      const { id } = item;

      return (
        <div className="card" key={id} onClick={() => onSelect(id)}>
          {labelOutput(item)}
        </div>
      );
    });

  return <div className="row item-list">{renderList(props)}</div>;
};

export default ItemList;

ItemList.propTypes = {
  data: PropTypes.array,
  children: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};
