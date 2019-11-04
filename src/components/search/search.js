import React, { Component } from "react";

import style from "./style.module.scss";

class Search extends Component {
  state = {
    open: true,
    value: "",
    searchResults: [],
    allResults: []
  };

  onChange = event => {
    const { getData } = this.props;
    const { value } = event.currentTarget;
    const updateSearchResults = data => {
      const result = data.sort(itemA => {
        const a = itemA.name.toLowerCase();
        const b = value.toLowerCase();

        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }); //.slice(0, 5);
      console.log(result);

      this.setState({
        searchResults: result
      });
    };

    this.setState({
      value
    });

    if (!this.state.value) {
      getData(value).then(allResults => {
        this.setState({
          allResults
        });
        updateSearchResults(allResults);
      });
    } else {
      updateSearchResults(this.state.allResults);
    }
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
    const { open, value, searchResults } = this.state;

    const show = open || value ? style.show : "";

    const renderResults = results =>
      results.map((result, key) => {
        return (
          <li className={style.item} key={key}>
            <figure className={style.thumbnail}>
              <div className={style.image}>
                <img src={result.image} />
              </div>
            </figure>
            <p className={style.text}>{result.name}</p>
          </li>
        );
      });

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
        <ul className={style.result}>{renderResults(searchResults)}</ul>
      </div>
    );
  }
}

export default Search;
