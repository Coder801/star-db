import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Breadcrump from "../../components/breadcrump";
import { FilmsList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

import style from "./style.module.scss";

const { films } = CATEGORIES;

const FilmsPage = ({ history }) => {
  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump />
      </nav>
      <h2 className={style.title}>{films.label}</h2>
      <div className={style.list}>
        <FilmsList
          category={films.name}
          limit={9}
          onSelect={id => {
            const newPath = `${films.route}/${id}`;
            history.push(newPath);
          }}
        />
      </div>
    </div>
  );
};

FilmsPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(FilmsPage);
