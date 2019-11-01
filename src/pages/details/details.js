import React from "react";
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

  const breadcrump = [
    {
      path: "/",
      label: "Home"
    },
    {
      path: route,
      label
    },
    {
      label: "Test"
    }
  ];

  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump paths={breadcrump} />
      </nav>
      <h2 className={style.title}>{name}</h2>
      <div className={style.list}>
        <Component itemId={itemId} />
      </div>
    </div>
  );
};

Details.propTypes = {
  itemId: PropTypes.number,
  url: PropTypes.string
};

export default withRouter(Details);
