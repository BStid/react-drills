import React, { Component } from "react";
import "./App.css";
import DisplayList from "./DisplayList";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios.get("http://www.amiiboapi.com/api/amiibo/").then(response => {
      console.log(response.data.amiibo);
      this.setState({ list: response.data.amiibo });
    });
  }
  render() {
    return (
      <div className="App">
        <DisplayList list={this.state.list} />
      </div>
    );
  }
}

export default App;
