import React, { Component } from "react";

import Spinner from "../../containers/spinner";
import ErrorIndicator from "../../containers/error-indicator";

const withData = Wrapper => {
  return class extends Component {
    state = {
      data: null,
      error: false
    };

    componentDidMount() {
      const { getData, limit = 10 } = this.props;

      getData(limit)
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
