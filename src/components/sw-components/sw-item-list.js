import { compose } from "ramda";
import React from "react";

import ItemList from "../item-list";
import {
  viewWithData,
  viewWithFunc,
  viewWithSwapiService
} from "../hoc-helpers";

const mapPersonMethodToProps = swapiService => ({
  getData: swapiService.getAllPeople
});

const ListItemFormat = ({ name, image }) => (
  <React.Fragment>
    <img src={image} className="card-img-top" alt={name}></img>
    <div className="card-body">
      <p className="card-title">{name}</p>
    </div>
  </React.Fragment>
);

const PersonList = compose(
  viewWithSwapiService(mapPersonMethodToProps),
  viewWithData,
  viewWithFunc(ListItemFormat)
)(ItemList);

export { PersonList };
