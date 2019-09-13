import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Spinner = ({ size = 6 }) => {
  const style = {
    width: `${size}rem`,
    height: `${size}rem`
  };
  return (
    <div className="spinner-wrapper d-flex justify-content-center">
      <div className="spinner-border text-dark" style={style} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

Spinner.propTypes = {
  size: PropTypes.number
};
