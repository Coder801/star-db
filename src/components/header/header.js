import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { SwSearch } from "../sw-components";
import Navigation from "../navigation";
import Image from "../../components/image";

import logo from "./img/logo-header.png";

import style from "./header.module.scss";
import { CATEGORIES as categories } from "../../constants";

const Header = () => {
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
          <SwSearch />
        </div>
      </div>
      {/* For test start */}
      <div className={style.searchResults}>
        <ul className={style.list}>
          <li className={style.item}>
            <figure className={style.thumbnail}>
              <div className={style.image}>
                <Image src={"./"} alt="" />
              </div>
            </figure>
            test
          </li>
        </ul>
      </div>
      {/* For test End */}
    </Fragment>
  );
};

export default Header;
