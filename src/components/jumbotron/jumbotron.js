import React from "react";

import style from "./style.module.scss";

const Jumbotron = () => {
  return (
    <div className={style.jumbotron}>
      <h1 className={style.title}>
        About <span className={style.highlight}>the</span> dark <br />
        side
      </h1>
      <div className={style.content}>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti neque consequatur
          blanditiis sit expedita reprehenderit minus tempora voluptas quasi delectus. Et sed iste
          consequuntur rerum expedita iure ex dolore dicta?
        </p>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti neque consequatur
          blanditiis sit expedita reprehenderit minus tempora voluptas quasi delectus. Et sed iste
          consequuntur rerum expedita iure ex dolore dicta?
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
