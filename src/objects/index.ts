import { montaPagina } from '../init';
import { getImgWithLink } from '../helpers';

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

montaPagina();

const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += quickReference();
  //add images
  imatges.forEach((img) => {
    sortida.appendChild(getImgWithLink(img));
  });
  sortida.innerHTML += propertyModifiers();
}
