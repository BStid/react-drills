import React, { Component } from "react";
import "./App.css";
import DisplayList from "./DisplayList";

class InputBox extends Component {
  constructor() {
    super();
    this.state = {
      list: ["Boy", "Girl", "Cat", "Dog", "Fish", "Pizza", "Punk"],
      input: ""
    };
  }

  handleChange(val) {
    console.log({ input: val });
    this.setState({ input: val.toLowerCase() });
  }
  render() {
    return (
      <div>
        <input
          className="inputBox"
          onChange={e => this.handleChange(e.target.value)}
          type="text"
        />
        <DisplayList list={this.state.list} input={this.state.input} />
      </div>
    );
  }
}

export default InputBox;
