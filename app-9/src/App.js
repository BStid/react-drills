import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import router from "./router.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign-Up</Link>
            <Link to="/details">Details</Link>
          </nav>
          {router}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
