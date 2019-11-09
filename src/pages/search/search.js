import React, { useState } from "react";

import style from "./search.module.scss";

const data = [
  {
    img: "https://starwars-visualguide.com/assets/img/species/6.jpg",
    name: "Species",
    category: "Category"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/films/5.jpg",
    name: "Film",
    category: "Category"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
    name: "Characrets",
    category: "Category"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/starships/15.jpg",
    name: "Starships",
    category: "Category"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
    name: "Vehicles",
    category: "Category"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/planets/3.jpg",
    name: "Planets",
    category: "Category"
  }
];

// Some comment for test commit

const Results = ({ data }) => {
  const results = data => {
    return data.map(({ name, img, category }, key) => {
      return (
        <li className={style.item} key={key}>
          <img className={style.image} src={img} alt="" />
          <div className={style.description}>
            <h3 className={style.label}>{name}</h3>
            <p className={style.category}>{category}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div className={style.results}>
      <ul className={style.list}>{results(data)}</ul>
    </div>
  );
};

const NoResults = () => {
  return (
    <div className={style.noResults}>
      <h2>No Results</h2>
    </div>
  );
};

const SearchResults = ({ data }) => (data ? <Results data={data} /> : <NoResults />);

const Search = ({ search }) => {
  return (
    <div className={style.page}>
      <SearchResults data={data} />
    </div>
  );
};

export default Search;
