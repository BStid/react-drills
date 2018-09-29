import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["Thing1", "Thing2"],
      input: ""
    };

    this.addNew = this.addNew.bind(this);
  }

  handleChange(val) {
    console.log({ input: val });
    this.setState({ input: val });
  }
  addNew() {
    console.log({ list: this.state.input });
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }
  render() {
    let displayList = this.state.list.map((value, index) => {
      return <Todo key={index} item={value} />;
    });
    return (
      <div className="App">
        <h1>My To-do list:</h1>
        <input
          className="inputBox"
          type="text"
          onChange={e => this.handleChange(e.target.value)}
          placeholder="Todo List"
        />
        <button onClick={this.addNew}> Add </button>
        {displayList}
      </div>
    );
  }
}

export default App;
