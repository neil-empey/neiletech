import "./App.css";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { ContactUs } from "./components/Contact";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="column-66">
            <p className="triangle-down"></p>
            <h1 className="ne-title">Neil Empey</h1>
          </div>

          <div className="column-33">
            <h2 className="stack">Full Stack Software Engineer</h2>
            <div className="hide">
              <h3 className="skill1">React</h3>
              <h4 className="skill2">Redux</h4>
              <h3 className="skill1">Ruby on Rails</h3>
              <h4 className="skill2">Relational Databases</h4>
              <p className="skill1">
                <small>
                  CSS, HTML, JSON, REST API, GIT, PostgreSQL, MySQL, RSpec
                </small>
              </p>
            </div>
            <div className="triangle-up"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="column-66">
            <button className="button">
              <span>Selected Projects</span>
            </button>
          </div>
          <div className="triangle-up"></div>

          <div className="column-33">
            <div className="triangle-down"></div>
            <button className="button" onClick={<ContactUs />}>
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
