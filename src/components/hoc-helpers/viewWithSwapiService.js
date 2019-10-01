import React from "react";
import { SwapiServiceConsumer } from "../context";

const viewWithSwapiService = mapMethodToProps => Wrapper => {
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
