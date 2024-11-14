/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // ---- excuses ---
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let indicewho = Math.floor(Math.random() * who.length);
  let indiceaction = Math.floor(Math.random() * action.length);
  let indicewhat = Math.floor(Math.random() * what.length);
  let indicewhen = Math.floor(Math.random() * what.length);

  document.querySelector("#excuse").innerHTML =
    who[indicewho] +
    " " +
    action[indiceaction] +
    " " +
    what[indicewhat] +
    " " +
    when[indicewhen];
};
