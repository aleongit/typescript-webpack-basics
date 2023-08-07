const menu = ["types"];

const fesMenu = () => {
  //agafa nav
  const nav = document.getElementById("menu");

  //crea links
  menu.forEach((el) => {
    const a = document.createElement("a");
    const text = document.createTextNode(el);
    a.setAttribute("href", `/${el}/`);
    a.appendChild(text);
    nav.appendChild(a);
  });
};

const getPath = () => {
  const path = window.location.pathname;
  const h1 = document.getElementById("titol");
  h1.innerText = "Hello! " + path;
};

export const montaPagina = () => {
  fesMenu();
  getPath();
};