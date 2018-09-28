import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["One", "Two", "Three", "Four", "Five"]
    };
  }
  render() {
    let listOnum = this.state.list.map((value, index) => {
      return (
        <h1 key={index}>
          {index}: {value}
        </h1>
      );
    });
    return <div>{listOnum}</div>;
  }
}

export default App;
