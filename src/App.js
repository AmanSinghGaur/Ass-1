import React, { Component } from "react";
import "./style.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>Counter Demo</h1>

        <h1>counter: {count}</h1>

        <button title="Increment" onClick={this.increment}>
          Increment Counter
        </button>
        <button title="Decrement" onClick={this.decrement}>
          Decrement Counter
        </button>
      </div>
    );
  }
}
