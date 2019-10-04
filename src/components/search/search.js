import React from "react";

import style from "./style.module.scss";

const Search = () => {
  return (
    <div className={style.search}>
      <input type="text" className={style.input} placeholder="Search..." />
    </div>
  );
};

export default Search;
