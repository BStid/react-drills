import React, { Component } from "react";
import "./App.css";
import InputBox from "./InputBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(val) {
    console.log({ input: val });
    this.setState({ input: val });
  }
  render() {
    return (
      <div>
        <InputBox input={this.state.input} change={this.handleChange} />
      </div>
    );
  }
}

export default App;
