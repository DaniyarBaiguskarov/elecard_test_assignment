import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./App.scss";

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(<App />);
