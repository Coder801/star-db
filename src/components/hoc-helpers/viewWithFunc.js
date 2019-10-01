import React from "react";

const viewWithFunc = (fn = ({ name }) => `${name}`) => (
  (Wrapper) => {
    return (props) => {
      return <Wrapper {...props}>{fn}</Wrapper>
    }
  }
)


export default viewWithFunc;
