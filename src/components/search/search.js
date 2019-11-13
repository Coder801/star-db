import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { toLower, mergeRight } from "ramda";

import Spinner from "../../containers/spinner";
import Image from "../../components/image";
import { regexp } from "../../helpers";

import style from "./search.module.scss";

const Search = ({ getData, onChangeSearch }) => {
  const [state, setState] = useState({
    loading: false,
    open: false,
    allResults: [],
    results: [],
    value: ""
  });

  const history = useHistory();

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

  const onPressEnter = ({ key }) => {
    if (key === "Enter") {
      const { value } = state;
      setState(state => mergeRight(state, { results: [], value: "" }));
      history.push(`/search/${value}`);
    }
  };

  const onChange = async event => {
    const { value } = event.currentTarget;
    const { allResults } = state;

    console.log(onChangeSearch);

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
      <input
        className={style.input}
        onChange={onChange}
        onKeyDown={onPressEnter}
        value={value}
        placeholder="Search..."
      />
      <div className={style.spinner}>{loading && <Spinner size={1} width={2} />}</div>
    </div>
  );
};

Search.propTypes = {
  getData: PropTypes.func.isRequired
};

export default Search;
