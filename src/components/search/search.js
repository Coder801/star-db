import React, { Component, useState, setState } from "react";
import { Link } from "react-router-dom";
import { toLower, mergeRight } from "ramda";
import Spinner from "../../containers/spinner";

import { regexp } from "../../helpers";

import style from "./search.module.scss";

const SearchResults = ({ data, match, onClick }) => {
  const wrapMatch = (string, match) => {
    const pattern = regexp(`(${match})`, "g");
    return { __html: string.replace(pattern, `<span>$1</span>`) };
  };

  const resultsList = results =>
    results.map(({ image, name, category, id }, key) => (
      <li className={style.item} key={key}>
        <figure className={style.thumbnail}>
          <div className={style.image}>
            <img src={image} />
          </div>
        </figure>
        <Link
          className={style.link}
          onClick={onClick}
          to={`/${category}/${id}`}
          dangerouslySetInnerHTML={wrapMatch(name, match)}
        ></Link>
      </li>
    ));

  const noResults = text => {
    return (
      <li className={style.item}>
        <p className={style.text}>{text}</p>
      </li>
    );
  };

  const result = data.length ? resultsList(data) : noResults("No Results...");

  return <ul className={style.list}>{result}</ul>;
};

const Search = ({ getData }) => {
  const [state, setState] = useState({
    loading: false,
    open: false,
    allResults: [],
    results: [],
    value: ""
  });

  const onSelect = () => {
    setState(state => mergeRight(state, { results: [], value: "" }));
  };

  const openSearch = () => {
    setState(state => mergeRight(state, { open: !state.open }));
  };

  const getDataByValue = async value => await getData(value).then(allResults => allResults);

  const sortArrayByValue = (array, value) => {
    const match = toLower(value);
    const startPattern = regexp(`^(${match}).*`);
    const fullPattern = regexp(match);
    const filterWithStart = array.filter(({ name }) => startPattern.test(toLower(name)));
    const filterRest = array
      .filter(({ name }) => !startPattern.test(toLower(name)))
      .filter(({ name }) => fullPattern.test(toLower(name)));

    return filterWithStart.concat(filterRest);
  };

  const onChange = async event => {
    const { value } = event.currentTarget;
    const { allResults } = state;

    setState(state => mergeRight(state, { value, loading: true }));

    if (allResults.length && value) {
      const results = await sortArrayByValue(allResults, value).slice(0, 5);
      setState(state => mergeRight(state, { results, loading: false }));
    } else if (!value) {
      setState(state => mergeRight(state, { allResults: [], results: [], loading: false }));
    } else {
      const allResults = await getDataByValue(value);
      const results = await sortArrayByValue(allResults, value).slice(0, 5);
      setState(state => mergeRight(state, { allResults, results, loading: false }));
    }
  };

  const { open, value, results, loading } = state;

  const inputOpen = open || value ? style.open : "";

  return (
    <div className={`${style.search} ${inputOpen}`}>
      <div className={style.icon} onClick={openSearch}></div>
      <input className={style.input} onChange={onChange} value={value} placeholder="Search..." />
      <div className={style.spinner}>{loading && <Spinner size={1} width={2} />}</div>
      <div className={style.result}>
        {value && !loading && <SearchResults data={results} onClick={onSelect} match={value} />}
      </div>
    </div>
  );
};

export default Search;
