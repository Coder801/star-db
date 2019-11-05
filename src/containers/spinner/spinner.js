import React from "react";
import PropTypes from "prop-types";

import style from "./spinner.module.css";

const Spinner = ({ size = 6, width = 8 }) => {
  const inlineStyle = {
    width: `${size}rem`,
    height: `${size}rem`,
    borderWidth: `${width}px`
  };
  return (
    <div className={style.spinner}>
      <div className={style.loader} style={inlineStyle} role="status"></div>
    </div>
  );
};

export default Spinner;

Spinner.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number
};
