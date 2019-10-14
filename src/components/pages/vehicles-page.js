import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { VehiclesList } from "../sw-components";
import { CATEGORIES } from "../../constants";

const { vehicles } = CATEGORIES;

const VehiclesPage = ({ history }) => {
  return (
    <VehiclesList
      onSelect={id => {
        const newPath = `${vehicles}/${id}`;
        history.push(newPath);
      }}
    />
  );
};

VehiclesPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(VehiclesPage);
