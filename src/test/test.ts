import './test.css';

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello Test!"
  element.classList.add('test');


  return element;
}

document.body.appendChild(component());