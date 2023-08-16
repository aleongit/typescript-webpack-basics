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
  function printAll(strs: string | string[] | null) {<br>
    &nbsp;if (typeof strs === "object") {<br>
      &nbsp;&nbsp;for (const s of strs) {<br>
  <span class="ressalta">//'strs' is possibly 'null'.</span><br>
      &nbsp;&nbsp;console.log(s);<br>
      &nbsp;&nbsp;}<br>
    &nbsp;} else if (typeof strs === "string") {<br>
      &nbsp;&nbsp;console.log(strs);<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;// do nothing<br>
      &nbsp;}<br>
  }<br>
</code>
`;
  return sortida;
};

const truthinessNarrowing = () => {
  /*
  Truthiness narrowing
  */

  let sortida = '<h2>Truthiness narrowing</h2>';

  /*
  Truthiness might not be a word you’ll find in the dictionary,
  but it’s very much something you’ll hear about in JavaScript.

  In JavaScript, we can use any expression 
  in conditionals, &&s, ||s, if statements, Boolean negations (!), and more. 
  
  As an example, if statements don’t expect their condition to always have the type boolean.

  function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
  }

  In JavaScript, constructs like if first “coerce” their conditions to booleans 
  to make sense of them, and then choose their branches depending on whether the result is true or false. Values like

  - 0
  - NaN
  - "" (the empty string)
  - 0n (the bigint version of zero)
  - null
  - undefined

  all coerce to false, and other values get coerced to true. 
  You can always coerce values to booleans by running them through the Boolean function, 
  or by using the shorter double-Boolean negation.
  (The latter has the advantage that TypeScript infers a narrow literal boolean type true, 
  while inferring the first as type boolean.)

  // both of these result in 'true'
  Boolean("hello"); // type: boolean, value: true
  !!"world"; // type: true,    value: true

  It’s fairly popular to leverage this behavior, 
  especially for guarding against values like null or undefined. 
  
  As an example, let’s try using it for our printAll function.

  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }

  You’ll notice that we’ve gotten rid of the error above by checking if strs is truthy. 
  This at least prevents us from dreaded errors when we run our code like:

  TypeError: null is not iterable

  */

  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }

  sortida += `<code>
  function printAll(strs: string | string[] | null) {<br>
    &nbsp;if (<span class="ressalta">strs &&</span> typeof strs === "object") {<br>
      &nbsp;&nbsp;for (const s of strs) {<br>
      &nbsp;&nbsp;console.log(s);<br>
      &nbsp;&nbsp;}<br>
    &nbsp;} else if (typeof strs === "string") {<br>
      &nbsp;&nbsp;console.log(strs);<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;// do nothing<br>
      &nbsp;}<br>
  }<br>
</code>
`;
  printAll('hola');
  printAll(['hola', 'món']);
  printAll(null);

  /*
  Keep in mind though that truthiness checking on primitives can often be error prone. 
  
  As an example, consider a different attempt at writing printAll

  function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }
  
  We wrapped the entire body of the function in a truthy check, 
  but this has a subtle downside: we may no longer be handling the empty string case correctly.

  TypeScript doesn’t hurt us here at all, but this behavior is worth noting 
  if you’re less familiar with JavaScript. 
  TypeScript can often help you catch bugs early on, but if you choose to do nothing with a value, 
  there’s only so much that it can do without being overly prescriptive. 
  If you want, you can make sure you handle situations like these with a linter.

  One last word on narrowing by truthiness is that Boolean negations with ! filter out 
  from negated branches.

  function multiplyAll(
  values: number[] | undefined,
  factor: number
  ): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map((x) => x * factor);
    }
  }
  */

  function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map((x) => x * factor);
    }
  }

  sortida += `<code>
  function multiplyAll(<br>
    &nbsp;values: number[] | undefined,<br>
    &nbsp;factor: number<br>
  ): number[] | undefined {<br>
    &nbsp;<span class="ressalta">if (!values)</span> {<br>
      &nbsp;&nbsp;return values;<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;return values.map((x) => x * factor);<br>
    &nbsp;}<br>
  }<br><br>
  multiplyAll([1, 2, 3, 4, 5], 2); retorna <b>${multiplyAll([1, 2, 3, 4, 5], 2)}</b><br>
  multiplyAll(undefined, 2); retorna <b>${multiplyAll(undefined, 2)}</b><br>
  multiplyAll([], 2); retorna <b>${multiplyAll([], 2)}</b><br>
