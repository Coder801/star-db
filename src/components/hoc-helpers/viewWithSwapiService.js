import React from "react";
import { SwapiServiceConsumer } from "../context";

const viewWithSwapiService = (Wrapper, mapMethodToProps) => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodToProps(swapiService);
          return <Wrapper {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default viewWithSwapiService;
