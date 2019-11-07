import React from "react";
import PropTypes from "prop-types";

import placeholder from "./img/placeholder.svg";

const Image = ({ src, alt }) => {
  const style = {
    width: "100%",
    height: "100%",
    maxWidth: "100%"
  };

  const onError = event => {
    event.target.src = placeholder;
  };

  return <img src={src} alt={alt} style={style} onError={onError} />;
};

export default Image;

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};
