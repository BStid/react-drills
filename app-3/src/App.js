import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      list: ["Boy", "Girl", "Cat", "Dog", "Fish", "Pizza", "Punk"]
    };
  }
  handleChange(val) {
    this.setState({ input: val.toLowerCase() });
  }

  render() {
    console.log(this.state.input);
    // this.state.list = this.state.list.map((value, index) => {
    //   return value.toLowerCase();
    // });
    let filteredList = this.state.list
      .filter(value => {
        return value.toLowerCase().includes(this.state.input);
      })
      .map((value, index) => {
        return <h1 key={index}>{value}</h1>;
      });
    return (
      <div className="App">
        <input
          type="text"
          onChange={element => this.handleChange(element.target.value)}
        />
        {filteredList}
      </div>
    );
  }
}

export default App;
