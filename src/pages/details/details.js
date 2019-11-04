import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Breadcrump from "../../components/breadcrump";
import * as SwComponents from "../../components/sw-components";
import { CATEGORIES } from "../../constants";
import { getCategotyFromUrl } from "../../helpers";

import style from "./style.module.scss";

const Components = {
  people: SwComponents.PersonDetails,
  planets: SwComponents.PlanetDetails,
  starships: SwComponents.StarshipDetails,
  films: SwComponents.FilmDetails,
  species: SwComponents.SpecieDetails,
  vehicles: SwComponents.VehicleDetails
};

const Details = ({ itemId, url }) => {
  const page = getCategotyFromUrl(url);
  const Component = Components[page];
  const { name, label, route } = CATEGORIES[page];
  const [breadcrump, updateBreadcrump] = useState([
    {
      path: "/",
      label: "Home"
    },
    {
      path: route,
      label
    }
  ]);

  const onLoadData = page => {
    const item = {
      label: page
    };
    updateBreadcrump([...breadcrump, item]);
  };

  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump paths={breadcrump} />
      </nav>
      <div className={style.list}>
        <Component category={name} itemId={itemId} onLoadData={onLoadData} />
      </div>
    </div>
  );
};

Details.propTypes = {
  itemId: PropTypes.number,
  url: PropTypes.string
};

export default withRouter(Details);
