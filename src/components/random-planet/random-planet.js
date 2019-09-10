import React, { Component } from "react";

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img
                  className="card-img-top"
                  alt="Card image cap"
                  width="200"
                  height="200"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAABCAYAAACbv+HiAAAAFElEQVR42mP8z8BQzzAKRsEowAoArsEBgC97mt4AAAAASUVORK5CYII="
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
