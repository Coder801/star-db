import { compose } from "ramda";

import ItemList from "../item-list";
import {
  viewWithData,
  viewWithFunc,
  viewWithSwapiService
} from "../hoc-helpers";

const mapPersonMethodToProps = swapiService => ({
  getData: swapiService.getAllPeople
});

const PersonList = compose(
  viewWithSwapiService(mapPersonMethodToProps),
  viewWithData,
  viewWithFunc()
)(ItemList);

export { PersonList };
