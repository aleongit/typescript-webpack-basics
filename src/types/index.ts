import "./styles.css";

const test = () => {
  let helloWorld = "Hello World";
  const message = "Hello World!";

  const obj = { width: 10, height: 15 };
  //const area = obj.width * obj.heigth;
  //console.log(4 / []);
  message.toLowerCase();
  //message();

  /*
  const user = {
    name: "Daniel",
    age: 26,
  };
  user.location; // returns undefined
  */
 
};

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Everyday Types";
  element.classList.add("test");

  return element;
}

document.body.appendChild(component());
