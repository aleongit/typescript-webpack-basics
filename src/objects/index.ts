import * as init from '../init';
import '../main.css';
//import "./styles.css"; //component styles

//https://www.typescriptlang.org/docs/handbook/2/narrowing.html

const quickReference = () => {
  /*
Quick Reference
*/

  let sortida = '<h2>Quick Reference</h2>';

  /*
  
  */

  sortida += `<code>
  test
  </code>
  `;

  return sortida;
};

init.montaPagina();
const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += quickReference();
}
