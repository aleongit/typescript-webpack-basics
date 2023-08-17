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
  The simplest way to describe a function is with a function type expression. 
  These types are syntactically similar to arrow functions:

  function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
  
  function printToConsole(s: string) {
    console.log(s);
  }
  
  greeter(printToConsole);


  The syntax (a: string) => void means 
  “a function with one parameter, named a, of type string, that doesn’t have a return value”. 
  Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any.

  Note that the parameter name is required. 
  The function type (string) => void means “a function with a parameter named string of type any“!

  Of course, we can use a type alias to name a function type:

  type GreetFunction = (a: string) => void;
  function greeter(fn: GreetFunction) {
  // ...
  }
  */

  function greeter(fn: (a: string) => void) {
    fn('Hello, World');
  }

  function printToConsole(s: string) {
    console.log(s);
  }

  greeter(printToConsole);

  sortida += `<code>

  <span class="ressalta">//funció que requereix com a primer paràmetre una altra funció amb un argument string</span><br>
  function greeter(<span class="ressalta">fn: (a: string) => void)</span> {<br>
    &nbsp;fn('Hello, World');<br>
  }<br>
  <b>//The syntax (a: string) => void means</b><br>
  <b>//= a function with one parameter (a) of type string, that doesn't have a return value</b><br><br>
  //<span class="ressalta">funció que cumpleix amb el paràmetre de l'anterior funció</span><br>
  function printToConsole(s: string) {<br>
    &nbsp;console.log(s);<br>
  }<br><br>
  <span class="ressalta">//pas de funció com a paràmetre<br>
  greeter(printToConsole);<br>
</code>
`;

  sortida += `<code>
  <span class="ressalta">//Of course, we can use a type alias to name a function type:</span><br>
  type GreetFunction = (a: string) => void;<br>
  function greeter(fn: GreetFunction) {<br>
  // ...<br>
  }<br>
</code>
`;
  return sortida;
};

const callSignatures = () => {
  /*
  Call Signatures
  */

  let sortida = '<h2>Call Signatures</h2>';

  /*
  In JavaScript, functions can have properties in addition to being callable. 
  However, the function type expression syntax doesn’t allow for declaring properties. 
  If we want to describe something callable with properties, 
  we can write a call signature in an object type:

  type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
  
  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
  
  doSomething(myFunc);
  
  Note that the syntax is slightly different compared to a function type expression 
  - use : between the parameter list and the return type rather than =>.
  */

  type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + ' returned ' + fn(6));
  }

  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = 'default description';

  doSomething(myFunc);

  sortida += `<code>
  <b>//for describe something callable with properties, we can write a call signature in an object type</b><br>
  type DescribableFunction = {<br>
    <span class="ressalta">&nbsp;description: string;<br>
    &nbsp;(someArg: number): boolean;</span><br>
  };<br>
  <b>//Note that the syntax is slightly different compared to a function type expression</b><br>
  <b>//use : between the parameter list and the return type rather than =></b><br><br>
  function doSomething(fn: DescribableFunction) {<br>
    &nbsp;console.log(fn.description + ' returned ' + fn(6));<br>
  }<br><br>
  function myFunc(someArg: number) {<br>
    &nbsp;return someArg > 3;<br>
  }<br><br>
  <span class="ressalta">myFunc.description = 'default description';</span><br><br>
  doSomething(myFunc);<br>
</code>
`;

  return sortida;
};

const constructSignatures = () => {
  /*
  Construct Signatures
  */

  let sortida = '<h2>Construct Signatures</h2>';

  /*
  JavaScript functions can also be invoked with the new operator. 
  TypeScript refers to these as constructors because they usually create a new object. 
  You can write a construct signature by adding the new keyword in front of a call signature:

  type SomeConstructor = {
    new (s: string): SomeObject;
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }
  
  Some objects, like JavaScript’s Date object, can be called with or without new. 
  You can combine call and construct signatures in the same type arbitrarily:

  interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): string;
  }
  */

  sortida += `<code>
  <b>//You can write a construct signature by adding the 'new' keyword in front of a call signature</b><br>
  type SomeConstructor = {<br>
    <span class="ressalta">&nbsp;new (s: string): SomeObject;</span><br>
  };<br>
  function fn(ctor: SomeConstructor) {<br>
    &nbsp;return new ctor("hello");<br>
  }<br>
</code>
`;

  sortida += `<code>
//<b>You can combine call and construct signatures in the same type arbitrarily</b><br>
interface CallOrConstruct {<br>
  &nbsp;new (s: string): Date;<br>
  &nbsp;(n?: number): string;<br>
}<br>
</code>
`;

  return sortida;
};

