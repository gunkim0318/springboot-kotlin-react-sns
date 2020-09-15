import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

const Routes: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/profile" component={Profile} />
    </div>
  );
};

export default Routes;
