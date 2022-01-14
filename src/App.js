import "./App.css";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { ContactUs } from "./components/Contact";
import axios from "axios";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const form = useRef();

  function contactUs(e) {
    setShowForm(false);
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        result => {
          alert("your message was sent");
        },
        error => {
          alert("It appears an error occurred, please try again");
        }
      );
  }

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
                  CSS, HTML, JSON, REST API, GIT, PostgreSQL, Javascript, Node,
                  RSpec
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
            {showProjects === true ? (
              <button
                className="trip"
                type="button"
                onClick={() => {
                  setShowProjects(false);
                  window.open(
                    "https://neils-tripcast.herokuapp.com/",
                    "_blank"
                  );
                }}
              >
                TripCast
              </button>
            ) : (
              <form>
                <button
                  className="button"
                  onClick={() => {
                    setShowProjects(true);
                  }}
                >
                  <span>Selected Projects</span>
                </button>
              </form>
            )}
          </div>
          <div className="triangle-up"></div>

          <div className="column-33">
            <div className="triangle-down"></div>
            {showForm === true ? (
              <div className="container">
                <form ref={form} onSubmit={contactUs}>
                  <div className="row">
                    <div className="col-25"></div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Name"
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25"></div>
                    <div className="col-75">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25"></div>
                    <div className="col-75">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your message.."
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <input type="submit" value="SEND"></input>
                  </div>
                </form>
              </div>
            ) : (
              <form>
                <button
                  className="button"
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  <span>Contact Me</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
