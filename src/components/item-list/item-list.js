import React from "react";
import PropTypes from "prop-types";

import style from "./item-list.module.scss";

const ItemList = ({ category, ...props }) => {
  const renderList = ({ data, onSelect, children: labelOutput }) =>
    data.map(item => {
      const { id } = item;

      return (
        <div className={style.item} key={id} onClick={() => onSelect(id)}>
          {labelOutput(item)}
        </div>
      );
    });

  return <div className={`${style.list} ${style[category]}`}>{renderList(props)}</div>;
};

export default ItemList;

ItemList.propTypes = {
  data: PropTypes.array,
  children: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};
