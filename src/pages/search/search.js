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

const SearchResults = ({ data }) => {
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

  return <ul className={style.list}>{results(data)}</ul>;
};

const SearchField = ({ value }) => {
  const [state, setState] = useState({
    value
  });

  const onChange = event => {
    const { value } = event.currentTarget;
    setState({ value });
  };

  return (
    <div className={style.searchField}>
      <input value={state.value} onChange={onChange} />
    </div>
  );
};

const Search = ({ search }) => {
  return (
    <div className={style.page}>
      <SearchField value="test" />
      <SearchResults data={data} />
    </div>
  );
};

export default Search;
