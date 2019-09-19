import React from "react";
import PropTypes from "prop-types";

const Row = ({ left, right, leftTitle = "Details", rightTitle = "List" }) => {
  return (
    <div className="row pb-3 mb-3">
      <div className="col-sm-5">
        <h5 className="mb-3 mt-3">{leftTitle}</h5>
        {left}
      </div>
      <div className="col-sm-7">
        <h5 className="mt-3 mb-3">{rightTitle}</h5>
        {right}
      </div>
    </div>
  );
};

export default Row;

Row.propTypes = {
  left: PropTypes.any.isRequired,
  right: PropTypes.any.isRequired,
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string
};
