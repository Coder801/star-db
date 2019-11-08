import React from "react";

import style from "./searchpage.module.scss";

const data = [
  {
    img: "https://starwars-visualguide.com/assets/img/species/6.jpg",
    name: "Species"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/films/5.jpg",
    name: "Film"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
    name: "Characrets"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/starships/15.jpg",
    name: "Starships"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
    name: "Vehicles"
  },
  {
    img: "https://starwars-visualguide.com/assets/img/planets/3.jpg",
    name: "Planets"
  }
];

const SearchResults = ({ data }) => {
  const results = data => {
    return data.map(({ name, img }, key) => {
      return (
        <li className={style.item} key={key}>
          <img className={style.image} src={img} alt="" />
          <span className={style.label}>{name}</span>
        </li>
      );
    });
  };

  return <ul className={style.list}>{results(data)}</ul>;
};

const SearchPage = ({ search }) => {
  console.log(search);

  return (
    <div className={style.page}>
      <SearchResults data={data} />
    </div>
  );
};

export default SearchPage;
