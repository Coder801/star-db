import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { VehiclesList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

const { vehicles } = CATEGORIES;

const VehiclesPage = ({ history }) => {
  return (
    <VehiclesList
      category={vehicles.name}
      onSelect={id => {
        const newPath = `${vehicles.route}/${id}`;
        history.push(newPath);
      }}
    />
  );
};

VehiclesPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(VehiclesPage);
