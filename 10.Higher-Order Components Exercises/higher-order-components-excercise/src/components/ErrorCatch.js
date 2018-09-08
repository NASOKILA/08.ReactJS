import React, { Component } from 'react';

export default class CatchError extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>{"Oh-no! Something went wrong"}</h2>
          <p className="red">
            {this.state.error && this.state.error.toString()}
          </p>
          <div>{"Component Stack Error Details: "}</div>
          <p className="red">{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

