import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import router from "router.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">{router}</div>
      </BrowserRouter>
    );
  }
}

export default App;
