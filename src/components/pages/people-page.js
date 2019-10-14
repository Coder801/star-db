import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { PersonList } from "../sw-components";
import { CATEGORIES } from "../../constants";

import style from "./style.module.scss";

const { people } = CATEGORIES;

const PeoplePage = ({ history }) => {
  return (
    <div className={style.page}>
      <h2 className={style.title}>{people.label}</h2>
      <PersonList
        onSelect={id => {
          const newPath = `${people.route}/${id}`;
          history.push(newPath);
        }}
      />
    </div>
  );
};

PeoplePage.propTypes = {
  history: PropTypes.object
};

export default withRouter(PeoplePage);
