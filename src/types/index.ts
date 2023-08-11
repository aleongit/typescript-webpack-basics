import * as init from '../init';
import '../main.css';
//import "./styles.css"; //component styles

const primitives = () => {
  /*
The primitives: string, number, and boolean
*/
  let sortida = '<h2>The primitives: string, number, and boolean</h2>';
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
  let sortida = '<h2>Arrays</h2>';

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

const typeAni = () => {
  /*
  Any
  */
  let sortida = '<h2>Any</h2>';
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

const typeAnnotationVar = () => {
  /*
  Type Annotations on Variables
  */
  let sortida = '<h2>Type Annotations on Variables</h2>';

  /*
  When you declare a variable using const, var, or let, you can optionally add a type annotation 
  to explicitly specify the type of the variable:

  let myName: string = "Alice";

  TypeScript doesn’t use “types on the left”-style declarations like int x = 0; 
  Type annotations will always go after the thing being typed.

  In most cases, though, this isn’t needed. 
  Wherever possible, TypeScript tries to automatically infer the types in your code. 
  For example, the type of a variable is inferred based on the type of its initializer:

  // No type annotation needed -- 'myName' inferred as type 'string'
  let myName = "Alice";

  For the most part you don’t need to explicitly learn the rules of inference. 
  If you’re starting out, try using fewer type annotations than you think - 
  you might be surprised how few you need for TypeScript to fully understand what’s going on.
  */

  sortida += `<code>
  <span class="ressalta">let myName: string = "Alice"</span> és tan correcte com 
  <span class="ressalta">let myName = "Alice";</span><br>
  </code>
  `;
  return sortida;
};

const functions = () => {
  /*
  Functions
  */
  let sortida = '<h2>Functions</h2>';
  /*
  Functions are the primary means of passing data around in JavaScript.
  TypeScript allows you to specify the types of both the input and output values of functions.
  */

  /*
  Parameter Type Annotations
  */
  sortida += '<h3>Parameter Type Annotations</h3>';

  /*
  When you declare a function, you can add type annotations after each parameter 
  to declare what types of parameters the function accepts. 
  Parameter type annotations go after the parameter name:

  // Parameter type annotation
  function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
  }

  When a parameter has a type annotation, arguments to that function will be checked:

  // Would be a runtime error if executed!
  greet(42);
  Argument of type 'number' is not assignable to parameter of type 'string'.

  Even if you don’t have type annotations on your parameters, 
  TypeScript will still check that you passed the right number of arguments.
  */

  const funcioSalut = (nom: string) => {
    console.log('Hola ' + nom.toUpperCase() + ' !!');
  };

  sortida += `<code>
  const funcioSalut = (nom: string) => {<br>
    &nbsp;console.log("Hola " + nom.toUpperCase() + " !!");<br>
  }<br><br>
  <b>ok</b> si la crides amb <span class="ressalta">funcioSalut('Pastanaga');</span><br>
  <b>ko</b> si la crides amb <span class="ressalta">funcioSalut(42);</span><br>
  </code>
  `;
  funcioSalut('Pastanaga');

  /*
  Return Type Annotations
  */
  sortida += '<h3>Return Type Annotations</h3>';
  /*

  You can also add return type annotations.
  Return type annotations appear after the parameter list:

  function getFavoriteNumber(): number {
    return 26;
  }

  Much like variable type annotations, you usually don’t need a return type annotation 
  because TypeScript will infer the function’s return type based on its return statements.
  The type annotation in the above example doesn’t change anything.
  Some codebases will explicitly specify a return type for documentation purposes,
  to prevent accidental changes, or just for personal preference.
  */

  const getFavoriteNumber = (): number => {
    // Returns a random integer from 0 to 9:
    return Math.floor(Math.random() * 10);
  };

  sortida += `<code>
  const getFavoriteNumber = ():number => {<br>
    &nbsp;return Math.floor(Math.random() * 10);<br>
  }<br><br>
  <b>getFavoriteNumber();</b> retorna <b>${getFavoriteNumber()}</b> de tipus 
    <b>${typeof getFavoriteNumber()}</b><br>
  </code>
  `;

  /*
  Anonymous Functions
  */
  sortida += '<h3>Anonymous Functions</h3>';

  /*
  Anonymous functions are a little bit different from function declarations. 
  When a function appears in a place where TypeScript can determine how it’s going to be called, 
  the parameters of that function are automatically given types.

  Here’s an example:

  const names = ["Alice", "Bob", "Eve"];
  
  // Contextual typing for function - parameter s inferred to have type string
  names.forEach(function (s) {
    console.log(s.toUpperCase());
  });
  
  // Contextual typing also applies to arrow functions
  names.forEach((s) => {
    console.log(s.toUpperCase());
  });

  Even though the parameter s didn’t have a type annotation, 
  TypeScript used the types of the forEach function, along with the inferred type of the array, 
  to determine the type s will have.

  This process is called 'contextual typing' because the 'context' that the function occurred 
  within informs what type it should have.

  Similar to the inference rules, you don’t need to explicitly learn how this happens, 
  but understanding that it does happen can help you notice when type annotations aren’t needed. 
  Later, we’ll see more examples of how the context that a value occurs in can affect its type.
  */

  const noms = ['Galderic', 'Esclarmunda', 'Aurembiaix', 'Benvinguda'];

  const getNoms = (): string => {
    let cadena: string = '';
    let sep: string = '';

    noms.forEach((nom, index) => {
      console.log(nom.toUpperCase());

      //cas últim item, penúltim i altres
      if (index === noms.length - 1) {
        sep = '';
      } else if (index === noms.length - 2) {
        sep = ' i ';
      } else {
        sep = ', ';
      }
      cadena += nom + sep;
    });
    return cadena;
  };
  console.log(getNoms());

  sortida += `<code>
  const noms = ['Galderic', 'Esclarmunda', 'Aurembiaix', 'Benvinguda'];
  <br><br>
  noms.map( (nom) => {<br>
    &nbsp;return 'Hola ' + nom + '&lt;br&gt;';<br>
  }).join('')}<br><br>
  ${noms
    .map((nom) => {
      return 'Hola ' + nom + '<br>';
    })
    .join('')}<br>
  Per a funció anònima no cal declarar el tipus; TypeScript s'encarrega per ser 'contextual typing'.
  </code>
  `;

  return sortida;
};

const objectTypes = () => {
  /*
  Object Types
  */
  let sortida = '<h2>Object Types</h2>';

  /*
  Apart from primitives, the most common sort of type you’ll encounter is an object type. 
  This refers to any JavaScript value with properties, which is almost all of them! 
  To define an object type, we simply list its properties and their types.

  For example, here’s a function that takes a point-like object:

  // The parameter's type annotation is an object type
  function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });

  Here, we annotated the parameter with a type with two properties - x and y - 
  which are both of type number. 
  You can use , or ; to separate the properties, and the last separator is optional either way.

  The type part of each property is also optional. 
  If you don’t specify a type, it will be assumed to be any.
  */

  const printCoord = (obj: { x: number; y: number }) => {
    console.log('El valor de coordenada x és ' + obj.x);
    console.log('El valor de coordenada y és ' + obj.y);
  };

  sortida += `<code>
  const printCoord = (obj: { x: number; y: number }) => {<br>
    &nbsp;console.log('El valor de coordenada x és ' + obj.x);<br>
    &nbsp;console.log('El valor de coordenada y és ' + obj.y);<br>
  };<br><br>
  printCoord({ x: 4, y: 5 });<br>
  </code>
  `;
  printCoord({ x: 4, y: 5 });

  /*
  Optional Properties
  */
  sortida += '<h3>Optional Properties</h3>';
  /*
  Object types can also specify that some or all of their properties are optional. 
  To do this, add a ? after the property name:

  function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });
  
  
  In JavaScript, if you access a property that doesn’t exist, 
  you’ll get the value undefined rather than a runtime error.
  Because of this, when you read from an optional property, 
  you’ll have to check for undefined before using it.

  function printName(obj: { first: string; last?: string }) {

    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    'obj.last' is possibly 'undefined'.
    
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
  
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
 */

  const printNom = (obj: { nom: string; cognom?: string }) => {
    console.log(obj.nom);
    console.log(obj.cognom); //undefined si no hi és
    //console.log(obj.cognom.toUpperCase()); //fatal error

    if (obj.cognom !== undefined) {
      console.log('controlant si és undefined');
      console.log(obj.cognom.toUpperCase());
    }
    console.log('alternativa segura amb sintaxi js moderna');
    console.log(obj.cognom?.toUpperCase());
  };

  sortida += `<code>
  const printNom = (obj: { nom: string; cognom?: string }) => {<br>
    &nbsp;console.log(obj.nom);<br>
    &nbsp;console.log(obj.cognom); //undefined si no hi és<br>
    &nbsp;//console.log(obj.cognom.toUpperCase()); //fatal error<br>
    &nbsp;<br>
    &nbsp;if (obj.cognom !== undefined) {<br>
      &nbsp;&nbsp;console.log('controlant si és undefined');<br>
      &nbsp;&nbsp;console.log(obj.cognom.toUpperCase());<br>
    &nbsp;}<br>
    &nbsp;console.log('alternativa segura amb sintaxi js moderna');<br>
    &nbsp;console.log(obj.cognom?.toUpperCase());<br>
  };<br><br>
  printNom({ nom: 'Pepet' })<br>
  printNom({ nom: 'Pepet', cognom: 'Vallfogona' })<br>
  </code>
  `;
  printNom({ nom: 'Pepet' });
  printNom({ nom: 'Pepet', cognom: 'Vallfogona' });

  return sortida;
};

const unionTypes = () => {
  /*
  Union Types
  */
  let sortida = '<h2>Union Types</h2>';

  /*
  TypeScript’s type system allows you to build new types out of existing ones 
  using a large variety of operators. 
  Now that we know how to write a few types, it’s time to start combining them in interesting ways.
  
  Defining a Union Type
  */

  sortida += '<h3>Defining a Union Type</h3>';

  /*
  The first way to combine types you might see is a union type. 
  A union type is a type formed from two or more other types, representing values that 
  may be any one of those types. We refer to each of these types as the union’s members.

  Let’s write a function that can operate on strings or numbers:

  function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  printId({ myID: 22342 });
  Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
  */

  const printId = (id: number | string) => {
    console.log('El teu ID és ' + id + ' de tipus ' + typeof id);
  };

  sortida += `<code>
  const printId = (id: number | string) => {<br>
    &nbsp;console.log('El teu ID és ' + id + ' de tipus ' + typeof id);<br>
  }<br><br>
  printId(101);<br>
  printId("101");<br>
  //printId({id: 101}) //fatal error;<br>
  </code>
  `;
  printId(101);
  printId('101');
  //printId({id: 101}) //fatal error;

  /*
  Working with Union Types
  */

  sortida += '<h3>Working with Union Types</h3>';

  /*
  It’s easy to provide a value matching a union type - 
  simply provide a type matching any of the union’s members. 
  If you have a value of a union type, how do you work with it?

  TypeScript will only allow an operation if it is valid for every member of the union. 
  
  For example, if you have the union string | number, 
  you can’t use methods that are only available on string:

  function printId(id: number | string) {
    console.log(id.toUpperCase());
  Property 'toUpperCase' does not exist on type 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'.
  }

  The solution is to narrow the union with code, 
  the same as you would in JavaScript without type annotations. 
  Narrowing occurs when TypeScript can deduce a more specific type for a value based 
  on the structure of the code.

  For example, TypeScript knows that only a string value will have a typeof value "string":

  function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }
  */

  const printIdMajuscula = (id: number | string) => {
    //console.log(id.toUpperCase()); //error perquè no és mètode comú pels dos tipus
    if (typeof id === 'string') {
      console.log(id.toUpperCase());
    } else {
      console.log(id + 'ets un number!');
    }
  };

  sortida += `<code>
  const printIdMajuscula = (id: number | string) => {<br>
    &nbsp;//console.log(id.toUpperCase()); //error perquè no és mètode comú pels dos tipus<br>
    &nbsp;if (typeof id === 'string') {<br>
      &nbsp;&nbsp;console.log(id.toUpperCase());<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;console.log(id + 'ets un number!');<br>
    &nbsp;}<br>
  };<br><br>
  printIdMajuscula('f33b54x');<br>
  printIdMajuscula(33);<br>
  </code>
  `;
  printIdMajuscula('f33b54x');
  printIdMajuscula(33);

  /*
  Another example is to use a function like Array.isArray:

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }
  */

  const persona: string = 'Pepeta';
  const persones: string[] = ['Pepeta', 'Marieta', 'Joaneta'];

  const saluda = (gent: string | string[]) => {
    if (Array.isArray(gent)) {
      console.log('Hola Array! ' + gent.join(' i '));
    } else {
      console.log('Hola String! ' + gent);
    }
  };

  sortida += `<code>
  const persona: string = 'Pepeta';<br>
  const persones: string[] = ['Pepeta', 'Marieta', 'Joaneta'];<br><br>
  const saluda = (gent: string | string[]) => {<br>
    &nbsp;if (Array.isArray(gent)) {<br>
      &nbsp;&nbsp;console.log('Hola Array! ' + gent.join(' i '));<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;console.log('Hola String! ' + gent);<br>
    &nbsp;}<br>
  };<br><br>
  saluda(persona);<br>
  saluda(persones);<br>
  </code>
  `;
  saluda(persona);
  saluda(persones);

  /*
  Notice that in the else branch, we don’t need to do anything special - 
  if x wasn’t a string[], then it must have been a string.

  Sometimes you’ll have a union where all the members have something in common. 
  
  For example, both arrays and strings have a slice method. 
  If every member in a union has a property in common, you can use that property without narrowing:

  // Return type is inferred as number[] | string
  function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
  }

  It might be confusing that a union of types appears to have the intersection of those types’ properties.
  This is not an accident - the name union comes from type theory.
  The union number | string is composed by taking the union of the values from each type.
  Notice that given two sets with corresponding facts about each set, 
  only the intersection of those facts applies to the union of the sets themselves. 
  
  For example, if we had a room of tall people wearing hats, 
  and another room of Spanish speakers wearing hats, after combining those rooms, 
  the only thing we know about every person is that they must be wearing a hat.
  */

  const getPosicioTres = (x: number[] | string) => {
    //mètode en comú
    return x.slice(0, 3);
  };

  sortida += `<code>
  const getPosicioTres = (x: number[] | string) => {<br>
    &nbsp;//mètode en comú<br>
    &nbsp;return x.slice(0,3);<br>
  }<br><br>
  getPosicioTres('12345'); retorna ${getPosicioTres('123')}<br>
  getPosicioTres([1,2,3,4,5]); retorna ${getPosicioTres([1, 2, 3])}<br>
  </code>
  `;

  return sortida;
};

init.montaPagina();
const sortida = document.getElementById('sortida');
sortida.innerHTML += primitives();
sortida.innerHTML += arrays();
sortida.innerHTML += typeAni();
sortida.innerHTML += typeAnnotationVar();
sortida.innerHTML += functions();
sortida.innerHTML += objectTypes();
sortida.innerHTML += unionTypes();
