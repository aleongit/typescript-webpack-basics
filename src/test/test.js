import _ from 'lodash';   // Lodash, now imported by this script
import './test.css';
//import Icon from './icon.png';


function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello Test!"
  element.classList.add('test');


  return element;
}

document.body.appendChild(component());