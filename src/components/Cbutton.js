import React from "react";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

function Cbutton() {
  return (
    <Router>
      <NavLink class="contacts-button" to="/contact">
        Contact
      </NavLink>
    </Router>
  );
}

export default Cbutton;
