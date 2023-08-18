import * as init from '../init';
import '../main.css';
//import "./styles.css"; //component styles

import png1 from '../img/TypeScript Types.png';
import png2 from '../img/TypeScript Interfaces.png';
const imatges = [png1, png2];

//https://www.typescriptlang.org/docs/handbook/2/narrowing.html

const quickReference = () => {
  /*
Quick Reference
*/

  let sortida = '<h2>Quick Reference</h2>';

  /*
  We have cheat-sheets available for both type and interface, 
  if you want a quick look at the important every-day syntax at a glance.
  */

  return sortida;
};

const propertyModifiers = () => {
  /*
  Property Modifiers
  */
  let sortida = '<h2>Property Modifiers</h2>';

  /*
   */

  sortida += `<code>
test
  </code>`;

  return sortida;
};

init.montaPagina();

const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += quickReference();
  //add images
  imatges.forEach((img) => {
    const imatge = new Image();
    const a = document.createElement('a');
    imatge.src = img;
    a.appendChild(imatge);
    a.setAttribute('href', imatge.src);
    sortida.appendChild(a);
  });
  sortida.innerHTML += propertyModifiers();
}
