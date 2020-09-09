import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
    </div>
  );
};

export default Routes;
