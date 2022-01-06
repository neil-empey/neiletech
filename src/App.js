import "./App.css";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { ContactUs } from "./components/Contact";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="ne-title">Neil Empey</h1>
          </div>
          <div className="column-33">
            <p></p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="column-66"></div>
          <div className="column-33"></div>
          <button className="button" onClick={<ContactUs />}>
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
