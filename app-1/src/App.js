import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  handleChange(val) {
    this.setState({ name: val });
  }

  alertMe() {
    {
      alert(this.state.name);
    }
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <h1>{this.state.name}</h1>
        <button onClick={() => this.alertMe()}> Click me! </button>
      </div>
    );
  }
}

export default App;