</code>
`;

  return sortida;
};

const equalityNarrowing = () => {
  /*
  Equality narrowing
  */

  let sortida = '<h2>Equality narrowing</h2>';

  /*
  TypeScript also uses switch statements and equality 
  checks like ===, !==, ==, and != to narrow types. 
  
  For example:

  function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
          (method) String.toUpperCase(): string
    y.toLowerCase();   
          (method) String.toLowerCase(): string
    } else {
      console.log(x);
          (parameter) x: string | number
      console.log(y);           
          (parameter) y: string | boolean
    }
  }

  When we checked that x and y are both equal in the above example, 
  TypeScript knew their types also had to be equal. 
  Since string is the only common type that both x and y could take on, 
  TypeScript knows that x and y must be a string in the first branch.

  Checking against specific literal values (as opposed to variables) works also. 
  In our section about truthiness narrowing, we wrote a printAll function which was error-prone 
  because it accidentally didn’t handle empty strings properly. 
  Instead we could have done a specific check to block out nulls, 
  and TypeScript still correctly removes null from the type of strs.

  function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
                  (parameter) strs: string[]
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
                  (parameter) strs: string
      }
    }
  }
  */

  function printAll(strs: string | string[] | null) {
    if (strs !== null) {
      if (typeof strs === 'object') {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === 'string') {
        console.log(strs);
      }
    }
  }

  sortida += `<code>
  function printAll(strs: string | string[] | null) {<br>
    &nbsp;<span class="ressalta">if (strs !== null)</span> {<br>
      &nbsp;&nbsp;if (typeof strs === 'object') {<br>
        &nbsp;&nbsp;&nbsp;for (const s of strs) {<br>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(s);<br>
        &nbsp;&nbsp;&nbsp;}<br>
      &nbsp;&nbsp;} else if (typeof strs === 'string') {<br>
        &nbsp;&nbsp;&nbsp;console.log(strs);<br>
      &nbsp;&nbsp;}<br>
    &nbsp;}<br>
  }<br><br>
  printAll('hola');<br>
  printAll(['hola', 'món']);<br>
  printAll(null);<br>
</code>
`;

  printAll('hola');
  printAll(['hola', 'món']);
  printAll(null);

  /*
  JavaScript’s looser equality checks with == and != also get narrowed correctly. 
  If you’re unfamiliar, checking whether something == null actually not only checks 
  whether it is specifically the value null - it also checks whether it’s potentially undefined. 
  The same applies to == undefined: it checks whether a value is either null or undefined.

  interface Container {
  value: number | null | undefined;
  }
  
  function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
      console.log(container.value);   
              (property) Container.value: number
      // Now we can safely multiply 'container.value'.
      container.value *= factor;
    }
  }
  */

  interface Container {
    value: number | null | undefined;
  }

  function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
      console.log(container.value);
      // Now we can safely multiply 'container.value'.
      container.value *= factor;
    }
  }

  sortida += `<code>
  interface Container {<br>
    &nbsp;value: number | null | undefined;<br>
  }<br><br>
  function multiplyValue(container: Container, factor: number) {<br>
    &nbsp;// Remove both 'null' and 'undefined' from the type.<br>
    &nbsp;<span class="ressalta">if (container.value != null)</span> {<br>
      &nbsp;&nbsp;console.log(container.value);<br>
      &nbsp;&nbsp;// Now we can safely multiply 'container.value'.<br>
      &nbsp;&nbsp;container.value *= factor;<br>
    &nbsp;}<br>
  }<br><br>
  multiplyValue({ value: 5 }, 5);<br>
  multiplyValue({ value: null }, 5);<br>
  multiplyValue({ value: undefined }, 5);<br>
