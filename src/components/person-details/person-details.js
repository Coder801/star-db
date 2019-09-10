import React, { Component } from "react";

import "./style.css";

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="details">
        <div className="details-image">
          <img
            className="card-img-top"
            src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
            alt=""
          />
        </div>
        <div className="details-info bg-dark">
          <h5>Card title</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </p>
          <ul className="details-list">
            <li>Cras justo odio</li>
            <li>Dapibus ac facilisis in</li>
            <li>Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    );
  }
}
