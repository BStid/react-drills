import React, { Component } from "react";
import Todo from "./Todo";
import List from "./List";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNew = this.addNew.bind(this);
  }

  handleChange(val) {
    console.log({ input: val });
    this.setState({ input: val });
  }
  addNew() {
    this.setState({ list: [...this.state.list, this.state.input] });
    this.setState({ input: "" });
  }

  render() {
    return (
      <div className="App">
        <Todo
          input={this.state.input}
          handle={this.handleChange}
          add={this.addNew}
        />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default NewTask;