</code>
`;

  multiplyValue({ value: 5 }, 5);
  multiplyValue({ value: null }, 5);
  multiplyValue({ value: undefined }, 5);

  return sortida;
};

const inOperator = () => {
  /*
  The in operator narrowing
  */
  let sortida = '<h2>The in operator narrowing</h2>';

  /*
  JavaScript has an operator for determining if an object or its prototype chain has a property 
  with a name: the in operator. 
  TypeScript takes this into account as a way to narrow down potential types.

  For example, with the code: "value" in x. where "value" is a string literal 
  and x is a union type. 
  The “true” branch narrows x’s types which have either an optional or required property value, 
  and the “false” branch narrows to types which have an optional or missing property value.


  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  
  function move(animal: Fish | Bird) {
    if ("swim" in animal) {
      return animal.swim();
    }
  
    return animal.fly();
  }
  */

  type Peix = { neda: () => void };
  type Ocell = { vola: () => void };

  const moure = (animal: Peix | Ocell) => {
    if ('neda' in animal) {
      return animal.neda();
    }
    return animal.vola();
  };
  const llobarro: Peix = { neda: () => 'nedo!' };
  const cacatua: Ocell = { vola: () => 'volo!' };

  sortida += `<code>
  type Peix = { neda: () => void };<br>
  type Ocell = { vola: () => void };<br><br>
  const moure = (animal: Peix | Ocell) => {<br>
    &nbsp;<span class="ressalta">if ('neda' in animal)</span> {<br>
      &nbsp;&nbsp;return animal.neda();<br>
    &nbsp;}<br>
    &nbsp;&nbsp;return animal.vola();<br>
  };<br><br>
  const llobarro: Peix = { neda: () => 'nedo!' };<br>
  const cacatua: Ocell = { vola: () => 'volo!' };<br><br>
  moure(llobarro); retorna <b>${moure(llobarro)}</b><br>
  moure(cacatua); retorna <b>${moure(cacatua)}</b><br>
</code>
`;

  /*
To reiterate, optional properties will exist in both sides for narrowing. 

For example, a human could both swim and fly (with the right equipment) and thus should show up 
in both sides of the in check:

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;
      (parameter) animal: Fish | Human
  } else {
    animal;
      (parameter) animal: Bird | Human
  }
}
*/

  return sortida;
};

const instanceOf = () => {
  /*
  instanceof narrowing
  */
  let sortida = '<h2>instanceof narrowing</h2>';

  /*
  JavaScript has an operator for checking whether or not a value is an “instance” of another value.
  
  More specifically, in JavaScript x instanceof Foo checks whether the prototype chain 
  of x contains Foo.prototype. 
  
  While we won’t dive deep here, and you’ll see more of this when we get into classes, 
  they can still be useful for most values that can be constructed with new. 
  As you might have guessed, instanceof is also a type guard, and TypeScript narrows 
  in branches guarded by instanceofs.

  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                (parameter) x: Date
    } else {
      console.log(x.toUpperCase());
                (parameter) x: string
    }
  }
  */

  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
      return x.toUTCString();
    } else {
      console.log(x.toUpperCase());
      return x.toUpperCase();
    }
  }

  sortida += `<code>
  function logValue(x: Date | string) {<br>
    &nbsp;<span class="ressalta">if (x instanceof Date)</span> {<br>
      &nbsp;&nbsp;return x.toUTCString();<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;return x.toUpperCase();<br>
    &nbsp;}<br>
  }<br><br>
  logValue('23-08-16'); retorna <b>${logValue('23-08-16')}</b><br>
  logValue(new Date()); retorna <b>${logValue(new Date())}</b><br>
</code>
`;

  return sortida;
};

const assignments = () => {
  /*
  Assignments
  */

  let sortida = '<h2>Assignments</h2>';

  /*
  As we mentioned earlier, when we assign to any variable, 
  TypeScript looks at the right side of the assignment and narrows the left side appropriately.

  let x = Math.random() < 0.5 ? 10 : "hello world!";
      let x: string | number
  
  x = 1;
  console.log(x); 
      let x: number
  
  x = "goodbye!";
  console.log(x);        
      let x: string

  
  Notice that each of these assignments is valid. 
  Even though the observed type of x changed to number after our first assignment, 
  we were still able to assign a string to x. 
  This is because the declared type of x - the type that x started with - is string | number, 
  and assignability is always checked against the declared type.

  If we’d assigned a boolean to x, we’d have seen an error since that wasn’t part of the declared type.

  let x = Math.random() < 0.5 ? 10 : "hello world!";
      let x: string | number

  x = 1;
  console.log(x);        
      let x: number

  x = true;
      Type 'boolean' is not assignable to type 'string | number'.
 
console.log(x);           
      let x: string | number
  */

  let x = Math.random() < 0.5 ? 10 : 'hello world!';
  //let x: string | number
  console.log(x);

  x = 1;
  console.log(x);
  //let x: number

  //x = true; //error
  //Type 'boolean' is not assignable to type 'string | number'.

  x = 'goodbye!';
  console.log(x);
  //let x: string

  sortida += `<code>
  let x = Math.random() < 0.5 ? 10 : 'hello world!';<br>
  console.log(x);<br>
  <b>//let x: string | number</b><br><br>
  x = 1;<br>
  console.log(x);<br>
  <b>//let x: number</b><br><br><br>
  <span class="ressalta">//x = true; //error</span><br>
  <span class="ressalta">//Type 'boolean' is not assignable to type 'string | number'.</span><br><br>
  x = 'goodbye!';<br>
  console.log(x);<br>
  <b>//let x: string</b><br>