const genericFunctions = () => {
  /*
  Generic Functions
  */

  let sortida = '<h2>Generic Functions</h2>';

  /*
  Generic Functions
  It’s common to write a function where the types of the input relate to the type of the output, 
  or where the types of two inputs are related in some way. 
  
  Let’s consider for a moment a function that returns the first element of an array:

  function firstElement(arr: any[]) {
    return arr[0];
  }


  This function does its job, but unfortunately has the return type any.
  It’d be better if the function returned the type of the array element.

  In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:

  function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
  }

  By adding a type parameter Type to this function and using it in two places, 
  we’ve created a link between the input of the function (the array) and the output (the return value).
  
  Now when we call it, a more specific type comes out:

  // s is of type 'string'
  const s = firstElement(["a", "b", "c"]);
  // n is of type 'number'
  const n = firstElement([1, 2, 3]);
  // u is of type undefined
  const u = firstElement([]);
  */

  function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
  }

  // s is of type 'string'
  const s = firstElement(['a', 'b', 'c']);
  // n is of type 'number'
  const n = firstElement([1, 2, 3]);
  // u is of type undefined
  const u = firstElement([]);

  console.log(s);
  console.log(n);
  console.log(u);

  sortida += `<code>
  <b>//This function does its job, but unfortunately has the return type any</b><br>
  function firstElement(arr: any[]) {<br>
    &nbsp;return arr[0];<br>
  }<br>
</code>
`;

  sortida += `<code>
<b>//adding a type parameter 'Type'</b><br>
function firstElement<span class="ressalta">&lt;Type&gt;</span>(arr: <b>Type[]</b>): <b>Type</b> | undefined {<br>
  return arr[0];<br>
}<br><br>
<b>// s is of type 'string'</b><br>
const s = firstElement(['a', 'b', 'c']);<br>
<b>// n is of type 'number'</b><br>
const n = firstElement([1, 2, 3]);<br>
<b>// u is of type undefined</b><br>
const u = firstElement([]);<br>
</code>
`;

  /*
Inference
*/

  sortida += '<h3>Inference</h3>';

  /*
  Note that we didn’t have to specify Type in this sample. 
  The type was inferred - chosen automatically - by TypeScript.

  We can use multiple type parameters as well. 
  For example, a standalone version of map would look like this:

  function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }
  
  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
  const parsed = map(["1", "2", "3"], (n) => parseInt(n));


  Note that in this example, 
  TypeScript could infer both the type of the Input type parameter (from the given string array), 
  as well as the Output type parameter based on the return value of the function expression (number).

  */

  function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }

  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
  const parsed = map(['1', '2', '3'], (n) => parseInt(n));

  sortida += `<code>
  <b>//The type was inferred - chosen automatically - by TypeScript</b><br>
  function map<span class="ressalta">&lt;Input, Output&gt;</span>(arr: Input[], func: (arg: Input) => Output): Output[] {<br>
    &nbsp;return arr.map(func);<br>
  }<br>
  <b>//Parameter 'n' is of type 'string'</b><br>
  <b>//'parsed' is of type 'number[]'</b><br>
  const parsed = map(['1', '2', '3'], (n) => parseInt(n));<br>
  </code>
  `;

  /*
  Constraints
  */

  sortida += '<h3>Constraints</h3>';

  /*
  We’ve written some generic functions that can work on any kind of value. 
  Sometimes we want to relate two values, but can only operate on a certain subset of values. 
  In this case, we can use a constraint to limit the kinds of types that a type parameter can accept.

  Let’s write a function that returns the longer of two values. 
  To do this, we need a length property that’s a number. 
  We constrain the type parameter to that type by writing an 'extends' clause:

  function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
  
  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);
  // longerString is of type 'alice' | 'bob'
  const longerString = longest("alice", "bob");
  // Error! Numbers don't have a 'length' property
  const notOK = longest(10, 100);
  Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

  */
  function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }

  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);
  // longerString is of type 'alice' | 'bob'
  const longerString = longest('alice', 'bob');
  // Error! Numbers don't have a 'length' property
  //const notOK = longest(10, 100);
  //Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

  /*
  There are a few interesting things to note in this example. 
  We allowed TypeScript to infer the return type of longest. 
  Return type inference also works on generic functions.

  Because we constrained Type to { length: number }, we were allowed to access the .length property 
  of the a and b parameters. 
  Without the type constraint, we wouldn’t be able to access those properties because 
  the values might have been some other type without a length property.

  The types of longerArray and longerString were inferred based on the arguments. 
  Remember, generics are all about relating two or more values with the same type!

  Finally, just as we’d like, the call to longest(10, 100) is rejected because 
  the number type doesn’t have a .length property.
  */

  sortida += `<code>
  <b>//constrain Type to { length: number } to access the .length property of the 'a' and 'b' parameters</b><br>
  function longest<span class="ressalta">&lt;Type extends { length: number }&gt;</span>(a: Type, b: Type) {<br>
    &nbsp;if (a.length >= b.length) {<br>
      &nbsp;&nbsp;return a;<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;return b;<br>
    &nbsp;}<br>
  }<br><br>
  const longerArray = longest([1, 2], [1, 2, 3]);<br>
  <b>//longerArray is of type 'number[]'</b><br><br>
  const longerString = longest('alice', 'bob');<br>
  <b>//longerString is of type 'alice' | 'bob'</b><br><br>
  <b>//const notOK = longest(10, 100);</b><br>
  <span class="ressalta">//Error! Numbers don't have a 'length' property</span><br>
  <b>//Argument of type 'number' is not assignable to parameter of type '{ length: number; }'</b><br>
  </code>
  `;

  /*
  Working with Constrained Values


  Here’s a common error when working with generic constraints:

  function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
  ): Type {
    if (obj.length >= minimum) {
      return obj;
    } else {
      return { length: minimum };
  //Type '{ length: number; }' is not assignable to type 'Type'.
  //  '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
    }
  }


  It might look like this function is OK - Type is constrained to { length: number }, 
  and the function either returns Type or a value matching that constraint. 
  
  The problem is that the function promises to return the same kind of object as was passed in, 
  not just some object matching the constraint. 
  If this code were legal, you could write code that definitely wouldn’t work:

  // 'arr' gets value { length: 6 }
  const arr = minimumLength([1, 2, 3], 6);
  // and crashes here because arrays have
  // a 'slice' method, but not the returned object!
  console.log(arr.slice(0));
  */

  /*
  Specifying Type Arguments
  */
  sortida += '<h3>Specifying Type Arguments</h3>';

  /*
  TypeScript can usually infer the intended type arguments in a generic call, but not always. 
  
  For example, let’s say you wrote a function to combine two arrays:

  function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }


  Normally it would be an error to call this function with mismatched arrays:

  const arr = combine([1, 2, 3], ["hello"]);
  Type 'string' is not assignable to type 'number'.

  If you intended to do this, however, you could manually specify Type:

  const arr = combine<string | number>([1, 2, 3], ["hello"]);

  */

  function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }
  //const arr = combine([1, 2, 3], ["hello"]); //error
  //Type 'string' is not assignable to type 'number'.
  const arr = combine<string | number>([1, 2, 3], ['hello']);
  console.log(arr);

  sortida += `<code>
  function combine<span class="ressalta">&lt;Type&gt;</span>(arr1: Type[], arr2: Type[]): Type[] {<br>
    return arr1.concat(arr2);<br>
  }<br><br>
  <b>//TypeScript can usually infer the intended type arguments in a generic call, but not always</b><br>
  <span class="ressalta">//const arr = combine([1, 2, 3], ["hello"]); //error</span><br>
  <b>//Type 'string' is not assignable to type 'number'</b><br><br>
  <b>//if you intended to do this, however, you could manually specify Type</b><br>
  const arr = combine<span class="ressalta">&lt;string | number&gt;</span>([1, 2, 3], ["hello"]);<br>
  </code>
  `;

  /*
  Guidelines for Writing Good Generic Functions
  */

  sortida += '<h3>Guidelines for Writing Good Generic Functions</h3>';

  /*
  Writing generic functions is fun, and it can be easy to get carried away with type parameters. 
  Having too many type parameters or using constraints where they aren’t needed can make inference 
  less successful, frustrating callers of your function.
  
  Push Type Parameters Down
  */

  sortida += '<h4>1. Push Type Parameters Down</h4>';

  /*
  Here are two ways of writing a function that appear similar:

  function firstElement1<Type>(arr: Type[]) {
    return arr[0];
  }
  
  function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
  }
  
  // a: number (good)
  const a = firstElement1([1, 2, 3]);
  // b: any (bad)
  const b = firstElement2([1, 2, 3]);

  These might seem identical at first glance, but firstElement1 is a much better way 
  to write this function. 
  Its inferred return type is Type, but firstElement2’s inferred return type is any 
  because TypeScript has to resolve the arr[0] expression using the constraint type, 
  rather than “waiting” to resolve the element during a call.

  Rule: When possible, use the type parameter itself rather than constraining it

  */
  //Rule: When possible, use the type parameter itself rather than constraining it
  //good
  function firstElement1<Type>(arr: Type[]) {
    return arr[0];
  }
  //bad
  function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
  }

  // a: number (good)
  const a = firstElement1([1, 2, 3]);
  // b: any (bad)
  const b = firstElement2([1, 2, 3]);

  sortida += `<code>
  <span class="ressalta">//Rule: When possible, use the type parameter itself rather than constraining it</span><br>
  <b>//good</b><br>
  function firstElement1<span class="ressalta">&lt;Type&gt;</span>(arr: Type[]) {<br>
    &nbsp;return arr[0];<br>
  }<br><br>
  <b>//bad</b><br>
  function firstElement2<span class="ressalta">&lt;Type extends any[]&gt;</span>(arr: Type) {<br>
    return arr[0];<br>
  }<br><br>
  const a = firstElement1([1, 2, 3]);<br>
  <b>//a: number (good)</b><br>
  const b = firstElement2([1, 2, 3]);<br>
  <b>//b: any (bad)</b><br>
  </code>
  `;

  /*
  Use Fewer Type Parameters
  */

  sortida += '<h4>2. Use Fewer Type Parameters</h4>';

  /*
  Here’s another pair of similar functions:

  function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
  }
  
  function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
  ): Type[] {
    return arr.filter(func);
  }
  
  We’ve created a type parameter Func that doesn’t relate two values. 
  That’s always a red flag, because it means callers wanting to specify type arguments have to manually 
  specify an extra type argument for no reason. 
  Func doesn’t do anything but make the function harder to read and reason about!

  Rule: Always use as few type parameters as possible
  */

  function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
  }

  function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
    return arr.filter(func);
  }

  sortida += `<code>
  <span class="ressalta">//Rule: Always use as few type parameters as possible</span><br>
  function filter1<span class="ressalta">&lt;Type&gt;</span>(arr: Type[], func: (arg: Type) => boolean): Type[] {<br>
    &nbsp;return arr.filter(func);<br>
  }<br><br>  
  function filter2<span class="ressalta">&lt;Type, Func extends (arg: Type) => boolean&gt;</span>(<br>
    &nbsp;arr: Type[],<br>
    &nbsp;func: Func<br>
  ): Type[] {<br>
    &nbsp;return arr.filter(func);<br>
  }<br>
  </code>
  `;

  /*
  Type Parameters Should Appear Twice
  */

  sortida += '<h4>3. Type Parameters Should Appear Twice</h4>';
  /*
  Sometimes we forget that a function might not need to be generic:

  function greet<Str extends string>(s: Str) {
    console.log("Hello, " + s);
  }
  greet("world");
  
  We could just as easily have written a simpler version:

  function greet(s: string) {
    console.log("Hello, " + s);
  }

  Remember, type parameters are for relating the types of multiple values. 
  If a type parameter is only used once in the function signature, it’s not relating anything. 
  This includes the inferred return type; 
  for example, if Str was part of the inferred return type of greet, 
  it would be relating the argument and return types, 
  so would be used twice despite appearing only once in the written code.

  Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it
  */

  //Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it
  //Sometimes we forget that a function might not need to be generic
  function greet1<Str extends string>(s: Str) {
    console.log('Hello, ' + s);
  }
  greet1('world');

  //We could just as easily have written a simpler version
  function greet2(s: string) {
    console.log('Hello, ' + s);
  }
  greet2('world');

  sortida += `<code>
  <span class="ressalta">//Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it</span><br>
  <b>//Sometimes we forget that a function might not need to be generic</b><br>
  function greet1<span class="ressalta">&lt;Str extends string&gt;</span>(s: Str) {<br>
    &nbsp;console.log("Hello, " + s);<br>
  }<br>
  greet1("world");<br><br>  
  <span class="ressalta">//We could just as easily have written a simpler version</span><br>
  function greet2(s: string) {<br>
    &nbsp;console.log("Hello, " + s);<br>
  }<br>
  greet2("world");<br>
  </code>
  `;

  return sortida;
};

