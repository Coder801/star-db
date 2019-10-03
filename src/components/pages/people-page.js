import React from "react";
import PropTypes from "prop-types";

import { PersonList } from "../sw-components";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ history }) => {
  return (
    <PersonList
      onSelect={id => {
        const newPath = `/people/${id}`;
        history.push(newPath);
      }}
    />
  );
};

PeoplePage.propTypes = {
  history: PropTypes.object
};

export default withRouter(PeoplePage);
