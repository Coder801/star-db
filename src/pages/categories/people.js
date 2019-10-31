import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Breadcrump from "../../components/breadcrump";
import { PersonList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

import style from "./style.module.scss";

const { people } = CATEGORIES;

const PeoplePage = ({ history }) => {
  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump />
      </nav>
      <h2 className={style.title}>{people.label}</h2>
      <div className={style.list}>
        <PersonList
          category={people.name}
          limit={12}
          onSelect={id => {
            const newPath = `${people.route}/${id}`;
            history.push(newPath);
          }}
        />
      </div>
    </div>
  );
};

PeoplePage.propTypes = {
  history: PropTypes.object
};

export default withRouter(PeoplePage);
