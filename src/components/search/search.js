import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toLower } from "ramda";
import Spinner from "../spinner";

import style from "./style.module.scss";

class Search extends Component {
  state = {
    open: true,
    loading: false,
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
    const { allResults } = this.state;

    this.setState({
      value,
      loading: true
    });

    if (allResults.length && value) {
      const sorted = await this.createSortedArray(allResults, value);
      this.setState({
        searchResults: sorted.slice(0, 5),
        loading: false
      });
    } else if (!value) {
      this.setState({
        searchResults: [],
        allResults: [],
        loading: false
      });
    } else {
      const results = await this.getSearchResults(value);
      const sorted = await this.createSortedArray(results, value);

      this.setState({
        allResults: results,
        searchResults: sorted.slice(0, 5),
        loading: false
      });
    }
  };

  onSelectResult = event => {
    this.setState({
      allResults: [],
      searchResults: [],
      value: ""
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
    const { open, value, searchResults, loading } = this.state;

    const inputShow = open || value ? style.show : "";
    const spinnerShow = loading ? style.loading : "";

    return (
      <div className={`${style.search}`}>
        <div className={style.icon}>Search</div>
        <input
          type="text"
          className={`${style.input} ${inputShow}`}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={value}
          placeholder="Search..."
        />
        <div className={`${style.spinner} ${spinnerShow}`}>
          <Spinner size={1} width={2} />
        </div>
        <div className={style.result}>
          <Results data={searchResults} onClick={this.onSelectResult} />
        </div>
      </div>
    );
  }
}

const Results = ({ data, onClick }) => {
  const renderResults = results =>
    results.map(({ image, name, category, id }, key) => (
      <li className={style.item} key={key}>
        <figure className={style.thumbnail}>
          <div className={style.image}>
            <img src={image} />
          </div>
        </figure>
        <Link className={style.link} onClick={onClick} to={`/${category}/${id}`}>
          {name}
        </Link>
      </li>
    ));

  return <ul className={style.list}>{renderResults(data)}</ul>;
};

export default Search;
