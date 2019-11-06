import React, { Component } from "react";

import ErrorIndicator from "../../containers/error-indicator";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.state({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;

    return !hasError ? this.props.children : <ErrorIndicator />;
  }
}
