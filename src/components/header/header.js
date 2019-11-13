import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { SwSearch } from "../sw-components";
import Navigation from "../navigation";
import SearchResults from "../search-results";

import logo from "./img/logo-header.png";

import style from "./header.module.scss";
import { CATEGORIES as categories } from "../../constants";

const Header = () => {
  const [state, setstate] = useState({
    searchData: [],
    value: ""
  });

  const onChangeSearch = event => {};

  return (
    <Fragment>
      <div className={`${style.header} ${style.navOpen}`}>
        <nav className={style.nav}>
          <Navigation categories={categories} />
        </nav>
        <div className={style.logo}>
          <Link className={style.link} to="/">
            <img className={style.image} src={logo} alt="" />
          </Link>
        </div>
        <div className={style.search}>
          <SwSearch onChangeSearch={onChangeSearch} />
        </div>
      </div>
      <SearchResults data={state.searchData} value={state.value} />
    </Fragment>
  );
};

export default Header;
