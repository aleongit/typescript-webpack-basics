import "./styles.css";

const test = () => {
  let helloWorld = "Hello World";

  const obj = { width: 10, height: 15 };
  //const area = obj.width * obj.heigth;
  
  //console.log(4 / []);
};

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello For Javascript programmers!";
  element.classList.add("test");

  return element;
}

document.body.appendChild(component());
