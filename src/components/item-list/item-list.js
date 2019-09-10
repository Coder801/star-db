import React, { Component } from "react";

export default class ItemList extends Component {
  render() {
    return (
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active">
          Cras justo odio
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Dapibus ac facilisis in
        </a>
        <a href="#" className="list-group-item list-group-item-action disabled">
          Morbi leo risus
        </a>
      </div>
    );
  }
}
