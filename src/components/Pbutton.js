import React from "react";

function Pbutton() {
  function sayHello() {
    alert("Hello!");
  }

  return (
    <button class="projects-button" onClick={sayHello}>
      Projects
    </button>
  );
}

export default Pbutton;
