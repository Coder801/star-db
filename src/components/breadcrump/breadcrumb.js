import React from "react";
import { Link } from "react-router-dom";

import style from "./breadcrumb.module.scss";

const BreadcrumpLink = ({ path, label, key }) => (
  <li className={style.item} key={key}>
    <Link className={style.link} to={path}>
      {label}
    </Link>
  </li>
);

const BreadcrumpText = ({ label, key }) => (
  <li className={style.item} key={key}>
    <span className={style.last}>{label}</span>
  </li>
);

const Breadcrump = ({ paths }) => {
  const links = paths.map(({ path, label }, key) => {
    return path ? <BreadcrumpLink path={path} label={label} key={key} /> : <BreadcrumpText label={label} key={key} />;
  });

  return <ul className={style.breadcrump}>{links}</ul>;
};

export default Breadcrump;
