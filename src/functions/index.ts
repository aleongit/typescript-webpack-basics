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

  <mark>//funció que requereix com a primer paràmetre una altra funció amb un argument string</mark><br>
  function greeter(<mark>fn: (a: string) => void)</mark> {<br>
    &nbsp;fn('Hello, World');<br>
  }<br>
  <b>//The syntax (a: string) => void means</b><br>
  <b>//= a function with one parameter (a) of type string, that doesn't have a return value</b><br><br>
  //<mark>funció que cumpleix amb el paràmetre de l'anterior funció</mark><br>
  function printToConsole(s: string) {<br>
    &nbsp;console.log(s);<br>
  }<br><br>
  <mark>//pas de funció com a paràmetre<br>
  greeter(printToConsole);<br>
</code>
`;

  sortida += `<code>
  <mark>//Of course, we can use a type alias to name a function type:</mark><br>
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
    <mark>&nbsp;description: string;<br>
    &nbsp;(someArg: number): boolean;</mark><br>
  };<br>
  <b>//Note that the syntax is slightly different compared to a function type expression</b><br>
  <b>//use : between the parameter list and the return type rather than =></b><br><br>
  function doSomething(fn: DescribableFunction) {<br>
    &nbsp;console.log(fn.description + ' returned ' + fn(6));<br>
  }<br><br>
  function myFunc(someArg: number) {<br>
    &nbsp;return someArg > 3;<br>
  }<br><br>
  <mark>myFunc.description = 'default description';</mark><br><br>
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
    <mark>&nbsp;new (s: string): SomeObject;</mark><br>
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
function firstElement<mark>&lt;Type&gt;</mark>(arr: <b>Type[]</b>): <b>Type</b> | undefined {<br>
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
  function map<mark>&lt;Input, Output&gt;</mark>(arr: Input[], func: (arg: Input) => Output): Output[] {<br>
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
  function longest<mark>&lt;Type extends { length: number }&gt;</mark>(a: Type, b: Type) {<br>
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
  <mark>//Error! Numbers don't have a 'length' property</mark><br>
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
  function combine<mark>&lt;Type&gt;</mark>(arr1: Type[], arr2: Type[]): Type[] {<br>
    return arr1.concat(arr2);<br>
  }<br><br>
  <b>//TypeScript can usually infer the intended type arguments in a generic call, but not always</b><br>
  <mark>//const arr = combine([1, 2, 3], ["hello"]); //error</mark><br>
  <b>//Type 'string' is not assignable to type 'number'</b><br><br>
  <b>//if you intended to do this, however, you could manually specify Type</b><br>
  const arr = combine<mark>&lt;string | number&gt;</mark>([1, 2, 3], ["hello"]);<br>
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
  <mark>//Rule: When possible, use the type parameter itself rather than constraining it</mark><br>
  <b>//good</b><br>
  function firstElement1<mark>&lt;Type&gt;</mark>(arr: Type[]) {<br>
    &nbsp;return arr[0];<br>
  }<br><br>
  <b>//bad</b><br>
  function firstElement2<mark>&lt;Type extends any[]&gt;</mark>(arr: Type) {<br>
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
  <mark>//Rule: Always use as few type parameters as possible</mark><br>
  function filter1<mark>&lt;Type&gt;</mark>(arr: Type[], func: (arg: Type) => boolean): Type[] {<br>
    &nbsp;return arr.filter(func);<br>
  }<br><br>  
  function filter2<mark>&lt;Type, Func extends (arg: Type) => boolean&gt;</mark>(<br>
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
  <mark>//Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it</mark><br>
  <b>//Sometimes we forget that a function might not need to be generic</b><br>
  function greet1<mark>&lt;Str extends string&gt;</mark>(s: Str) {<br>
    &nbsp;console.log("Hello, " + s);<br>
  }<br>
  greet1("world");<br><br>  
  <mark>//We could just as easily have written a simpler version</mark><br>
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
  <mark>//We can model this in TypeScript by marking the parameter as optional with (?)</mark><br>
  <b>//the x parameter will have the type number | undefined</b><br> 
  function f(x<mark>?</mark>: number) {<br>
    &nbsp;// ...<br>
  }<br><br>
  f(); // OK<br>
  f(10); // OK<br>
  f(undefined); //OK<br>
  <b>//Note that when a parameter is optional, callers can always pass undefined, as this simply simulates a “missing” argument</b><br>
  </code>
  `;

  sortida += `<code>
  <mark>//You can also provide a parameter default</mark><br>
  function f(<mark>x = 10</mark>) {<br>
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
  <mark>//Rule: When writing a function type for a callback,<br>
  //never write an optional parameter unless you intend to call the function without passing that argument</mark><br>
  function myForEach(arr: any[], callback: (arg: any, <mark>index?</mark>: number) => void) { <mark>//treure opcional (?)</mark><br>
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
  <mark>//const d3 = makeDate(1, 3); //error<br>
  //No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.</mark><br>
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
    <mark>//The signature of the implementation is not visible from the outside<br>
    When writing an overloaded function, you should always have two or more signatures above the implementation of the function</mark><br>
    function fn(x: string): void;<br>
    function fn() {<br>
      // ...<br>
    }<br>
    <mark>//fn(); // Expected to be able to call with zero arguments<br>
    //Expected 1 arguments, but got 0</mark><br>
  </code>
  `;

  sortida += `<code>
  <mark>//The implementation signature must also be compatible with the overload signatures</mark><br>
  function fn(x: boolean): void;<br><br>
  <mark>//function fn(x: string): void;<br>
  //Argument type isn't right</mark><br>
  <b>//This overload signature is not compatible with its implementation signature.</b><br><br>
  function fn(x: boolean) {}<br>
  </code>
`;

  sortida += `<code>
  <mark>//The implementation signature must also be compatible with the overload signatures</mark><br>
  function fn(x: string): string;<br><br>
  <mark>//function fn(x: number): boolean;<br>
  //Return type isn't right</mark><br>
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
  <mark>//Always prefer parameters with union types instead of overloads when possible<br>
  //make your function easier to call, easier to understand, and easier to implement.</mark><br>
  function len(x: any[] | string) {<br>
    &nbsp;return x.length;<br>
  }<br>
  </code>
  `;

  sortida += `<code>
  <mark>//bad</mark><br>
  function len(s: string): number;<br>
  function len(arr: any[]): number;<br>
  function len(x: any) {<br>
    &nbsp;return x.length;<br>
  }<br><br>
  len(""); // OK<br>
  len([0]); // OK<br>
  <mark>len(Math.random() > 0.5 ? "hello" : [0]); //ERRORS</mark><br>
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
  There are some additional types you’ll want to recognize
  that appear often when working with function types. 
  Like all types, you can use them everywhere,
  but these are especially relevant in the context of functions.
  
  void
  
  */
  sortida += '<h3>void</h3>';

  /*
  void represents the return value of functions which don’t return a value. 
  It’s the inferred type any time a function doesn’t have any return statements, 
  or doesn’t return any explicit value from those return statements:

  // The inferred return type is void
  function noop() {
    return;
  }

  In JavaScript, a function that doesn’t return any value will implicitly return the value undefined.
  However, void and undefined are not the same thing in TypeScript. 
  There are further details at the end of this chapter.

  void is not the same as undefined.
  */

  // The inferred return type is void
  function noop() {
    return;
  }

  const esVoid1 = () => console.log('void!');
  const esVoid2 = (): void => console.log('void!');
  console.log(esVoid1);
  console.log(esVoid2);

  sortida += `<code>
  <b>//The inferred return type is void</b><br>
  <b>//void is not the same as undefined</b><br>
  function noop() {<br>
    &nbsp;return;<br>
  }<br><br>
  const esVoid1 = () => console.log('void!')<br>
  const esVoid2 = ():void => console.log('void!')<br>
  </code>
`;

  /*
object
*/
  sortida += '<h3>object</h3>';

  /*

  The special type object refers to any value that isn’t a primitive 
  (string, number, bigint, boolean, symbol, null, or undefined). 
  
  This is different from the empty object type { }, and also different from the global type Object. 
  It’s very likely you will never use Object.

  object is not Object. Always use object!

  Note that in JavaScript, function values are objects: 
  They have properties, have Object.prototype in their prototype chain, 
  are instanceof Object, you can call Object.keys on them, and so on. 
  For this reason, function types are considered to be objects in TypeScript.
  */
  const obj1 = {};
  const obj2 = { nom: 'Pepet', cognom: 'Vilallonga' };
  const arra = [];
  const func1 = () => console.log('function is object!');
  function func2(fn: (a: string) => void) {
    fn('Hello, World');
  }

  const objects = [obj1, obj2, arra, func1, func2];
  console.log(objects);

  sortida += `<code>
  <mark>//The special type object refers to any value that isn't a primitive</mark><br>
  <b>//(string, number, bigint, boolean, symbol, null, or undefined)<br>
  //This is different from the empty object type { },<br>
  //and also different from the global type Object.<br>
  //object is not Object. Always use object!</b><br>
  const obj1 = {};<br>
  const obj2 = { nom: 'Pepet', cognom: 'Vilallonga' };<br>
  const arra = [];<br>
  const func1 = () => console.log('function is object!');<br>
  function func2(fn: (a: string) => void) {<br>
    &nbsp;fn('Hello, World');<br>
  }<br>
  const objects = [obj1, obj2, arra, func1, func2];<br>
  ${objects
    .map((obj, i) => {
      return `variable ${i} és typeof ${typeof obj} i instanceof Object ${obj instanceof Object}`;
    })
    .join('<br>')}<br>
  </code>
  `;

  /*
  unknown
  */
  sortida += '<h3>unknown</h3>';

  /*
  The unknown type represents any value. 
  This is similar to the any type, 
  but is safer because it’s not legal to do anything with an unknown value:

  function f1(a: any) {
    a.b(); // OK
  }
  function f2(a: unknown) {
    a.b();
  'a' is of type 'unknown'.
  }
  */

  function f1(a: any) {
    a.b(); // OK
  }
  function f2(a: unknown) {
    // a.b();
    //'a' is of type 'unknown'.
  }

  sortida += `<code>
  <b>//The unknown type represents any value. This is similar to the any type,<br>
  //but is safer because it's not legal to do anything with an unknown value.</b><br>
  function f1(a: any) {<br>
    &nbsp;a.b(); // OK<br>
  }<br>
  function f2(a: <mark>unknown</mark>) {<br>
    &nbsp;//a.b();<br>
    &nbsp;//'a' is of type 'unknown'.<br>
  }<br>
  </code>
  `;

  /*
  This is useful when describing function types because you can describe functions 
  that accept any value without having any values in your function body.

  Conversely, you can describe a function that returns a value of unknown type:

  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }
  
  // Need to be careful with 'obj'!
  const obj = safeParse(someRandomString);
  */

  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }
  const jsonString = '{"result":true, "count":42}';
  // Need to be careful with 'obj'!
  const obj = safeParse(jsonString);
  console.log(obj);

  sortida += `<code>
  <b>//useful because you can describe functions<br>
  //that accept any value without having 'any' values in your function body</b><br>
  function safeParse(s: string): <mark>unknown</mark> {<br>
    &nbsp;return JSON.parse(s);<br>
  }<br>
  const jsonString = '{"result":true, "count":42}';<br>
  // Need to be careful with 'obj'!<br>
  const obj = safeParse(jsonString);<br>
  </code>
  `;

  /*
  never
  */
  sortida += '<h3>never</h3>';

  /*

  Some functions never return a value:

  function fail(msg: string): never {
    throw new Error(msg);
  }

  The never type represents values which are never observed. 
  In a return type, this means that the function throws an exception 
  or terminates execution of the program.

  */

  function fail(msg: string): never {
    throw new Error(msg);
  }
  //fail('fatal error!');

  sortida += `<code>
  <b>//The never type represents values which are never observed<br>
  //In a return type, this means that the function throws an exception<br> 
  //or terminates execution of the program</b><br>
  function fail(msg: string): <mark>never</mark> {<br>
    &nbsp;throw new Error(msg);<br>
  }<br>
  //fail('fatal error!');<br>
  </code>
  `;

  /*
  never also appears when TypeScript determines there’s nothing left in a union.

  function fn(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }
  */

  function fn(x: string | number) {
    if (typeof x === 'string') {
      // do something
    } else if (typeof x === 'number') {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }

  sortida += `<code>
  <b>//never also appears when TypeScript determines there’s nothing left in a union</b><br>
  function fn(x: string | number) {<br>
    &nbsp;if (typeof x === 'string') {<br>
      &nbsp;&nbsp;// do something<br>
    &nbsp;} else if (typeof x === 'number') {<br>
      &nbsp;&nbsp;// do something else<br>
    &nbsp;} else {<br>
      &nbsp;&nbsp;<mark>x; // has type 'never'!</mark><br>
    &nbsp;}<br>
  }<br>
  </code>
  `;

  /*
  Function
  */

  sortida += '<h3>Function</h3>';

  /*
  The global type Function describes properties like bind, call, apply, and others 
  present on all function values in JavaScript. 
  It also has the special property that values of type Function can always be called; 
  these calls return any:

  function doSomething(f: Function) {
    return f(1, 2, 3);
  }
  
  This is an untyped function call and is generally best avoided because of the unsafe any return type.

  If you need to accept an arbitrary function but don’t intend to call it, 
  the type () => void is generally safer.
  */

  function doSomething(f: Function) {
    return f(1, 2, 3);
  }

  //filtra noms que comencen per P
  const filtrarNomsP = (arr: string[]): string[] => {
    return arr.filter((nom) => nom[0].toUpperCase() == 'P');
  };
  const noms = ['Pepet', 'Pepito', 'Pepeta', 'Josepeta', 'Pepa'];
  //let resultat: Function;  //Function retorna sempre any
  let resultat: (arr: string[]) => string[]; //així seria més segur
  resultat = filtrarNomsP;
  console.log(resultat(noms));

  sortida += `<code>
  <b>//tipus que admet una funció javascript i amb les seves propietats<br>
  //sempre retorna 'any'<br>
  //generalment serà més segur amb el tipus () => void</b><br>
  function doSomething(f: <mark>Function</mark>) {<br>
    &nbsp;return f(1, 2, 3);<br>
  }<br>
  </code>
  `;
  sortida += `<code>
  //funció que filtra noms que comencen per P<br>
  const filtrarNomsP = (arr: string[]): string[] => {<br>
    &nbsp;return arr.filter((nom) => nom[0].toUpperCase() == 'P');<br>
  };<br>
  const noms = ['Pepet', 'Pepito', 'Pepeta', 'Josepeta', 'Pepa'];<br>
  <mark>//let resultat: Function;  //Function retorna sempre any<br>
  let resultat: (arr: string[]) => string[]; //així seria més segur</mark><br>
  resultat = filtrarNomsP;<br>
  </code>
  `;

  return sortida;
};

const restParametersArguments = () => {
  /*
  Rest Parameters and Arguments
  */
  let sortida = '<h2>Rest Parameters and Arguments</h2>';

  /*
  Rest Parameters
  */
  sortida += '<h3>Rest Parameters</h3>';

  /*

  In addition to using optional parameters or overloads to make functions that can accept 
  a variety of fixed argument counts, 
  we can also define functions that take an unbounded number of arguments using rest parameters.

  A rest parameter appears after all other parameters, and uses the ... syntax:

  function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  // 'a' gets value [10, 20, 30, 40]
  const a = multiply(10, 1, 2, 3, 4);

  In TypeScript, the type annotation on these parameters is implicitly any[] instead of any, 
  and any type annotation given must be of the form Array<T> or T[], 
  or a tuple type (which we’ll learn about later).

  */

  function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }

  const a = multiply(10, 1, 2, 3, 4);
  // 'a' gets value [10, 20, 30, 40]
  console.log(a);

  sortida += `<code>
  <b>//A rest parameter appears after all other parameters, and uses the <mark>...</mark> syntax<br>
  //the type annotation on these parameters is implicitly any[]<br>
  //and any type annotation given must be of the form Array<T> or T[]</b><br>
  function multiply(n: number, <mark>...m: number[]</mark>) {<br>
    &nbsp;return m.map((x) => n * x);<br>
  }<br>
  const a = multiply(10, 1, 2, 3, 4);<br>
  // 'a' gets value [10, 20, 30, 40]<br>
  </code>
`;

  /*
  Rest Arguments
  */
  sortida += '<h3>Rest Arguments</h3>';

  /*
  Conversely, we can provide a variable number of arguments from an iterable object 
  (for example, an array) using the spread syntax. 
  For example, the push method of arrays takes any number of arguments:

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  arr1.push(...arr2);
  */
  const arr1 = [1, 2, 3];
  console.log(arr1);
  const arr2 = [4, 5, 6];
  console.log(arr2);
  arr1.push(...arr2);
  console.log(arr1);

  sortida += `<code>
  <b>//Conversely, we can provide a variable number of arguments from an iterable object<br> 
  //(for example, an array) using the spread syntax</b><br>
  const arr1 = [1, 2, 3];<br>
  const arr2 = [4, 5, 6];<br>
  arr1.push(<mark>...arr2</mark>);<br>
  </code>
`;

  /*
  Note that in general, TypeScript does not assume that arrays are immutable. 
  This can lead to some surprising behavior:

  // Inferred type is number[] -- "an array with zero or more numbers",
  // not specifically two numbers
  const args = [8, 5];
  const angle = Math.atan2(...args);
  A spread argument must either have a tuple type or be passed to a rest parameter.

  The best fix for this situation depends a bit on your code, but in general a const context is the most straightforward solution:

  // Inferred as 2-length tuple
  const args = [8, 5] as const;
  // OK
  const angle = Math.atan2(...args);
  
  Using rest arguments may require turning on downlevelIteration when targeting older runtimes.

  */

  return sortida;
};

const parameterDestructuring = () => {
  /*
  Parameter Destructuring
  */

  let sortida = '<h2>Parameter Destructuring</h2>';

  /*
  You can use parameter destructuring to conveniently unpack objects provided as 
  an argument into one or more local variables in the function body. 
  
  In JavaScript, it looks like this:

  function sum({ a, b, c }) {
    console.log(a + b + c);
  }
  sum({ a: 10, b: 3, c: 9 });
  
  
  The type annotation for the object goes after the destructuring syntax:

  function sum({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
  }
  
  This can look a bit verbose, but you can use a named type here as well:

  // Same as prior example
  type ABC = { a: number; b: number; c: number };
  function sum({ a, b, c }: ABC) {
    console.log(a + b + c);
  }
  */

  //In JavaScript, it looks like this:
  function sum1({ a, b, c }) {
    console.log(a + b + c);
  }
  sum1({ a: 10, b: 3, c: 9 });

  //The type annotation for the object goes after the destructuring syntax:
  function sum2({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
  }
  sum2({ a: 10, b: 3, c: 9 });

  //This can look a bit verbose, but you can use a named type here as well:
  // Same as prior example
  type ABC = { a: number; b: number; c: number };
  function sum3({ a, b, c }: ABC) {
    console.log(a + b + c);
  }
  sum3({ a: 10, b: 3, c: 9 });

  sortida += `<code>
  <b>//In JavaScript, it looks like this</b><br>
  function sum1({ a, b, c }) {<br>
    &nbsp;console.log(a + b + c);<br>
  }<br>
  sum1({ a: 10, b: 3, c: 9 });<br><br>
  <b>//The type annotation for the object goes after the destructuring syntax</b><br>
  function sum2({ a, b, c }: { a: number; b: number; c: number }) {<br>
    &nbsp;console.log(a + b + c);<br>
  }<br><br>
  <mark>//This can look a bit verbose, but you can use a named type here as well<br>
  //Same as prior example</mark><br>
  type ABC = { a: number; b: number; c: number };<br>
  function sum3({ a, b, c }: ABC) {<br>
    &nbsp;console.log(a + b + c);<br>
  }<br>
  </code>
`;

  return sortida;
};

const assignabilityFunctions = () => {
  
  /*
  Assignability of Functions
  */
  let sortida = '<h2>Assignability of Functions</h2>';

  /*
  Return type void
  */
  sortida += '<h3>Return type void</h3>';

  /*
  The void return type for functions can produce some unusual, but expected behavior.

  Contextual typing with a return type of void does not force functions to not return something. 
  
  Another way to say this is a contextual function type with a void return type 
  (type voidFunc = () => void), when implemented, can return any other value, but it will be ignored.

  Thus, the following implementations of the type () => void are valid:


  type voidFunc = () => void;
 
  const f1: voidFunc = () => {
    return true;
  };
  
  const f2: voidFunc = () => true;
  
  const f3: voidFunc = function () {
    return true;
  };


  And when the return value of one of these functions is assigned to another variable, 
  it will retain the type of void:

  const v1 = f1();
  const v2 = f2();
  const v3 = f3();

  This behavior exists so that the following code is valid even 
  though Array.prototype.push returns a number and the Array.prototype.forEach 
  method expects a function with a return type of void.

  const src = [1, 2, 3];
  const dst = [0];
  
  src.forEach((el) => dst.push(el));


  There is one other special case to be aware of, when a literal function definition has a void return type, that function must not return anything.

  function f2(): void {
    // @ts-expect-error
    return true;
  }
  
  const f3 = function (): void {
    // @ts-expect-error
    return true;
  };
  
  */

  type voidFunc = () => void;
  const f1: voidFunc = () => {
    return true;
  };
  const f2: voidFunc = () => true;
  const f3: voidFunc = function () {
    return true;
  };

  const v1 = f1();
  const v2 = f2();
  const v3 = f3();

  const src = [1, 2, 3];
  const dst = [0];
  const returnVoid = src.forEach((el) => dst.push(el));

  function f4(): void {
    // @ts-expect-error
    return true;
  }
  const f5 = function (): void {
    // @ts-expect-error
    return true;
  };


  sortida += `<code>
  <b>//The 'void' return type for functions can produce some unusual, but expected behavior<br>
  //Thus, the following implementations of the type () => void are valid</b><br>
  <mark>type voidFunc = () => void</mark>;<br>
  const f1: voidFunc = () => {<br>
    &nbsp;return true;<br>
  };<br>
  const f2: voidFunc = () => true;<br>
  const f3: voidFunc = function () {<br>
    &nbsp;return true;<br>
  };<br>
  <b>//And when the return value of one of these functions is assigned to another variable,<br>
  //it will retain the type of void</b><br>
  const v1 = f1();<br>
  const v2 = f2();<br>
  const v3 = f3();<br><br>
  <b>//for example Array.prototype.forEach method expects a function with a return type of void</b><br>
  const src = [1, 2, 3];<br>
  const dst = [0];<br>
  const returnVoid = src.forEach((el) => dst.push(el));<br><br>
  <b>//There is one other special case to be aware of,<br>
  //when a literal function definition has a void return type,<br>
  //that function must not return anything.</b><br>
  function f4(): void {<br>
    &nbsp;// @ts-expect-error<br>
    &nbsp;return true;<br>
  }<br>
  const f5 = function (): void {<br>
    &nbsp;// @ts-expect-error<br>
    &nbsp;return true;<br>
  };<br>
  </code>
`;



  return sortida;
}

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
  sortida.innerHTML += restParametersArguments();
  sortida.innerHTML += parameterDestructuring();
  sortida.innerHTML += assignabilityFunctions();
}
