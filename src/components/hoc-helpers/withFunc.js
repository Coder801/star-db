import React from "react";

const withFunc = (fn = ({ name }) => `${name}`) => Wrapper => {
  return props => {
    return <Wrapper {...props}>{fn}</Wrapper>;
  };
};

export default withFunc;
