import React from "react";
import PropTypes from "prop-types";

import style from "./style.module.scss";

const Breadcrump = () => {
  return (
    <ul className={style.breadcrump}>
      <li className={style.breadcrumpItem}>Home</li>
      <li className={style.breadcrumpItem}>Page</li>
    </ul>
  );
};

export default Breadcrump;
