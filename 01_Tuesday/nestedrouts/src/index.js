import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const info = [
  {
    id: "rendering",
    title: "Rendering with React",
    info: "We are rendering",
  },
  { id: "components", title: "components", info: "We love components" },
  { id: "props-v-state", title: "Props v. State", info: "Props are useful" },
];

ReactDOM.render(
  <React.StrictMode>
    <App info={info} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
