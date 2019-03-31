import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchAPI from "./components/SearchAPI";
import { validate } from "@babel/types";

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <h1>VSCode Hacks API</h1>
        <SearchAPI />
      </div>
    );
  }
}

export default App;