</code>
`;

  return sortida;
};

const controlFlow = () => {
  /*
  Control flow analysis
  */

  let sortida = '<h2>Control flow analysis</h2>';

  /*
  Up until this point, we’ve gone through some basic examples of how TypeScript narrows 
  within specific branches. 
  But there’s a bit more going on than just walking up from every variable 
  and looking for type guards in ifs, whiles, conditionals, etc. 
  
  For example

  function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
  }

  padLeft returns from within its first if block. 
  TypeScript was able to analyze this code and see that the rest of the body (return padding + input;) 
  is unreachable in the case where padding is a number. 
  As a result, it was able to remove number from the type of padding 
  (narrowing from string | number to string) for the rest of the function.

  This analysis of code based on reachability is called control flow analysis, 
  and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments. 
  
  When a variable is analyzed, control flow can split off and re-merge over and over again, 
  and that variable can be observed to have a different type at each point.

  function example() {
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
  console.log(x);   
        let x: boolean
  
  if (Math.random() < 0.5) {
      x = "hello";
      console.log(x);            
        let x: string
    } else {
      x = 100;
      console.log(x);              
        let x: number
    }
  return x;      
        let x: string | number
  }
  */

  function example() {
    let x: string | number | boolean;

    x = Math.random() < 0.5;
    console.log(x);
    //let x: boolean

    if (Math.random() < 0.5) {
      x = 'hello';
      console.log(x);
      //let x: string
    } else {
      x = 100;
      console.log(x);
      //let x: number
    }
    return x;
    //let x: string | number
  }

  sortida += `<code>
    function example() {<br>
      &nbsp;let x: string | number | boolean;<br><br>
      &nbsp;x = Math.random() < 0.5;<br>
      &nbsp;console.log(x);<br>
      &nbsp;<span class="ressalta">//let x: boolean</span><br><br>
      &nbsp;if (Math.random() < 0.5) {<br>
        &nbsp;&nbsp;x = "hello";<br>
        &nbsp;&nbsp;console.log(x);<br>           
        &nbsp;&nbsp;<span class="ressalta">//let x: string</span><br>
        &nbsp;} else {<br>
          &nbsp;&nbsp;x = 100;<br>
          &nbsp;&nbsp;console.log(x);<br>              
          &nbsp;&nbsp;<span class="ressalta">//let x: number</span><br>
      &nbsp;}<br>
      &nbsp;return x;<br>      
        &nbsp;&nbsp;<span class="ressalta">//let x: string | number</span><br>
      }<br>
