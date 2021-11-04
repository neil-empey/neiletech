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
        <p>hello</p>
        <p>Neil</p>
        <p>empey</p>
        <p>jump</p>
        <p>neil</p>
        <p>another</p>
        <p>test1</p>
        <p>test2</p>
        <p>test3</p>
        <p>test4</p>
        <p>test5</p>
      </div>
    </div>
  );
}

export default App;
