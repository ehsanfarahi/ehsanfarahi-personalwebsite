import React from "react";
import ReactDOM from "react-dom/client";

import App from "./Components/App.js";

import "bootstrap/dist/css/bootstrap.css";
// import "https://kit.fontawesome.com/ac6052ecd7.js";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
