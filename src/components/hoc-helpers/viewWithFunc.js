import React, { Component } from "react";

const viewWithFunc = (View, func = ({ name }) => `${name}`) => {
  return class ViewWithFunction extends Component {
    render() {
      return <View {...this.props}>{func}</View>;
    }
  };
};

export default viewWithFunc;
