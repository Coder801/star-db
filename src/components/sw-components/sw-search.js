import Search from "../search";
import { withSwapiService } from "../hoc-helpers";

const searchMethodToProps = swapiService => ({
  getData: swapiService.getFromSearch
});

const SwSearch = withSwapiService(searchMethodToProps)(Search);

export { SwSearch };
