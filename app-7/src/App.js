import React, { Component } from "react";
import "./App.css";
import NewTask from "./NewTask";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Test", "Text", "Next"]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(input) {
    this.setState({ list: [...this.state.list, input] });
  }

  render() {
    return (
      <div className="App">
        <NewTask add={this.handleAdd} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
