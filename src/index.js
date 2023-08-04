import _ from "lodash"; // Lodash, now imported by this script
import "./style.css";
import Alpaca from "./alpaca.jpg";

const background = () => {
  const head = document.createElement("div");
  head.classList.add("background");
  return head;
};

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Alpaca;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(background());
document.body.appendChild(component());

