import React, { Component } from "react";
import { Link } from "react-router-dom";

import Categories from "../../categories";

import style from "./style.module.scss";

const Jumbotron = () => {
  return (
    <div className={style.jumbotron}>
      <h1 className={style.title}>
        About <span className={style.highlight}>the</span> dark <br />
        side
      </h1>
      <div className={style.content}>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti neque consequatur
          blanditiis sit expedita reprehenderit minus tempora voluptas quasi delectus. Et sed iste
          consequuntur rerum expedita iure ex dolore dicta?
        </p>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti neque consequatur
          blanditiis sit expedita reprehenderit minus tempora voluptas quasi delectus. Et sed iste
          consequuntur rerum expedita iure ex dolore dicta?
        </p>
      </div>
    </div>
  );
};

const ViewCategories = ({ onClick }) => {
  return (
    <div className={style.categories}>
      <h2 className={style.subtitle}>
        <a className={style.link} onClick={onClick} href={"/"}>
          See all categories
        </a>
      </h2>
      <Categories />
    </div>
  );
};

export default class HomePage extends Component {
  state = {
    openCategories: false
  };

  onClick = event => {
    event.preventDefault();
    this.setState({
      openCategories: !this.state.openCategories
    });
  };

  render() {
    const show = this.state.openCategories ? style.showCategories : "";

    return (
      <div className={style.homepage}>
        <div className={`${style.container} ${show}`}>
          <Jumbotron />
          <ViewCategories onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
