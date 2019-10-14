import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = Wrapper => {
  return class extends Component {
    state = {
      data: null,
      error: false
    };

    componentDidMount() {
      this.props
        .getData() // eslint-disable-line react/prop-types
        .then(data => {
          this.setState({
            data
          });
        })
        .catch(() => {
          this.setState({
            error: true
          });
        });
    }

    render() {
      const { data, error } = this.state;

      if (error) {
        return <ErrorIndicator />;
      }

      if (!data) {
        return <Spinner />;
      }

      return <Wrapper {...this.props} data={data} />;
    }
  };
};

export default withData;
