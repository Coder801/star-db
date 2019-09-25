import React from "react";
import { SwapiServiceConsumer } from "../context";

const viewWithSwapiService = (View, mapMethodToProps) => {
  return function ViewWithSwapiService(props) {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodToProps(swapiService);
          return <View {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default viewWithSwapiService;
