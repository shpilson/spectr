import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { App } from "./components/App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
