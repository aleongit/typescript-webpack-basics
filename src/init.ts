import { htmlPageNames } from './constants';
const menu = htmlPageNames;

const getPath = () => {
  const path = window.location.pathname;
  const h1 = document.getElementById('titol');
  h1!.innerText = 'Hello! ' + path;
};

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

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function faScroll(boto: HTMLButtonElement) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    boto.style.display = 'block';
  } else {
    boto.style.display = 'none';
  }
}

const activaBotoBackToTop = (): void => {
  const boto = <HTMLButtonElement>document.getElementById('button-back-to-top');
  if (boto) {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      faScroll(boto);
    };
    // When the user clicks on the button, scroll to the top of the document
    boto.addEventListener('click', backToTop);
  }
};

export const montaPagina = (titols?: string[]) => {
  getPath();
  fesMenu();
  if (titols) {
    fesSubmenu(titols);
  }
  activaBotoBackToTop();
};