</code>
`;

  return sortida;
};

const typePredicates = () => {
  /*
  Using type predicates
  */

  let sortida = '<h2>Using type predicates</h2>';

  /*
  We’ve worked with existing JavaScript constructs to handle narrowing so far, 
  however sometimes you want more direct control over how types change throughout your code.

  To define a user-defined type guard, 
  we simply need to define a function whose return type is a type predicate:

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }


  'pet is Fish' is our type predicate in this example. 
  A predicate takes the form parameterName is Type, where parameterName must be 
  the name of a parameter from the current function signature.

  Any time isFish is called with some variable, 
  TypeScript will narrow that variable to that specific type if the original type is compatible.


  // Both calls to 'swim' and 'fly' are now okay.
  let pet = getSmallPet();
  
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }

  Notice that TypeScript not only knows that pet is a Fish in the if branch; 
  it also knows that in the else branch, you don’t have a Fish, so you must have a Bird.

  You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish:

  const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
  const underWater1: Fish[] = zoo.filter(isFish);
  // or, equivalently
  const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
  
  // The predicate may need repeating for more complex examples
  const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name === "sharkey") return false;
    return isFish(pet);
  });

  */

  type Fish = { swim: () => void; name: string };
  type Bird = { fly: () => void; name: string };

  function getSmallPet(): Fish | Bird {
    return Math.random() < 0.5
      ? <Fish>{ name: 'Nemo', swim: () => 'nedo!' }
      : <Bird>{ name: 'Piolin', fly: () => 'volo' };
  }

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  // ---cut---
  const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
  console.log(zoo);

  const underWater1: Fish[] = zoo.filter(isFish);
  // or, equivalently
  const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
  console.log(underWater1);
  console.log(underWater2);

  // The predicate may need repeating for more complex examples
  const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name === 'sharkey') return false;
    return isFish(pet);
  });
  console.log(underWater3);

  sortida += `<code>
  type Fish = { swim: () => void; name: string };<br>
  type Bird = { fly: () => void; name: string };<br><br>
  function getSmallPet(): Fish | Bird {<br>
    &nbsp;return Math.random() < 0.5<br>
      &nbsp;&nbsp;? <Fish>{ name: 'Nemo', swim: () => 'nedo!' }<br>
      &nbsp;&nbsp;: <Bird>{ name: 'Piolin', fly: () => 'volo' };<br>
  }<br><br>
  function isFish(pet: Fish | Bird): <span class="ressalta">pet is Fish</span> {<br>
    &nbsp;return (pet as Fish).swim !== undefined;<br>
  }<br><br>
  const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];<br>
  const underWater1: Fish[] = zoo.filter(isFish);<br><br>
  <b>// or, equivalently</b><br>
  const underWater2: Fish[] = zoo.filter(isFish) as Fish[];<br><br>
  <b>// The predicate may need repeating for more complex examples</b><br>
  const underWater3: Fish[] = zoo.filter((pet): <span class="ressalta">pet is Fish</span> => {<br>
    &nbsp;if (pet.name === 'sharkey') return false;<br>
    &nbsp;return isFish(pet);<br>
  });<br>
