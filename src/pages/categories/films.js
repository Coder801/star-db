import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { FilmsList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

const { films } = CATEGORIES;

const FilmsPage = ({ history }) => {
  return (
    <FilmsList
      onSelect={id => {
        const newPath = `${films.route}/${id}`;
        history.push(newPath);
      }}
    />
  );
};

FilmsPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(FilmsPage);
