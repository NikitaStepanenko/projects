import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: "5", belt: "black", id: 1 },
      { name: "Yoshi", age: "25", belt: "black", id: 2 },
      { name: "Crstal", age: "15", belt: "black", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;