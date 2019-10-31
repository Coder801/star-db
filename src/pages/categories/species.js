import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Breadcrump from "../../components/breadcrump";
import { SpeciesList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

import style from "./style.module.scss";

const { species } = CATEGORIES;

const SpeciesPage = ({ history }) => {
  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump />
      </nav>
      <h2 className={style.title}>{species.label}</h2>
      <div className={style.list}>
        <SpeciesList
          category={species.name}
          onSelect={id => {
            const newPath = `${species.route}/${id}`;
            history.push(newPath);
          }}
        />
      </div>
    </div>
  );
};

SpeciesPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(SpeciesPage);
