import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Breadcrump from "../../components/breadcrump";
import { VehiclesList } from "../../components/sw-components";
import { CATEGORIES } from "../../constants";

import style from "./style.module.scss";

const { vehicles } = CATEGORIES;

const VehiclesPage = ({ history }) => {
  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump />
      </nav>
      <h2 className={style.title}>{vehicles.label}</h2>
      <div className={style.list}>
        <VehiclesList
          limit={9}
          category={vehicles.name}
          onSelect={id => {
            const newPath = `${vehicles.route}/${id}`;
            history.push(newPath);
          }}
        />
      </div>
    </div>
  );
};

VehiclesPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(VehiclesPage);
