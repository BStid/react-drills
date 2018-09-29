import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.addNew = this.addNew.bind(this);
  }
  handleInput(val) {
    console.log({ input: val });
    this.setState({ input: val });
  }

  addNew() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div className="App">
        <h1>My To-do List</h1>
        <input
          placeholder="Input items here"
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={this.addNew}> Click Me</button>
      </div>
    );
  }
}

export default NewTask;
