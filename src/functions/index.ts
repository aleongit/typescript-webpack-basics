import * as init from '../init';
import '../main.css';
//import "./styles.css"; //component styles

//https://www.typescriptlang.org/docs/handbook/2/narrowing.html

const functionTypeExpressions = () => {
  /*
Function Type Expressions
*/

  let sortida = '<h2>Function Type Expressions</h2>';

  /*
...
*/

  sortida += `<code>
  test code
</code>
`;
  return sortida;
};

init.montaPagina();
const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += functionTypeExpressions();
}
