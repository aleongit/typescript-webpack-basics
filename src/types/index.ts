import * as init from "../init";
import "../main.css"; 
//import "./styles.css"; //component styles

let sortida: string = "";

const primitives = () => {
  /*
The primitives: string, number, and boolean
*/
  sortida = "<h2>The primitives: string, number, and boolean</h2>";
  /*
JavaScript has three very commonly used primitives: string, number, and boolean.
Each has a corresponding type in TypeScript. 
As you might expect, these are the same names you’d see if you used the JavaScript typeof operator 
on a value of those types:

. string represents string values like "Hello, world"

. number is for numbers like 42.
  JavaScript does not have a special runtime value for integers, 
  so there’s no equivalent to int or float - everything is simply number

. boolean is for the two values true and false

  The type names String, Number, and Boolean (starting with capital letters) are legal, 
ut refer to some special built-in types that will very rarely appear in your code.
Always use string, number, or boolean for types.
*/

  const paraula: string = "paraula";
  const number: number = 42;
  const bolea: boolean = true;

  sortida += `<code>
la variable <b>paraula</b> de tipus <b>${typeof paraula}</b> amb valor <b>${paraula}</b><br>
la variable <b>number</b> de tipus <b>${typeof number}</b> amb valor <b>${number}</b><br>
la variable <b>bolea</b> de tipus <b>${typeof bolea}</b> amb valor <b>${bolea}</b><br>
</code>
`;
  return sortida;
};

const arrays = () => {
  /*
Arrays
*/
  sortida = "<h2>Arrays</h2>";

  /*
To specify the type of an array like [1, 2, 3], you can use the syntax number[];
this syntax works for any type (e.g. string[] is an array of strings, and so on). 
You may also see this written as Array<number>, which means the same thing. 
We’ll learn more about the syntax T<U> when we cover generics.

Note that [number] is a different thing; refer to the section on Tuples.
*/

  const nombres: number[] = [1, 2, 3, 4, 5];
  const lletres: Array<string> = ["a", "b", "c", "d", "e"];

  sortida += `<code>
<la variable <b>nombres</b> de tipus <b>${typeof nombres}</b> amb valor <b>${nombres}</b><br>
la variable <b>lletres</b> de tipus <b>${typeof lletres}</b> amb valor <b>${lletres}</b><br>
</code>
`;
  return sortida;
};

init.montaPagina();
document.getElementById("sortida").innerHTML = primitives() + arrays();
