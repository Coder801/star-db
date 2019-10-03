import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";

const Spinner = ({ size = 6 }) => {
  const inlineStyle = {
    width: `${size}rem`,
    height: `${size}rem`
  };
  return (
    <div className={style.spinner}>
      <div className={style.loader} style={inlineStyle} role="status"></div>
    </div>
  );
};

export default Spinner;

Spinner.propTypes = {
  size: PropTypes.number
};
