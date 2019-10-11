import React from "react";
import { Link } from "react-router-dom";
import Search from "../search";

import logo from "./img/logo-header.png";

import style from "./style.module.scss";

const Header = () => {
  const pages = [
    {
      page: "people",
      label: "People"
    },
    {
      page: "films",
      label: "Films"
    },
    {
      page: "starships",
      label: "Starships"
    },
    {
      page: "vehicles",
      label: "Vehicles"
    },
    {
      page: "species",
      label: "Species"
    },
    {
      page: "planets",
      label: "Planets"
    }
  ];

  const navLinks = ({ page, label }) => (
    <li>
      <Link className={style.link} to={`/${page}`}>
        {label}
      </Link>
    </li>
  );

  return (
    <div className={style.header}>
      <Link className={style.logo} to="/people">
        <img className={style.image} src={logo} alt="Header logo" />
      </Link>
      <nav className={style.nav}>{pages.map(navLinks)}</nav>
      <div className={style.search}>
        <Search />
      </div>
    </div>
  );
};

export default Header;
