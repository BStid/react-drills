import React, { Component } from "react";
import Login from "./Login";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.alertMe = this.alertMe.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, element) {
    console.log({ [key]: element });
    this.setState({
      [key]: element
    });
  }
  alertMe() {
    alert(
      "Username: " + this.state.username + " Password: " + this.state.password
    );
  }
  render() {
    return (
      <div className="App">
        <Login handleChange={this.handleChange} alertMe={this.alertMe} />
      </div>
    );
  }
}

export default App;
