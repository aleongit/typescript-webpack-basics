import { montaPagina } from '../init';
import { getImgWithLink } from '../helpers';

import '../main.css';
//import "./styles.css"; //component styles

//https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

const generics = () => {
  /*
Generics
*/

  let sortida = '<h2>Generics</h2>';

  /*
   */

  sortida += `<code>
  test
  </code>`;

  return sortida;
};

montaPagina();

const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += generics();
}