</code>
`;

  /*
  In addition, classes can use this is Type to narrow their type.
  https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards


  Assertion functions
  Types can also be narrowed using Assertion functions.
  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions


  */

  return sortida;
};

const discriminatedUnions = () => {
  /*
  Discriminated unions
  */

  let sortida = '<h2>Discriminated unions</h2>';

  /*
  Most of the examples we’ve looked at so far have focused around narrowing single variables 
  with simple types like string, boolean, and number. 
  While this is common, 
  most of the time in JavaScript we’ll be dealing with slightly more complex structures.

  For some motivation, let’s imagine we’re trying to encode shapes like circles and squares.
  Circles keep track of their radiuses and squares keep track of their side lengths. 
  We’ll use a field called kind to tell which shape we’re dealing with. 
  Here’s a first attempt at defining Shape.

  interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
  }

  Notice we’re using a union of string literal types: "circle" and "square" to tell us 
  whether we should treat the shape as a circle or square respectively. 
  By using "circle" | "square" instead of string, we can avoid misspelling issues.

  function handleShape(shape: Shape) {
    // oops!
    if (shape.kind === "rect") {
  This comparison appears to be unintentional because the types '"circle" | "square"' 
  and '"rect"' have no overlap.
      // ...
    }
  }


  We can write a getArea function that applies the right logic based on if it’s dealing 
  with a circle or square. 
  
  We’ll first try dealing with circles.

  function getArea(shape: Shape) {
    return Math.PI * shape.radius ** 2;
  'shape.radius' is possibly 'undefined'.
  }


  Under strictNullChecks that gives us an error - 
  which is appropriate since radius might not be defined. 
  But what if we perform the appropriate checks on the kind property?

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
  'shape.radius' is possibly 'undefined'.
    }
  }

  Hmm, TypeScript still doesn’t know what to do here. 
  We’ve hit a point where we know more about our values than the type checker does. 
  We could try to use a non-null assertion (a ! after shape.radius) 
  to say that radius is definitely present.

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius! ** 2;
    }
  }

  But this doesn’t feel ideal. 
  We had to shout a bit at the type-checker with those non-null assertions (!) 
  to convince it that shape.radius was defined, but those assertions are error-prone 
  if we start to move code around. 
  Additionally, outside of strictNullChecks we’re able to accidentally 
  access any of those fields anyway 
  (since optional properties are just assumed to always be present when reading them). 
  We can definitely do better.

  The problem with this encoding of Shape is that the type-checker doesn’t have any way to know 
  whether or not radius or sideLength are present based on the kind property. 
  We need to communicate what we know to the type checker.
   With that in mind, let’s take another swing at defining Shape.

  interface Circle {
    kind: "circle";
    radius: number;
  }
  
  interface Square {
    kind: "square";
    sideLength: number;
  }
  
  type Shape = Circle | Square;



  Here, we’ve properly separated Shape out into two types with different values for the kind property, 
  but radius and sideLength are declared as required properties in their respective types.

  Let’s see what happens here when we try to access the radius of a Shape.

  function getArea(shape: Shape) {
    return Math.PI * shape.radius ** 2;
  Property 'radius' does not exist on type 'Shape'.
    Property 'radius' does not exist on type 'Square'.
  }


  Like with our first definition of Shape, this is still an error. 
  When radius was optional, we got an error (with strictNullChecks enabled) because TypeScript 
  couldn’t tell whether the property was present. 
  Now that Shape is a union, TypeScript is telling us that shape might be a Square, 
  and Squares don’t have radius defined on them! 
  Both interpretations are correct, but only the union encoding of Shape will cause an error 
  regardless of how strictNullChecks is configured.

  But what if we tried checking the kind property again?

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
                       (parameter) shape: Circle
    }
  }


  That got rid of the error! When every type in a union contains a common property with literal types, 
  TypeScript considers that to be a discriminated union, and can narrow out the members of the union.

  In this case, kind was that common property 
  (which is what’s considered a discriminant property of Shape). 
  Checking whether the kind property was "circle" got rid of every type in Shape
  that didn’t have a kind property with the type "circle". 
  That narrowed shape down to the type Circle.

  The same checking works with switch statements as well. 
  Now we can try to write our complete getArea without any pesky ! non-null assertions.

  function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
                    (parameter) shape: Circle
      case "square":
        return shape.sideLength ** 2;
                    (parameter) shape: Square
    }
  }

  The important thing here was the encoding of Shape. 
  Communicating the right information to TypeScript - that Circle and Square were really 
  two separate types with specific kind fields - was crucial. 
  Doing that lets us write type-safe TypeScript code that looks no different 
  than the JavaScript we would’ve written otherwise. 
  From there, the type system was able to do the “right” thing and figure out the types 
  in each branch of our switch statement.

  As an aside, try playing around with the above example and remove some of the return keywords. 
  You’ll see that type-checking can help avoid bugs when accidentally falling through 
  different clauses in a switch statement.

  Discriminated unions are useful for more than just talking about circles and squares. 
  They’re good for representing any sort of messaging scheme in JavaScript, 
  like when sending messages over the network (client/server communication), 
  or encoding mutations in a state management framework.
  */

  sortida += `<code>
  <span class="ressalta">//We can definitely do better</span><br>
  interface Shape {<br>
    &nbsp;kind: "circle" | "square";<br>
    &nbsp;radius?: number;<br>
    &nbsp;sideLength?: number;<br>
  }<br><br>
  function getArea(shape: Shape) {<br>
    &nbsp;if (shape.kind === "circle") {<br>
      &nbsp;&nbsp;return Math.PI * shape.radius! ** 2;<br>
    &nbsp;}<br>
  }<br>
</code>
`;

  interface Circle {
    kind: 'circle';
    radius: number;
  }

  interface Square {
    kind: 'square';
    sideLength: number;
  }

  type Shape = Circle | Square;

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case 'circle':
        return Math.PI * shape.radius ** 2;
      //(parameter) shape: Circle
      case 'square':
        return shape.sideLength ** 2;
      //(parameter) shape: Square
    }
  }
  console.log(getArea({ kind: 'circle', radius: 5 }));
  console.log(getArea({ kind: 'square', sideLength: 4 }));

  sortida += `<code>
  <span class="ressalta">//Doing better</span><br>
  interface Circle {<br>
    &nbsp;kind: 'circle';<br>
    &nbsp;radius: number;<br>
  }<br><br>
  interface Square {<br>
    &nbsp;kind: 'square';<br>
    &nbsp;sideLength: number;<br>
  }<br><br>
  type Shape = Circle | Square;<br><br>
  function getArea(shape: Shape) {<br>
    &nbsp;switch (shape.kind) {<br>
      &nbsp;&nbsp;case 'circle':<br>
        &nbsp;&nbsp;&nbsp;return Math.PI * shape.radius ** 2;<br>
      &nbsp;&nbsp;<span class="ressalta">//(parameter) shape: Circle</span><br>
      &nbsp;&nbsp;case 'square':<br>
        &nbsp;&nbsp;&nbsp;return shape.sideLength ** 2;<br>
      &nbsp;&nbsp;<span class="ressalta">//(parameter) shape: Square</span><br>
    &nbsp;}<br>
  }<br>
