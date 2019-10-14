import React from "react";
import { Link } from "react-router-dom";

import { joinImagePathUrl } from "../../helpers";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";

import style from "./style.module.scss";

const HomePage = () => {
  const renderList = list =>
    Object.values(list).map(({ label, route, categoryImageUrl }, key) => (
      <figure className={style.item} key={key}>
        <img
          className={style.image}
          src={joinImagePathUrl.jpg(API_IMAGE_BASE, "categories", categoryImageUrl)}
          alt={label}
        />
        <figcaption className={style.caption}>
          <Link className={style.link} to={route}>
            {label}
          </Link>
        </figcaption>
      </figure>
    ));

  return <div className={style.homepage}>{renderList(CATEGORIES)}</div>;
};

export default HomePage;
