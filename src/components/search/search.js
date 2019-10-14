import React, { Component } from "react";

import style from "./style.module.scss";

class Search extends Component {
  state = {
    open: false,
    value: ""
  };

  onChange = event => {
    this.setState({
      value: event.currentTarget.value
    });
  };

  onFocus = event => {
    this.setState({
      open: true
    });
  };

  onBlur = event => {
    this.setState({
      open: false
    });
  };

  render() {
    const { open, value } = this.state;

    const show = open || value ? style.show : "";

    return (
      <div className={style.search}>
        <div className={style.icon}>Search</div>
        <input
          type="text"
          className={`${style.input} ${show}`}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={value}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search;
