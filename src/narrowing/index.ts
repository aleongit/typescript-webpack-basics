import * as init from '../init';
import '../main.css';
//import "./styles.css"; //component styles

//https://www.typescriptlang.org/docs/handbook/2/narrowing.html

const typeofTypeGuards = () => {
  /*
typeof type guards
*/
  let sortida = '<h2>typeof  type guards</h2>';
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
sortida.innerHTML += typeofTypeGuards();
