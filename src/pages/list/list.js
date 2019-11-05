import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Breadcrump from "../../components/breadcrump";
import * as SwComponents from "../../components/sw-components";
import { CATEGORIES } from "../../constants";
import { getCategotyFromUrl } from "../../helpers";

import style from "./list.module.scss";

const Components = {
  people: SwComponents.PersonList,
  planets: SwComponents.PlanetsList,
  starships: SwComponents.StarshipsList,
  films: SwComponents.FilmsList,
  species: SwComponents.SpeciesList,
  vehicles: SwComponents.VehiclesList
};

const List = ({ history, limit, url }) => {
  const page = getCategotyFromUrl(url);
  const Component = Components[page];
  const { name, label, route } = CATEGORIES[page];

  const breadcrump = [
    {
      path: "/",
      label: "Home"
    },
    {
      label
    }
  ];

  return (
    <div className={style.page}>
      <nav className={style.breadcrump}>
        <Breadcrump paths={breadcrump} />
      </nav>
      <h2 className={style.title}>{label}</h2>
      <div className={style.list}>
        <Component
          category={name}
          limit={limit}
          onSelect={id => {
            const newPath = `${route}/${id}`;
            history.push(newPath);
          }}
        />
      </div>
    </div>
  );
};

List.propTypes = {
  history: PropTypes.object,
  limit: PropTypes.number,
  url: PropTypes.string
};

export default withRouter(List);
