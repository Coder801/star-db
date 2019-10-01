import React from "react";

import icon from "./img/death-star.svg";
import "./style.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator alert">
      <img className="error-indicator-image mb-2" src={icon} alt="error" />
      <h4 className="alert-heading">Warning!</h4>
      <p className="mb-0">Something went wrong</p>
      <p className="mb-0">
        We have already sent a drone to solve the problem.
        </p>
    </div>
  )
}

export default ErrorIndicator;