</code>
`;

  return sortida;
};

const never = () => {
  /*
  The never type
  */

  let sortida = '<h2>The never type</h2>';

  /*
  When narrowing, you can reduce the options of a union to a point where you have removed 
  all possibilities and have nothing left. 
  In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.
  */

  /*
  Exhaustiveness checking
  */

  sortida += '<h3>Exhaustiveness checking</h3>';

  /*
  The never type is assignable to every type; however, 
  no type is assignable to never (except never itself). 
  This means you can use narrowing and rely on never turning up to do exhaustive checking 
  in a switch statement.

  For example, adding a default to our getArea function which tries to assign the shape to never 
  will not raise an error when every possible case has been handled.


  type Shape = Circle | Square;
 
  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }

  */

  sortida += `<code>
  type Shape = Circle | Square;<br><br>
  function getArea(shape: Shape) {<br>
    &nbsp;switch (shape.kind) {<br>
      &nbsp;&nbsp;case "circle":<br>
        &nbsp;&nbsp;&nbsp;return Math.PI * shape.radius ** 2;<br>
      &nbsp;&nbsp;case "square":<br>
        &nbsp;&nbsp;&nbsp;return shape.sideLength ** 2;<br>
      &nbsp;&nbsp;<span class="ressalta">default:</span><br>
        &nbsp;&nbsp;&nbsp;<span class="ressalta">const _exhaustiveCheck: never = shape;</span><br>
        &nbsp;&nbsp;&nbsp;<span class="ressalta">return _exhaustiveCheck;</span><br>
    &nbsp;}<br>
  }<br>

</code>
`;

  /*
  Adding a new member to the Shape union, will cause a TypeScript error:

  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }
  
  type Shape = Circle | Square | Triangle;
  
  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape;
  Type 'Triangle' is not assignable to type 'never'.
        return _exhaustiveCheck;
    }
  }

  */

  sortida += `<code>
  <span class="ressalta">//Adding a new member to the Shape union, will cause a TypeScript error</span><br>
  interface Triangle {<br>
    &nbsp;kind: 'triangle';<br>
    &nbsp;sideLength: number;<br>
  }<br><br>
  type Shape = Circle | Square | Triangle;<br><br>
  function getArea(shape: Shape) {<br>
    &nbsp;switch (shape.kind) {<br>
      &nbsp;&nbsp;case "circle":<br>
        &nbsp;&nbsp;&nbsp;return Math.PI * shape.radius ** 2;<br>
      &nbsp;&nbsp;case "square":<br>
        &nbsp;&nbsp;&nbsp;return shape.sideLength ** 2;<br>
      &nbsp;&nbsp;default:<br>
        &nbsp;&nbsp;&nbsp;<span class="ressalta">//error de _exhaustiveCheck si no hi ha cas Triangle</span><br>
        &nbsp;&nbsp;&nbsp;const _exhaustiveCheck: never = shape;<br>
        &nbsp;&nbsp;&nbsp;return _exhaustiveCheck;<br>
    &nbsp;}<br>
  }<br>

</code>
`;

  return sortida;
};

init.montaPagina();
const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += typeofTypeGuards();
  sortida.innerHTML += truthinessNarrowing();
  sortida.innerHTML += equalityNarrowing();
  sortida.innerHTML += inOperator();
  sortida.innerHTML += instanceOf();
  sortida.innerHTML += assignments();
  sortida.innerHTML += controlFlow();
  sortida.innerHTML += typePredicates();
  sortida.innerHTML += discriminatedUnions();
  sortida.innerHTML += never();
}
