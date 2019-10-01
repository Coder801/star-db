import React, { Component } from "react";

const viewWithFunc = (Wrapper, func = ({ name }) => `${name}`) => {
  return class extends Component {
    render() {
      return <Wrapper {...this.props}>{func}</Wrapper>;
    }
  };
};

export default viewWithFunc;
