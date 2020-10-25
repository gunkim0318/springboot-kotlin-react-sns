import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Accont from "../pages/Accont";
import { People } from "@material-ui/icons";
import Login from "../pages/Login";

const Routes: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/account" component={Accont} />
      <Route exact path="/people" component={People} />
      <Route exact path="/login" component={Login} />
    </div>
  );
};

export default Routes;
