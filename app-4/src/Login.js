import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <input
          type="password"
          key="UserName"
          placeholder="Username"
          onChange={e => this.props.handleChange("username", e.target.value)}
        />
        <input
          type="password"
          key="PassWord"
          placeholder="Password"
          onChange={e => this.props.handleChange("username", e.target.value)}
        />
        <button onClick={this.props.alertMe}> Login </button>
      </div>
    );
  }
}

export default Login;
