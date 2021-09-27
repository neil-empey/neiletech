import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Pbutton() {
  return (
    <Router>
      <NavLink class="projects-button" to="/projects">
        Projects
      </NavLink>
    </Router>
  );
}

export default Pbutton;