const optionalParameters = () => {
  /*
  Optional Parameters
  */
  let sortida = '<h2>Optional Parameters</h2>';

  /*
  Functions in JavaScript often take a variable number of arguments. 
  
  For example, the toFixed method of number takes an optional digit count:

  function f(n: number) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
  }
  
  We can model this in TypeScript by marking the parameter as optional with ?:

  function f(x?: number) {
    // ...
  }
  f(); // OK
  f(10); // OK


  Although the parameter is specified as type number, 
  the x parameter will actually have the type number | undefined 
  because unspecified parameters in JavaScript get the value undefined.

  You can also provide a parameter default:

  function f(x = 10) {
    // ...
  }

  
  Now in the body of f, x will have type number because 
  any undefined argument will be replaced with 10. 
  
  Note that when a parameter is optional, callers can always pass undefined, 
  as this simply simulates a “missing” argument:

  declare function f(x?: number): void;
  // cut
  // All OK
  f();
  f(10);
  f(undefined);

  */

  const f = (n?: number, d: number = 1): void => {
    if (n) {
      console.log(n.toFixed(d)); // 1 argument
    }
  };

  f(); // OK
  f(10); // OK
  f(10.2536587);
  f(10.2536587, 3);
  f(undefined);

  sortida += `<code>
  <span class="ressalta">//We can model this in TypeScript by marking the parameter as optional with (?)</span><br>
  <b>//the x parameter will have the type number | undefined</b><br> 
  function f(x<span class="ressalta">?</span>: number) {<br>
    &nbsp;// ...<br>
  }<br><br>
  f(); // OK<br>
  f(10); // OK<br>
  f(undefined); //OK<br>
  <b>//Note that when a parameter is optional, callers can always pass undefined, as this simply simulates a “missing” argument</b><br>
  </code>
  `;

  sortida += `<code>
  <span class="ressalta">//You can also provide a parameter default</span><br>
  function f(<span class="ressalta">x = 10</span>) {<br>
    &nbsp;// ...<br>
  }<br>
  </code>
  `;

  /*
  Optional Parameters in Callbacks
  */
  sortida += '<h3>Optional Parameters in Callbacks</h3>';

  /*
  Once you’ve learned about optional parameters and function type expressions, 
  it’s very easy to make the following mistakes when writing functions that invoke callbacks:

  function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }

  What people usually intend when writing index? as an optional parameter 
  is that they want both of these calls to be legal:

  myForEach([1, 2, 3], (a) => console.log(a));
  myForEach([1, 2, 3], (a, i) => console.log(a, i));

  What this actually means is that callback might get invoked with one argument. 
  In other words, the function definition says that the implementation might look like this:
  
  function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      // I don't feel like providing the index today
      callback(arr[i]);
    }
  }

  In turn, TypeScript will enforce this meaning and issue errors that aren’t really possible:

  myForEach([1, 2, 3], (a, i) => {
    console.log(i.toFixed());
  'i' is possibly 'undefined'.
  });


  In JavaScript, if you call a function with more arguments than there are parameters, 
  the extra arguments are simply ignored. 
  TypeScript behaves the same way. 
  Functions with fewer parameters (of the same types) 
  can always take the place of functions with more parameters.

  Rule: When writing a function type for a callback, 
  never write an optional parameter unless you intend to call the function without passing that argument

  */

  function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }

  myForEach([1, 2, 3], (a) => console.log(a));
  myForEach([1, 2, 3], (a, i) => console.log(a, i));
  myForEach([1, 2, 3], (a, i) => {
    console.log(i.toFixed());
  });

  sortida += `<code>
  <span class="ressalta">//Rule: When writing a function type for a callback,<br>
  //never write an optional parameter unless you intend to call the function without passing that argument</span><br>
  function myForEach(arr: any[], callback: (arg: any, <span class="ressalta">index?</span>: number) => void) { <span class="ressalta">//treure opcional (?)</span><br>
    &nbsp;for (let i = 0; i < arr.length; i++) {<br>
      &nbsp;&nbsp;callback(arr[i], i);<br>
    &nbsp;}<br>
  }<br><br>
  myForEach([1, 2, 3], (a) => console.log(a));<br>
  myForEach([1, 2, 3], (a, i) => console.log(a, i));<br>
  myForEach([1, 2, 3], (a, i) => {<br>
    &nbsp;console.log(i.toFixed());<br>
    &nbsp;<b>//error si index és opcional (index?)</b><br>
  });<br>
  </code>
  `;

  return sortida;
};

