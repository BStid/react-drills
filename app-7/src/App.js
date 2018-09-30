import React, { Component } from "react";
import "./App.css";
import NewTask from "./NewTask";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My To-do List</h1>
        <NewTask />
      </div>
    );
  }
}

export default App;
