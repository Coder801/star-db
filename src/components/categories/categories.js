import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.scss";
import { API_IMAGE_BASE, CATEGORIES } from "../../constants";
import { joinImagePathUrl } from "../../helpers";

import img1 from "./img/characters.jpg";
import img2 from "./img/films.jpg";
import img3 from "./img/species.jpg";
import img4 from "./img/starships.jpg";
import img5 from "./img/vehicles.jpg";
import img6 from "./img/planets.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const renderList = list =>
  Object.values(list).map(({ label, route, categoryImageUrl }, key) => (
    <li className={style.item} key={key}>
      <Link className={style.link} to={route}>
        <figure className={style.figure}>
          <img className={style.image} src={images[key]} alt={label} />
          <figcaption className={style.caption}>{label}</figcaption>
        </figure>
      </Link>
    </li>
  ));

const Categories = () => {
  return <ul className={style.list}>{renderList(CATEGORIES)}</ul>;
};

export default Categories;
