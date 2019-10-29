import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.scss";
import { CATEGORIES } from "../../constants";
import { joinImagePathUrl } from "../../helpers";

import img1 from "./img/characters.jpg";
import img2 from "./img/films.jpg";
import img3 from "./img/species.jpg";
import img4 from "./img/starships.jpg";
import img5 from "./img/vehicles.jpg";
import img6 from "./img/planets.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const onLoadStart = event => {
  console.log(event);
};

const renderList = list =>
  Object.values(list).map(({ label, description, route }, key) => (
    <li className={style.item} key={key}>
      <Link className={style.link} to={route}>
        <figure className={style.figure}>
          <div className={style.image}>
            <img onLoadStart={onLoadStart} src={images[key]} alt={label} />
          </div>
          <figcaption className={style.caption}>
            <h3 className={style.title}>{label}</h3>
            <p className={style.description}>{description}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  ));

const Categories = () => {
  return <ul className={style.list}>{renderList(CATEGORIES)}</ul>;
};

export default Categories;
