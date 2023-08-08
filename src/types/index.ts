import * as init from '../init';
import '../main.css';
//import "./styles.css"; //component styles

let sortida: string = '';

const primitives = () => {
  /*
The primitives: string, number, and boolean
*/
  sortida = '<h2>The primitives: string, number, and boolean</h2>';
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

  const paraula: string = 'paraula';
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
  sortida = '<h2>Arrays</h2>';

  /*
To specify the type of an array like [1, 2, 3], you can use the syntax number[];
this syntax works for any type (e.g. string[] is an array of strings, and so on). 
You may also see this written as Array<number>, which means the same thing. 
We’ll learn more about the syntax T<U> when we cover generics.

Note that [number] is a different thing; refer to the section on Tuples.
*/

  const nombres: number[] = [1, 2, 3, 4, 5];
  const lletres: Array<string> = ['a', 'b', 'c', 'd', 'e'];

  sortida += `<code>
<la variable <b>nombres</b> de tipus <b>${typeof nombres}</b> amb valor <b>${nombres}</b><br>
la variable <b>lletres</b> de tipus <b>${typeof lletres}</b> amb valor <b>${lletres}</b><br>
</code>
`;
  return sortida;
};

const ani = () => {
  /*
  Any
  */
  sortida = '<h2>Any</h2>';
  /*
  TypeScript also has a special type, any, 
  that you can use whenever you don’t want a particular value to cause typechecking errors.

  When a value is of type any, you can access any properties of it 
  (which will in turn be of type any), call it like a function, 
  assign it to (or from) a value of any type, 
  or pretty much anything else that’s syntactically legal:
  */

  const obj: any = { x: 0 };
  let test: any;

  // None of the following lines of code will throw compiler errors.
  // Using `any` disables all further type checking, and it is assumed
  // you know the environment better than TypeScript.

  /*
  obj.foo();
  obj();
  obj.bar = 100;
  obj = 'hello';
  const n: number = obj;
  */

  sortida += `<code>
  <b>obj</b> de tipus 'any' és <b>${typeof obj}</b> i conté <b>${JSON.stringify(obj)}</b><br>
  <b>'x' in obj</b> ${'x' in obj} amb valor <b>${obj.x}</b><br>
  <b>'y' in obj</b> ${'y' in obj} amb valor <b>${obj.y}</b><br>
  </code>
  `;

  /*
  The any type is useful when you don’t want to write out a long type just to convince TypeScript
  that a particular line of code is okay.

  noImplicitAny

  When you don’t specify a type, and TypeScript can’t infer it from context, 
  the compiler will typically default to any.
  You usually want to avoid this, though, because any isn’t type-checked.
  Use the compiler flag noImplicitAny to flag any implicit any as an error.
  */

  /*
  function fn(s) {
    // No error?
    console.log(s.subtr(3));
  }
  fn(42);
  */

  return sortida;
};

init.montaPagina();
document.getElementById('sortida').innerHTML = primitives() + arrays() + ani();
