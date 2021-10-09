import Main from "./components/Main";
import Video from "./components/Video";
import Pbutton from "./components/Pbutton";
import Cbutton from "./components/Cbutton";
import "./App.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div class="footer">
        <Pbutton />
        <Cbutton />
      </div>
    </div>
  );
}

export default App;
