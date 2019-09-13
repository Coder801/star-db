import React, { Component } from "react";

import Header from "../header";
import Logo from "../logo";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class App extends Component {
  state = {
    selectPersonId: null
  };

  onPersonSelected = id => {
    this.setState({
      selectPersonId: id
    });
  };

  onPeopleLoaded = id => {
    this.setState({
      selectPersonId: id
    });
  };

  render() {
    return (
      <div className="container">
        <Header />

        <div className="row">
          <div className="col-sm-7">
            <h5 className="mb-3">Details</h5>
            <PersonDetails personId={this.state.selectPersonId} />
          </div>
          <div className="col-sm-4">
            <h5 className="mb-3">Characters</h5>
            <ItemList
              onPersonSelected={this.onPersonSelected}
              onPeopleLoaded={this.onPeopleLoaded}
            />
          </div>
          <div className="col-sm-3">
            <h5>Random planet</h5>
            <RandomPlanet />
          </div>
        </div>
      </div>
    );
  }
}
