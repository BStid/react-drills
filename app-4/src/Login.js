import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.alertMe = this.alertMe.bind(this);
  }
  handleChange(key, val) {
    console.log({ [key]: val });
    this.setState({ [key]: val });
  }
  alertMe() {
    console.log(this.state.username);
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }
  render() {
    return (
      <div>
        <input
          type="password"
          placeholder="Username"
          onChange={e => this.handleChange("username", e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => this.handleChange("password", e.target.value)}
        />
        <button onClick={this.alertMe}> Login </button>
      </div>
    );
  }
}

export default Login;
