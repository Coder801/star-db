import ItemList from "../item-list";
import {
  viewWithData,
  viewWithFunc,
  viewWithSwapiService
} from "../hoc-helpers";

const mapPersonMethodToProps = swapiService => ({
  getData: swapiService.getAllPeople
});

const PersonList = viewWithSwapiService(
  viewWithData(viewWithFunc(ItemList)),
  mapPersonMethodToProps
);
const PlanetList = viewWithData(viewWithFunc(ItemList));
const StarshipList = viewWithData(viewWithFunc(ItemList));

export { PersonList, PlanetList, StarshipList };
