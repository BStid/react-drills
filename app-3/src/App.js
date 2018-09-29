import React, { Component } from "react";
import "./App.css";
import InputBox from "./InputBox";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <InputBox />
      </div>
    );
  }
}

export default App;
