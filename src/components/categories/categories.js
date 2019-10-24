import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.scss";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";
import { joinImagePathUrl } from "../../helpers";

const renderList = list =>
  Object.values(list).map(({ label, route, categoryImageUrl }, key) => (
    <li className={style.item} key={key}>
      <Link className={style.link} to={route}>
        <figure className={style.figure}>
          <img
            className={style.image}
            src={joinImagePathUrl.jpg(API_IMAGE_BASE, "categories", categoryImageUrl)}
            alt={label}
          />
          <figcaption className={style.caption}>{label}</figcaption>
        </figure>
      </Link>
    </li>
  ));

const Categories = () => {
  return <ul className={style.list}>{renderList(CATEGORIES)}</ul>;
};

export default Categories;
