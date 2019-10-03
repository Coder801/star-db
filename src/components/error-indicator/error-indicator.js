import React from "react";

import icon from "./img/death-star.svg";
import style from "./style.module.css";

const ErrorIndicator = () => {
  return (
    <div className={style.alert}>
      <img className={style.icon} src={icon} alt="error" />
      <h4 className={style.headline}>Warning!</h4>
      <p className={style.text}>Something went wrong</p>
      <p className={style.text}>
        We have already sent a drone to solve the problem.
      </p>
    </div>
  );
};

export default ErrorIndicator;
