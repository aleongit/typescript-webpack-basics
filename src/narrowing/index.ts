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
As we’ve seen, JavaScript supports a typeof operator which can give very basic information 
about the type of values we have at runtime.
TypeScript expects this to return a certain set of strings:

"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"

Like we saw with padLeft, this operator comes up pretty often in a number of JavaScript libraries, 
and TypeScript can understand it to narrow types in different branches.

In TypeScript, checking against the value returned by typeof is a type guard. 
Because TypeScript encodes how typeof operates on different values, 
it knows about some of its quirks in JavaScript. 

For example, notice that in the list above, typeof doesn’t return the string null. 

Check out the following example:

function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
'strs' is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

In the printAll function, we try to check if strs is an object to see if it’s an array type 
(now might be a good time to reinforce that arrays are object types in JavaScript). 

But it turns out that in JavaScript, typeof null is actually "object"! 
This is one of those unfortunate accidents of history.

Users with enough experience might not be surprised, but not everyone has run into this in JavaScript; 
luckily, TypeScript lets us know that strs was only narrowed down to string[] | null 
instead of just string[].

This might be a good segue into what we’ll call “truthiness” checking.
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
  sortida.innerHTML += typeofTypeGuards();
}
