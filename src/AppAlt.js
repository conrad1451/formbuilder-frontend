import React from "react";
import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import { Counter } from "./features/counter/CounterAlt";
import "./App.css";

function ExplainerText(){
  return(
    <>
    <p> Edit <code>src/App.js</code> and save to reload. </p>
    <span>
      <span>Learn </span>
      <a
      className="App-link"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
      >
        React
      </a>
      <span>, </span>
      <a
      className="App-link"
      href="https://redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
      >
        Redux
      </a>
      <span>, </span>
      <a
      className="App-link"
      href="https://redux-toolkit.js.org/"
      target="_blank"
      rel="noopener noreferrer"
      >
        Redux Toolkit
      </a>,<span> and </span>
      <a
      className="App-link"
      href="https://react-redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
      >
        React Redux
      </a>
    </span>
    </>
  );
}

function AppAlt() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <ExplainerText/>
      </header>
    </div>
  );
}

export default AppAlt;
