import React, { Component } from "react";
import Image from "./Image";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image={"http://webresizer.com/images2/bird1_before.jpg"} />
      </div>
    );
  }
}

export default App;