const functionOverloads = () => {
  /*
  Function Overloads
  */
  let sortida = '<h2>Function Overloads</h2>';

  /*
  Some JavaScript functions can be called in a variety of argument counts and types. 
  For example, you might write a function to produce a Date that takes either a timestamp (one argument) 
  or a month/day/year specification (three arguments).

  In TypeScript, we can specify a function that can be called in different ways 
  by writing overload signatures. 
  To do this, write some number of function signatures (usually two or more), 
  followed by the body of the function:

  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  const d3 = makeDate(1, 3);
  No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.


  In this example, we wrote two overloads: one accepting one argument, and another accepting three arguments. These first two signatures are called the overload signatures.

  Then, we wrote a function implementation with a compatible signature. 
  Functions have an implementation signature, but this signature can’t be called directly. 
  Even though we wrote a function with two optional parameters after the required one, 
  it can’t be called with two parameters!

  */

  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  //const d3 = makeDate(1, 3); //error
  //No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
  console.log(d1);
  console.log(d2);

  sortida += `<code>
  <b>//In TypeScript, we can specify a function that can be called in different ways by writing overload signatures</b><br>
  function <b>makeDate</b>(timestamp: number): Date;<br>
  function <b>makeDate</b>(m: number, d: number, y: number): Date;<br>
  function <b>makeDate</b>(mOrTimestamp: number, d?: number, y?: number): Date {<br>
    &nbsp;if (d !== undefined && y !== undefined) {<br>
      &nbsp;&nbsp;return new Date(y, mOrTimestamp, d);<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;return new Date(mOrTimestamp);<br>
    &nbsp;}<br>
  }<br><br>
  const d1 = <b>makeDate(12345678);</b><br>
  const d2 = <b>makeDate(5, 5, 5);</b><br>
  <span class="ressalta">//const d3 = makeDate(1, 3); //error<br>
  //No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.</span><br>
  </code>
  `;

  /*
  Overload Signatures and the Implementation Signature
  */

  sortida += '<h3>Overload Signatures and the Implementation Signature</h3>';

  /*
  This is a common source of confusion. 
  Often people will write code like this and not understand why there is an error:

  function fn(x: string): void;
  function fn() {
    // ...
  }
  // Expected to be able to call with zero arguments
  fn();
  Expected 1 arguments, but got 0.
  

  Again, the signature used to write the function body can’t be “seen” from the outside.

  The signature of the implementation is not visible from the outside. 
  When writing an overloaded function, you should always have two or more signatures above 
  the implementation of the function.

  The implementation signature must also be compatible with the overload signatures. 
  
  For example, these functions have errors because the implementation signature 
  doesn’t match the overloads in a correct way:

  function fn(x: boolean): void;
  // Argument type isn't right
  function fn(x: string): void;
  This overload signature is not compatible with its implementation signature.
  function fn(x: boolean) {}

  function fn(x: string): string;
  // Return type isn't right
  function fn(x: number): boolean;
  This overload signature is not compatible with its implementation signature.
  function fn(x: string | number) {
    return "oops";
  
  */

  sortida += `<code>
    <span class="ressalta">//The signature of the implementation is not visible from the outside<br>
    When writing an overloaded function, you should always have two or more signatures above the implementation of the function</span><br>
    function fn(x: string): void;<br>
    function fn() {<br>
      // ...<br>
    }<br>
    <span class="ressalta">//fn(); // Expected to be able to call with zero arguments<br>
    //Expected 1 arguments, but got 0</span><br>
  </code>
  `;

  sortida += `<code>
  <span class="ressalta">//The implementation signature must also be compatible with the overload signatures</span><br>
  function fn(x: boolean): void;<br><br>
  <span class="ressalta">//function fn(x: string): void;<br>
  //Argument type isn't right</span><br>
  <b>//This overload signature is not compatible with its implementation signature.</b><br><br>
  function fn(x: boolean) {}<br>
  </code>
`;

  sortida += `<code>
  <span class="ressalta">//The implementation signature must also be compatible with the overload signatures</span><br>
  function fn(x: string): string;<br><br>
  <span class="ressalta">//function fn(x: number): boolean;<br>
  //Return type isn't right</span><br>
  <b>This overload signature is not compatible with its implementation signature.</b><br><br>
  function fn(x: string | number) {<br>
    &nbsp;return "oops";<br>
  }<br>
</code>
`;

  /*
  Writing Good Overloads
  */

  sortida += '<h3>Writing Good Overloads</h3>';

  /*
  Like generics, there are a few guidelines you should follow when using function overloads. 
  Following these principles will make your function easier to call, easier to understand, 
  and easier to implement.

  Let’s consider a function that returns the length of a string or an array:

  function len(s: string): number;
  function len(arr: any[]): number;
  function len(x: any) {
    return x.length;
  }

  This function is fine; 
  we can invoke it with strings or arrays. 
  However, we can’t invoke it with a value that might be a string or an array, 
  because TypeScript can only resolve a function call to a single overload:

  len(""); // OK
  len([0]); // OK
  len(Math.random() > 0.5 ? "hello" : [0]);
  No overload matches this call.
    Overload 1 of 2, '(s: string): number', gave the following error.
      Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
        Type 'number[]' is not assignable to type 'string'.
    Overload 2 of 2, '(arr: any[]): number', gave the following error.
      Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
        Type 'string' is not assignable to type 'any[]'.


  Because both overloads have the same argument count and same return type, 
  we can instead write a non-overloaded version of the function:

  function len(x: any[] | string) {
    return x.length;
  }

  This is much better!
  Callers can invoke this with either sort of value, and as an added bonus, 
  we don’t have to figure out a correct implementation signature.

  Always prefer parameters with union types instead of overloads when possible

  */

  sortida += `<code>
  <span class="ressalta">//Always prefer parameters with union types instead of overloads when possible<br>
  //make your function easier to call, easier to understand, and easier to implement.</span><br>
  function len(x: any[] | string) {<br>
    &nbsp;return x.length;<br>
  }<br>
  </code>
  `;

  sortida += `<code>
  <span class="ressalta">//bad</span><br>
  function len(s: string): number;<br>
  function len(arr: any[]): number;<br>
  function len(x: any) {<br>
    &nbsp;return x.length;<br>
  }<br><br>
  len(""); // OK<br>
  len([0]); // OK<br>
  <span class="ressalta">len(Math.random() > 0.5 ? "hello" : [0]); //ERRORS</span><br>
  No overload matches this call<br>
    &nbsp;...<br>
  </code>
  `;

  /*
  Declaring this in a Function
  

  TypeScript will infer what the 'this' should be in a function via code flow analysis, 
  for example in the following:

  const user = {
    id: 123,
  
    admin: false,
    becomeAdmin: function () {
      this.admin = true;
    },
  };

  TypeScript understands that the function user.becomeAdmin has a corresponding 'this'
  which is the outer object user. 
  this, heh, can be enough for a lot of cases, but there are a lot of cases 
  where you need more control over what object this represents. 
  The JavaScript specification states that you cannot have a parameter called this, 
  and so TypeScript uses that syntax space to let you declare the type for this in the function body.


  interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
  }
  
  const db = getDB();
  const admins = db.filterUsers(function (this: User) {
    return this.admin;
  });



  This pattern is common with callback-style APIs, 
  where another object typically controls when your function is called. 
 
  Note that you need to use function and not arrow functions to get this behavior:

  interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }
  
  const db = getDB();
  const admins = db.filterUsers(() => this.admin);
  The containing arrow function captures the global value of 'this'.
  Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.

  */

  return sortida;
};

const otherTypes = () => {
  /*
  Other Types to Know About
  */

  let sortida = '<h2>Other Types to Know About</h2>';

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
  sortida.innerHTML += functionTypeExpressions();
  sortida.innerHTML += callSignatures();
  sortida.innerHTML += constructSignatures();
  sortida.innerHTML += genericFunctions();
  sortida.innerHTML += optionalParameters();
  sortida.innerHTML += functionOverloads();
  sortida.innerHTML += otherTypes();
}
