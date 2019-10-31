import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Breadcrump from "../../components/breadcrump";
import { StarshipsList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

import style from "./style.module.scss";

const { starships } = CATEGORIES;

const StarshipPage = ({ history }) => {
  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump />
      </nav>
      <h2 className={style.title}>{starships.label}</h2>
      <div className={style.list}>
        <StarshipsList
          limit={9}
          category={starships.name}
          onSelect={id => {
            const newPath = `${starships.route}/${id}`;
            history.push(newPath);
          }}
        />
      </div>
    </div>
  );
};

StarshipPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(StarshipPage);
