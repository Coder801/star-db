import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Breadcrump from "../../components/breadcrump";
import { PlanetsList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

import style from "./style.module.scss";

const { planets } = CATEGORIES;

const PlanetsPage = ({ history }) => {
  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump />
      </nav>
      <h2 className={style.title}>{planets.label}</h2>
      <div className={style.list}>
        <PlanetsList
          category={planets.name}
          onSelect={id => {
            const newPath = `${planets.route}/${id}`;
            history.push(newPath);
          }}
        />
      </div>
    </div>
  );
};

PlanetsPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(PlanetsPage);
