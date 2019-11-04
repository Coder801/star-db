import React, { Component } from "react";
import { toLower } from "ramda";

import style from "./style.module.scss";

class Search extends Component {
  state = {
    open: true,
    value: "",
    searchResults: [],
    allResults: []
  };

  getSearchResults = async value => {
    const { getData } = this.props;

    return await getData(value).then(allResults => allResults);
  };

  createSortedArray = (data, value) => {
    const startPattern = new RegExp(`^${value}`, "i");
    const fullPattern = new RegExp(value, "i");
    const filterWithStart = data.filter(item => startPattern.test(item.name));
    const filterRest = data
      .filter(({ name }) => !startPattern.test(toLower(name)))
      .filter(({ name }) => fullPattern.test(toLower(name)));

    return filterWithStart.concat(filterRest);
  };

  onChange = async event => {
    const { value } = event.currentTarget;
    const { searchResults, allResults } = this.state;

    if (allResults.length && value) {
      const sorted = await this.createSortedArray(allResults, value);
      this.setState({
        value,
        searchResults: sorted.slice(0, 5)
      });
    } else if (!value) {
      this.setState({
        value,
        searchResults: [],
        allResults: []
      });
    } else {
      const results = await this.getSearchResults(value);
      const sorted = await this.createSortedArray(results, value);

      console.log(results);

      this.setState({
        value,
        allResults: results,
        searchResults: sorted.slice(0, 5)
      });
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
