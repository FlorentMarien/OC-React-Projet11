import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Router from "./router";
import Header from "./components/header";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="page">
      <Header />

      <Router />

      <Footer />
    </div>
  </React.StrictMode>
);

export default App;
