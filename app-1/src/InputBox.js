import React, { Component } from "react";
import "./App.css";

class InputBox extends Component {
  render() {
    return (
      <div>
        <input
          className="inputBox"
          onChange={e => this.props.change(e.target.value)}
        />
        <h1 className="input">{this.props.input}</h1>
      </div>
    );
  }
}

export default InputBox;
