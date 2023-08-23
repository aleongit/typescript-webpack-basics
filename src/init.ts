import { htmlPageNames } from './constants';
const menu = htmlPageNames;

const fesMenu = () => {
  //agafa nav
  const nav = document.getElementById('menu');

  //crea links
  menu.forEach((el) => {
    const a = document.createElement('a');
    const text = document.createTextNode(el);
    a.setAttribute('href', `/${el}/`);
    a.setAttribute('class', 'button sense-deco');
    a.appendChild(text);
    nav!.appendChild(a);
  });
};

const getPath = () => {
  const path = window.location.pathname;
  const h1 = document.getElementById('titol');
  h1!.innerText = 'Hello! ' + path;
};

const fesSubmenu = (titols: string[]): void => {
  const submenu = document.getElementById('submenu');
  titols.forEach((titol) => {
    const a = document.createElement('a');
    const text = document.createTextNode(titol);
    a.setAttribute('href', `#${titol}`);
    a.setAttribute('class', 'button is-submenu sense-deco');
    a.appendChild(text);
    submenu?.appendChild(a);
  });
};

export const montaPagina = (titols?: string[]) => {
  getPath();
  fesMenu();
  if (titols) {
    fesSubmenu(titols);
  }
};
