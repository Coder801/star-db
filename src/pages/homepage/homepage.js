import React from "react";
import { useHistory, withRouter } from "react-router-dom";

import Categories from "../../components/categories";
import Jumbotron from "../../components/jumbotron";

import style from "./style.module.scss";

const Left = () => {
  return (
    <div className={style.left}>
      <Jumbotron />
    </div>
  );
};

const Right = () => {
  return (
    <div className={style.right}>
      <Categories />
    </div>
  );
};

const Toggle = ({ isCategoriesOpen }) => {
  const history = useHistory();
  const state = isCategoriesOpen ? "open" : "close";
  const states = {
    close: {
      link: "/categories",
      text: "Show all categories",
      arrow: ""
    },
    open: {
      link: "/",
      text: "",
      arrow: style.arrowActive
    }
  };

  const { link, text, arrow } = states[state];

  return (
    <div className={style.toggle} onClick={() => history.push(link)}>
      <span className={style.text}>{text}</span>
      <span className={`${style.arrow} ${arrow}`}></span>
    </div>
  );
};

const HomePage = props => {
  let { openCategories, match } = props;
  const isCategories = match.path === "/categories";

  return (
    <div className={style.homepage}>
      <div className={style.container}>
        {isCategories ? <Right /> : <Left />}
        <Toggle isCategoriesOpen={openCategories} />
      </div>
    </div>
  );
};

export default withRouter(HomePage);
