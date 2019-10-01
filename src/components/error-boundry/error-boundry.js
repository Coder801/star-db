import React, { Component } from "react";
import PropTypes from "prop-types";

import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {
  static propTypes = {
    children: PropTypes.element
  };

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
