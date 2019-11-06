import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import style from "./navigation.module.scss";

const NavItem = ({ route, label }) => (
  <li className={style.item}>
    <NavLink activeClassName={style.active} className={style.link} to={route}>
      {label}
    </NavLink>
  </li>
);

export default class Navigation extends Component {
  state = {
    open: true
  };

  toggleMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { categories } = this.props;
    const activeNavigation = this.state.open ? style.open : "";
    const activeButton = this.state.open ? style.active : "";
    const activeNav = this.state.open ? style.show : "";

    return (
      <div className={`${style.navigation}`}>
        <div className={`${style.icon} ${activeButton}`} onClick={this.toggleMenu}>
          <div className={style.line}></div>
        </div>
        <ul className={`${style.list} ${activeNav}`}>
          {Object.values(categories).map(({ route, label }, key) => (
            <NavItem route={route} label={label} key={key} activeClassName={activeNavigation} />
          ))}
        </ul>
      </div>
    );
  }
}
