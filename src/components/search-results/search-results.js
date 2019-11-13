import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { regexp } from "../../helpers";

import Image from "../image";

import style from "./search-results.module.scss";

const SearchResults = ({ data, value, match, onClick }) => {
  const wrapMatch = (string, match) => {
    const pattern = regexp(`(${match})`, "g");
    return { __html: string.replace(pattern, `<span>$1</span>`) };
  };

  const resultsList = results =>
    results.map(({ image, name, category, id }, key) => (
      <li className={style.item} key={key}>
        <figure className={style.thumbnail}>
          <div className={style.image}>
            <Image src={image} alt="" />
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

  const noResults = text => (
    <li className={style.item}>
      <p className={style.text}>{text}</p>
    </li>
  );

  if (!value) {
    return false;
  }

  const result = data.length ? resultsList(data) : noResults("No Results...");

  return <ul className={style.list}>{result}</ul>;
};

export default SearchResults;
