import { montaPagina } from '../init';
import { titles } from '../constants';
import '../main.css';
//import "./styles.css"; //component styles

//constants
const h2 = titles.manipulation;

//https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

const generics = (title: string) => {
  /*
Generics
*/

  //let sortida = '<h2>Hello World of Generics</h2>';
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  To start off, let’s do the “hello world” of generics: the identity function. 
  The identity function is a function that will return back whatever is passed in. 
  You can think of this in a similar way to the echo command.

  Without generics, we would either have to give the identity function a specific type:

  function identity(arg: number): number {
    return arg;
  }

  Or, we could describe the identity function using the any type:

  function identity(arg: any): any {
    return arg;
  }
  */

  sortida += `<code>
  <b>//Without generics, we would either have to give the identity function a specific type</b><br>
  function identity(arg: <mark>number</mark>): <mark>number</mark> {<br>
    &nbsp;return arg;<br>
  }<br><br>
  <b>//Or, we could describe the identity function using the any type</b><br>
    function identity(arg: <mark>any</mark>): <mark>any</mark> {<br>
      &nbsp;return arg;<br>
  }<br>
  <b>//we are losing the information about what that type was when the function returns</b>
  </code>`;

  /*
  While using 'any' is certainly generic in that it will cause the function to accept any 
  and all types for the type of arg, 
  we actually are losing the information about what that type was when the function returns. 
  If we passed in a number, the only information we have is that any type could be returned.

  Instead, we need a way of capturing the type of the argument in such a way that 
  we can also use it to denote what is being returned. 
  Here, we will use a type variable, a special kind of variable that works on types rather than values.

  function identity<Type>(arg: Type): Type {
    return arg;
  }
  */

  sortida += `<code>
  <b>//We need a way to capture the type of the argument and the type that is returned.<br>
  //We will use a type variable, a special kind of variable that works on types rather than values</b><br><br>
  function identity<mark>&lt;Type&gt;</mark>(arg: <mark>Type</mark>): <mark>Type</mark> {<br>
    &nbsp;return arg;<br>
  }<br>
  <b>//This Type allows us to capture the type the user provides and the type returned (e.g. number)<br>
  //so that we can use that information later</b><br>
  </code>`;

  /*
  We’ve now added a type variable Type to the identity function. 
  This Type allows us to capture the type the user provides (e.g. number), 
  so that we can use that information later. 
  Here, we use Type again as the return type. 
  On inspection, we can now see the same type is used for the argument and the return type. 
  This allows us to traffic that type information in one side of the function and out the other.

  We say that this version of the identity function is generic, as it works over a range of types. 
  Unlike using any, it’s also just as precise (i.e., it doesn’t lose any information) 
  as the first identity function that used numbers for the argument and return type.

  Once we’ve written the generic identity function, we can call it in one of two ways. 
  The first way is to pass all of the arguments, including the type argument, to the function:

  let output = identity<string>("myString");
  //let output: string

  Here we explicitly set Type to be string as one of the arguments to the function call, 
  denoted using the <> around the arguments rather than ().

  The second way is also perhaps the most common. 
  Here we use type argument inference — that is, 
  we want the compiler to set the value of Type for us automatically based 
  on the type of the argument we pass in:

  let output = identity("myString");
  //let output: string

  Notice that we didn’t have to explicitly pass the type in the angle brackets (<>); 
  the compiler just looked at the value "myString", and set Type to its type.
  While type argument inference can be a helpful tool to keep code shorter and more readable, 
  you may need to explicitly pass in the type arguments as we did in the previous example 
  when the compiler fails to infer the type, as may happen in more complex examples.

   */

  sortida += `<code>
  <b>//we can call it in one of two ways.<br><br>
  //The first way is to pass all of the arguments, including the type argument, to the function:</b><br>
  <mark>let output = identity&lt;string&gt;("myString");</mark><br>
  //let output: string<br><br>
  <b>//The second way is the most common (type argument inference).<br> 
  //set the value of Type automatically based on the type of the argument we pass in</b><br>
  <mark>let output = identity("myString");</mark><br>
  //let output: string<br>
  </code>`;

  return sortida;
};

const workingGenerics = (title: string) => {
  /*
  Working with Generic Type Variables
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  When you begin to use generics, you’ll notice that when you create generic functions like identity, 
  the compiler will enforce that you use any generically typed parameters 
  in the body of the function correctly. 
  That is, that you actually treat these parameters as if they could be any and all types.

  Let’s take our identity function from earlier:

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  What if we want to also log the length of the argument arg to the console with each call? 
  We might be tempted to write this:

  function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length);
  Property 'length' does not exist on type 'Type'.
    return arg;
  }
  */

  function loggingIdentity<Type>(arg: Type): Type {
    //console.log(arg.length); //error
    //Property 'length' does not exist on type 'Type'.
    return arg;
  }

  sortida += `<code>
  function loggingIdentity&lt;Type&gt;(arg: Type): Type {<br>
    &nbsp;<mark>console.log(arg.length); //error</mark><br>
    &nbsp;<b>//Property 'length' does not exist on type 'Type'</b><br>
    &nbsp;return arg;<br>
  }<br>
  <mark>//because .length is not common for all the types</mark><br>
  </code>`;

  /*
  When we do, the compiler will give us an error that we’re using the .length member of arg, 
  but nowhere have we said that arg has this member. 
  Remember, we said earlier that these type variables stand in for any and all types, 
  so someone using this function could have passed in a number instead, 
  which does not have a .length member.

  Let’s say that we’ve actually intended this function to work 
  on arrays of Type rather than Type directly. 
  Since we’re working with arrays, the .length member should be available. 
  We can describe this just like we would create arrays of other types:

  function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }

  You can read the type of loggingIdentity as “the generic function loggingIdentity 
  takes a type parameter Type, and an argument arg which is an array of Types, 
  and returns an array of Types.” 
  If we passed in an array of numbers, we’d get an array of numbers back out, 
  as Type would bind to number. 
  This allows us to use our generic type variable Type as part of the types we’re working with, 
  rather than the whole type, giving us greater flexibility.

  We can alternatively write the sample example this way:

  function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }

  You may already be familiar with this style of type from other languages. 
  In the next section, we’ll cover how you can create your own generic types like Array<Type>.
  
  */

  //type Array has .length
  function loggingIdentity2<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }
  loggingIdentity2([1, 2, 3, 4]);

  //We can alternatively write the sample example this way
  function loggingIdentity3<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }
  loggingIdentity3([1, 2, 3, 4, 5]);

  sortida += `<code>
  <b>//type Array has .length</b><br>
  <mark>function loggingIdentity2&lt;Type&gt;(arg: Type[]): Type[] {</mark><br>
    &nbsp;console.log(arg.length);<br>
    &nbsp;return arg;<br>
  }<br>
  loggingIdentity2([1, 2, 3, 4]);<br><br>
  <b>//We can alternatively write the sample example this way</b><br>
  <mark>function loggingIdentity3&lt;Type&gt;(arg: Array&lt;Type&gt;): Array&lt;Type&gt; {</mark><br>
    &nbsp;console.log(arg.length); // Array has a .length, so no more error<br>
    &nbsp;return arg;<br>
  }<br>
  loggingIdentity3([1, 2, 3, 4, 5]);<br>
  </code>`;

  return sortida;
};

const genericTypes = (title: string) => {
  /*
  Generic Types
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  In previous sections, we created generic identity functions that worked over a range of types. 
  In this section, we’ll explore the type of the functions themselves and how to create generic interfaces.

  The type of generic functions is just like those of non-generic functions, 
  with the type parameters listed first, similarly to function declarations:

  function identity<Type>(arg: Type): Type {
    return arg;
  }
  
  let myIdentity: <Type>(arg: Type) => Type = identity;

   */
  function identity<Type>(arg: Type): Type {
    return arg;
  }
  let myIdentity: <Type>(arg: Type) => Type = identity;
  console.log(myIdentity);

  sortida += `<code>
  <mark>//type of generic functions</mark><br><br>
  function identity<mark>&lt;Type&gt;</mark>(arg: <mark>Type</mark>): <mark>Type</mark> {<br>
    &nbsp;return arg;<br>
  }<br>
  let myIdentity: <mark>&lt;Type&gt;</mark>(arg: <mark>Type</mark>) => <mark>Type</mark> = identity;<br>
  </code>`;

  /*
  We could also have used a different name for the generic type parameter in the type, 
  so long as the number of type variables and how the type variables are used line up.

  function identity<Input>(arg: Input): Input {
    return arg;
  }
  
  let myIdentity: <Input>(arg: Input) => Input = identity;
  */

  function identity2<Input>(arg: Input): Input {
    return arg;
  }
  let myIdentity2: <Input>(arg: Input) => Input = identity2;

  sortida += `<code>
  <b>//We could also have used a different name for the generic type parameter in the type,<br>
  so long as the number of type variables and how the type variables are used line up.</b><br><br>
  function identity<mark>&lt;Input&gt;</mark>(arg: <mark>Input</mark>): <mark>Input</mark> {<br>
    &nbsp;return arg;<br>
  }<br>
  let myIdentity: <mark>&lt;Input&gt;</mark>(arg: <mark>Input</mark>) => <mark>Input</mark> = identity;<br>
  </code>`;

  /*
  We can also write the generic type as a call signature of an object literal type:

  function identity<Type>(arg: Type): Type {
    return arg;
  }
  
  let myIdentity: { <Type>(arg: Type): Type } = identity;
  */

  function identity3<Type>(arg: Type): Type {
    return arg;
  }
  let myIdentity3: { <Type>(arg: Type): Type } = identity3;
  console.log(myIdentity3);

  sortida += `<code>
  <b>//We can also write the generic type as a call signature of an object literal type</b><br><br>
  function identity&lt;Type&gt;(arg: Type): Type {<br>
    return arg;<br>
  }<br>
  let myIdentity: <mark>{ &lt;Type&gt;(arg: Type): Type }</mark> = identity;<br>
  </code>`;

  /*
  Which leads us to writing our first generic interface. 
  Let’s take the object literal from the previous example and move it to an interface:

  interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }
  
  function identity<Type>(arg: Type): Type {
    return arg;
  }
  
  let myIdentity: GenericIdentityFn = identity;
  */

  interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }
  function identity4<Type>(arg: Type): Type {
    return arg;
  }
  let myIdentity4: GenericIdentityFn = identity4;

  sortida += `<code>
  <b>//to writing our first generic interface.<br>
  //Let's take the object literal from the previous example and move it to an interface</b><br><br>
  <mark>interface GenericIdentityFn {<br>
    &nbsp;&lt;Type&gt;(arg: Type): Type;<br>
  }</mark><br>
  function identity&ltType&gt(arg: Type): Type {<br>
    &nbsp;return arg;<br>
  }<br>
  let myIdentity: <mark>GenericIdentityFn</mark> = identity;<br>
  </code>`;

  /*
  In a similar example, we may want to move the generic parameter to be a parameter 
  of the whole interface. 
  This lets us see what type(s) we’re generic over (e.g. Dictionary<string> rather than just Dictionary).
  This makes the type parameter visible to all the other members of the interface.

  interface GenericIdentityFn<Type> {
    (arg: Type): Type;
  }
  
  function identity<Type>(arg: Type): Type {
    return arg;
  }
  
  let myIdentity: GenericIdentityFn<number> = identity;
  */
  interface GenericIdentityFn2<Type> {
    (arg: Type): Type;
  }

  function identity5<Type>(arg: Type): Type {
    return arg;
  }
  let myIdentity5: GenericIdentityFn2<number> = identity5;

  sortida += `<code>
  <b>//In a similar example,<br>
  //we may want to move the generic parameter to be a parameter of the whole interface.</b><br><br>
  <mark>interface GenericIdentityFn&lt;Type&gt; {<br>
    &nbsp;(arg: Type): Type;<br>
  }</mark><br>
  function identity&lt;Type&gt;(arg: Type): Type {<br>
    &nbsp;return arg;<br>
  }<br>
  let myIdentity: <mark>GenericIdentityFn&lt;number&gt;</mark> = identity;<br>
  </code>`;

  /*
  Notice that our example has changed to be something slightly different. 
  Instead of describing a generic function, 
  we now have a non-generic function signature that is a part of a generic type. 
  When we use GenericIdentityFn, we now will also need to specify the corresponding type argument 
  (here: number), effectively locking in what the underlying call signature will use. 
  Understanding when to put the type parameter directly on the call signature 
  and when to put it on the interface itself will be helpful in describing 
  what aspects of a type are generic.

  In addition to generic interfaces, we can also create generic classes. 
  Note that it is not possible to create generic enums and namespaces.
  */

  return sortida;
};

const genericClasses = (title: string) => {
  /*
  Generic Classes
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

  class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }
  
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };
   */

  class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };
  console.log(myGenericNumber);
  console.log(myGenericNumber.add(3, 4));

  sortida += `<code>
  <b>//A generic class has a similar shape to a generic interface.<br>
  //Generic classes have a generic type parameter list in angle brackets (&lt;&gt;)<br>
  //following the name of the class.</b><br><br>
  class GenericNumber<mark>&lt;NumType&gt;</mark> {<br>
    &nbsp;zeroValue: <mark>NumType</mark>;<br>
    &nbsp;add: (x: <mark>NumType</mark>, y: <mark>NumType</mark>) => <mark>NumType</mark>;<br>
  }<br><br>
  let myGenericNumber = new GenericNumber<mark>&lt;number&gt;</mark>();<br>
  myGenericNumber.zeroValue = 0;<br>
  myGenericNumber.add = function (x, y) {<br>
    &nbsp;return x + y;<br>
  };<br>
  </code>`;

  /*
  This is a pretty literal use of the GenericNumber class, 
  but you may have noticed that nothing is restricting it to only use the number type. 
  We could have instead used string or even more complex objects.

  let stringNumeric = new GenericNumber<string>();
  stringNumeric.zeroValue = "";
  stringNumeric.add = function (x, y) {
    return x + y;
  };
  
  console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

  Just as with interface, 
  putting the type parameter on the class itself lets us make sure all of the properties 
  of the class are working with the same type.

  As we cover in our section on classes, 
  a class has two sides to its type: the static side and the instance side. 
  Generic classes are only generic over their instance side rather than their static side, 
  so when working with classes, static members can not use the class’s type parameter.
  */

  let stringNumeric = new GenericNumber<string>();
  stringNumeric.zeroValue = '';
  stringNumeric.add = function (x, y) {
    return x + y;
  };

  console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));

  sortida += `<code>
  <b>//nothing is restricting it to only use the number type</b><br>
  <mark>//case string</mark><br><br>
  let stringNumeric = new GenericNumber<mark>&lt;string&gt;</mark>();<br>
  stringNumeric.zeroValue = '';<br>
  stringNumeric.add = function (x, y) {<br>
    &nbsp;return x + y;<br>
  };<br>
  console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));<br>
  </code>`;

  return sortida;
};

const genericConstraints = (title: string) => {
  /*
  Generic Constraints
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  If you remember from an earlier example, 
  you may sometimes want to write a generic function that works on a set of types 
  where you have some knowledge about what capabilities that set of types will have. 
  In our loggingIdentity example, we wanted to be able to access the .length property of arg, 
  but the compiler could not prove that every type had a .length property, 
  so it warns us that we can’t make this assumption.

  function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg.length);
  Property 'length' does not exist on type 'Type'.
    return arg;
  }

  Instead of working with any and all types, 
  we’d like to constrain this function to work with any and all types 
  that also  have the .length property. 
  As long as the type has this member, we’ll allow it, but it’s required to have at least this member. 
  To do so, we must list our requirement as a constraint on what Type can be.

  To do so, we’ll create an interface that describes our constraint. 
  Here, we’ll create an interface that has a single .length property 
  and then we’ll use this interface and the extends keyword to denote our constraint:

  interface Lengthwise {
    length: number;
  }
  
  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }
   */

  /*
  function loggingIdentity<Type>(arg: Type): Type {
    //console.log(arg.length); //error
    //Property 'length' does not exist on type 'Type'.
    return arg;
  }

  Because the generic function is now constrained, it will no longer work over any and all types:

  loggingIdentity(3);
  Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
  
  Instead, we need to pass in values whose type has all the required properties:

  loggingIdentity({ length: 10, value: 3 });


  */

  interface Lengthwise {
    length: number;
  }
  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }
  //loggingIdentity(25) //error no .length
  loggingIdentity('hello');
  loggingIdentity({ length: 10, value: 3 });

  sortida += `<code>
  function loggingIdentity&lt;Type&gt;(arg: Type): Type {<br>
    &nbsp;<mark>console.log(arg.length); //error</mark><br>
    &nbsp;<b>//Property 'length' does not exist on type 'Type'</b><br>
    &nbsp;return arg;<br>
  }<br>
  <mark>//because .length is not common for all the types</mark><br>
  </code>`;

  sortida += `<code>
  <b>//create an interface that describes our constraint (.length) to extend generic type</b><br><br>
  <mark>interface Lengthwise {<br>
    &nbsp;length: number;<br>
  }</mark><br>
  function loggingIdentity&lt;Type <mark>extends Lengthwise</mark>&gt;(arg: Type): Type {<br>
    &nbsp;console.log(arg.length); <b>//Now we know it has a .length property, so no more error</b><br>
    &nbsp;return arg;<br>
  }<br>
  //loggingIdentity(25) <b>//error no .length</b><br>
  loggingIdentity('hello');<br>
  loggingIdentity({ length: 10, value: 3 });<br>
  </code>`;

  return sortida;
};

const typeParametersGenericConstraints = (title: string) => {
  /*
  Using Type Parameters in Generic Constraints
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  You can declare a type parameter that is constrained by another type parameter. 
  
  For example, here we’d like to get a property from an object given its name. 
  We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the obj, 
  so we’ll place a constraint between the two types:

  function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
  
  let x = { a: 1, b: 2, c: 3, d: 4 };
  
  getProperty(x, "a");
  getProperty(x, "m");
  Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
   */

  function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  getProperty(x, 'a');
  //getProperty(x, 'm'); //error
  //Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
  console.log(getProperty(x, 'a'));

  sortida += `<code>
  <b>//You can declare a type parameter that is constrained by another type parameter</b><br><br>
  function getProperty<mark>&lt;Type, Key extends keyof Type&gt;</mark>(obj: <mark>Type</mark>, key: <mark>Key</mark>) {<br>
    &nbsp;return obj[key];<br>
  }<br>
  let x = { a: 1, b: 2, c: 3, d: 4 };<br>
  getProperty(x, 'a');<br>
  //getProperty(x, 'm'); <b>//error</b><br>
  <b>//Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'</b><br>
  </code>`;

  return sortida;
};

const classTypesGenerics = (title: string) => {
  /*
  Using Class Types in Generics
  */

  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  When creating factories in TypeScript using generics, 
  it is necessary to refer to class types by their constructor functions. For example,

  function create<Type>(c: { new (): Type }): Type {
    return new c();
  }

  A more advanced example uses the prototype property to infer and constrain relationships 
  between the constructor function and the instance side of class types.

  class BeeKeeper {
    hasMask: boolean = true;
  }
  
  class ZooKeeper {
    nametag: string = "Mikle";
  }
  
  class Animal {
    numLegs: number = 4;
  }
  
  class Bee extends Animal {
    numLegs = 6;
    keeper: BeeKeeper = new BeeKeeper();
  }
  
  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }
  
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
  
  createInstance(Lion).keeper.nametag;
  createInstance(Bee).keeper.hasMask;

  This pattern is used to power the mixins design pattern.
  https://www.typescriptlang.org/docs/handbook/mixins.html

   */

  class Cosa {
    nom: string = 'nom de la cosa';
    preu: number = 0;
  }

  function create<Type>(c: { new (): Type }): Type {
    return new c();
  }
  console.log(create(Date));
  console.log(create(Cosa));

  sortida += `<code>
  <b>//When creating factories in TypeScript using generics, 
  it is necessary to refer to class types by their constructor functions</b><br><br>
  class Cosa {<br>
    &nbsp;nom: string = 'nom de la cosa';<br>
    &nbsp;preu: number = 0;<br>
  }<br><br>
  function create<mark>&lt;Type&gt;</mark>(c: <mark>{ new (): Type }</mark>): <mark>Type</mark> {<br>
    &nbsp;return new c();<br>
  }<br>
  console.log(create(Date));<br>
  console.log(create(Cosa));<br>
  </code>`;

  sortida += `<code>
  <b>//A more advanced example uses the prototype property to infer and constrain relationships<br>
  //between the constructor function and the instance side of class types.<br>
  //This pattern is used to power the mixins design pattern.</b><br><br>
  class BeeKeeper {<br>
    &nbsp;hasMask: boolean = true;<br>
  }<br>  
  class ZooKeeper {<br>
    &nbsp;nametag: string = "Mikle";<br>
  }<br>  
  class Animal {<br>
    &nbsp;numLegs: number = 4;<br>
  }<br>  
  class Bee extends Animal {<br>
    &nbsp;numLegs = 6;<br>
    &nbsp;<mark>keeper: BeeKeeper = new BeeKeeper();</mark><br>
  }<br>
  class Lion extends Animal {<br>
    &nbsp;<mark>keeper: ZooKeeper = new ZooKeeper();</mark><br>
  }<br><br>
  function createInstance<mark>&lt;A extends Animal&gt;</mark>(c: new () => <mark>A</mark>): <mark>A</mark> {<br>
    &nbsp;return new c();<br>
  }<br><br>
  <mark>createInstance(Lion).keeper.nametag;<br>
  createInstance(Bee).keeper.hasMask;</mark><br>
  </code>`;

  return sortida;
};

const genericParameterDefaults = (title: string) => {
  /*
  Generic Parameter Defaults
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  Consider a function that creates a new HTMLElement. 
  Calling the function with no arguments generates a Div; 
  calling it with an element as the first argument generates an element of the argument’s type. 
  You can optionally pass a list of children as well. 
  Previously you would have to define it as:

  declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
  Cannot find name 'Container'.
  declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
  Cannot find name 'Container'.
  declare function create<T extends HTMLElement, U extends HTMLElement>(
    element: T,
    children: U[]
  ): Container<T, U[]>;
  Cannot find name 'Container'.
   */

  /*
  function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
    element?: T,
    children?: U
  ): Container<T, U> {
    console.log('created!')
  };
  */

  sortida += `<code>
  <b>//Consider a function that creates a new HTMLElement.<br>
  //Calling the function with no arguments generates a Div.<br>
  //Calling it with an element as the first argument generates an element of the argument's type.<br>
  //You can optionally pass a list of children as well.</b><br><br>
  declare function create(): Container&lt;HTMLDivElement, HTMLDivElement[]&gt;;<br>
  declare function create&lt;T extends HTMLElement&gt;(element: T): Container&lt;T, T[]&gt;;<br>
  declare function create&lt;T extends HTMLElement, U extends HTMLElement&gt;(<br>
    &nbsp;element: T,<br>
    &nbsp;children: U[]<br>
  ): Container&lt;T, U[]&gt;;<br>
  </code>`;

  sortida += `<code>
  <mark>With generic parameter defaults we can reduce it to</mark><br><br>
  declare function create&lt;T extends HTMLElement = HTMLDivElement, U = T[]&gt;(<br>
    &nbsp;element?: T,<br>
    &nbsp;children?: U<br>
  ): Container<T, U>;<br>
  </code>`;

  return sortida;
};

const keyofTypeOperator = (title: string) => {
  /*
  Keyof Type Operator
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*

  The keyof operator takes an object type and produces a string or numeric literal union of its keys. 
  The following type P is the same type as type P = "x" | "y":

  type Point = { x: number; y: number };
  type P = keyof Point;
        //type P = keyof Point
   */

  type Point = { x: number; y: number };
  type P = keyof Point;
  //type P = keyof Point
  //is the same type as type P = "x" | "y"

  const exampleP: P = 'x';

  sortida += `<code>
  <b>//The keyof operator takes an object type and produces a string or numeric literal union of its keys</b><br><br>
  type Point = { x: number; y: number };<br>
  type P = <mark>keyof</mark> Point;<br>
  <b>//type P = keyof Point<br>
  //is the same type as type P = "x" | "y"</b><br><br>
  const exampleP : P = 'x'
  </code>`;

  /*
  If the type has a string or number index signature, keyof will return those types instead:

  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish;
      //type A = number
  
  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish; 
      //type M = string | number

  Note that in this example, M is string | number — 
  this is because JavaScript object keys are always coerced to a string, 
  so obj[0] is always the same as obj["0"].

  keyof types become especially useful when combined with mapped types, 
  which we’ll learn more about later.

  */

  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish;

  const testArrayish: Arrayish = ['a', 'b', 'c'];
  console.log(testArrayish);

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish;

  const testMapish: Mapish = { a: true, b: false };
  console.log(testMapish);

  sortida += `<code>
  <b>//If the type has a string or number index signature, keyof will return those types instead</b><br><br>
  type Arrayish = <mark>{ [n: number]: unknown }</mark>;<br>
  type A = keyof Arrayish;<br>
  <mark>//type A = number</mark><br><br>
  type Mapish = <mark>{ [k: string]: boolean }</mark>;<br>
  type M = keyof Mapish;<br>
  <mark>//type M = string | number</mark><br>
  <b>//Note that in this example, M is string | number<br>
  //this is because JavaScript object keys are always coerced to a string,<br>
  //so obj[0] is always the same as obj["0"].</b><br>
  </code>`;

  return sortida;
};

const typeofTypeOperator = (title: string) => {
  /*
  Typeof Type Operator
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  JavaScript already has a typeof operator you can use in an expression context:

  // Prints "string"
  console.log(typeof "Hello world");
  
  TypeScript adds a typeof operator you can use in a type context to refer to the type 
  of a variable or property:

  let s = "hello";
  let n: typeof s;
      //let n: string
  */

  sortida += `<code>
  <b>//JavaScript already has a typeof operator you can use in an expression context</b><br>
  console.log(<mark>typeof</mark> "Hello world");<br>
  <b>// Prints "string"</b><br><br>
  <b>//TypeScript adds a typeof operator you can use in a type context<br>
  //to refer to the type of a variable or property</b><br>
  let s = "hello";<br>
  let n: <mark>typeof</mark> s;<br>
  <b>//let n: string</b><br>
  </code>`;

  /*
  This isn’t very useful for basic types, 
  but combined with other type operators, you can use typeof to conveniently express many patterns. 
  
  For an example, let’s start by looking at the predefined type ReturnType<T>. 
  It takes a function type and produces its return type:

  type Predicate = (x: unknown) => boolean;
  type K = ReturnType<Predicate>;
  //type K = boolean
  

  If we try to use ReturnType on a function name, we see an instructive error:

  function f() {
    return { x: 10, y: 3 };
  }
  type P = ReturnType<f>;
  //'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

  Remember that values and types aren’t the same thing. 
  To refer to the type that the value f has, we use typeof:

  function f() {
    return { x: 10, y: 3 };
  }
  type P = ReturnType<typeof f>;
      //type P = {
      x: number;
      y: number;
      }


  Limitations
  TypeScript intentionally limits the sorts of expressions you can use typeof on.

  Specifically, it’s only legal to use typeof on identifiers (i.e. variable names) or their properties. 
  This helps avoid the confusing trap of writing code you think is executing, but isn’t:

  // Meant to use = ReturnType<typeof msgbox>
  let shouldContinue: typeof msgbox("Are you sure you want to continue?");

  
  */

  type Predicate = (x: unknown) => boolean;
  type K = ReturnType<Predicate>;

  function f() {
    return { x: 10, y: 3 };
  }
  type P = ReturnType<typeof f>;

  sortida += `<code>
  <b>//For an example, let's start by looking at the predefined type ReturnType<T>.<br>
  //It takes a function type and produces its return type</b><br><br>
  type Predicate = (x: unknown) => boolean;<br>
  type K = ReturnType&lt;Predicate&gt;;<br>
  //type K = boolean<br><br>
  </code>`;

  sortida += `<code>
  <b>//If we try to use ReturnType on a function name, we see an instructive error:</b><br>
  function f() {<br>
    &nbsp;return { x: 10, y: 3 };<br>
  }<br>
  type P = ReturnType<mark>&lt;f&gt;</mark>;<br>
  <mark>//'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?<mark><br>
  </code>`;

  sortida += `<code>
  <b>//Remember that values and types aren't the same thing.<br>
  //To refer to the type that the value f has, we use typeof</b><br><br>
  function f() {<br>
    &nbsp;return { x: 10, y: 3 };<br>
  }<br>
  type P = ReturnType&lt;<mark>typeof</mark> f&gt;;<br>
  <b>//type P = {<br>
    &nbsp;x: number;<br>
    &nbsp;y: number;<br>
    &nbsp;}</b><br>
  </code>`;

  return sortida;
};

const indexedAccessTypes = (title: string) => {
  /*
  Indexed Access Types
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  We can use an indexed access type to look up a specific property on another type:

  type Person = { age: number; name: string; alive: boolean };
  type Age = Person["age"];
      //type Age = number
  */
  type Person = { age: number; name: string; alive: boolean };
  type Age = Person['age'];
  //type Age = number

  sortida += `<code>
  <b>//We can use an indexed access type to look up a specific property on another type</b><br><br>
  type Person = { age: number; name: string; alive: boolean };<br>
  <mark>type Age = Person['age'];</mark><br>
  <b> &nbsp;//type Age = number</b><br>
  </code>`;

  /*
  The indexing type is itself a type, so we can use unions, keyof, or other types entirely:

  type I1 = Person["age" | "name"];
        //type I1 = string | number
  type I2 = Person[keyof Person];   
        //type I2 = string | number | boolean
  type AliveOrName = "alive" | "name";
  type I3 = Person[AliveOrName];  
        //type I3 = string | boolean
  */
  type I1 = Person['age' | 'name'];
  //type I1 = string | number
  type I2 = Person[keyof Person];
  //type I2 = string | number | boolean
  type AliveOrName = 'alive' | 'name';
  type I3 = Person[AliveOrName];
  //type I3 = string | boolean

  sortida += `<code>
  <b>//The indexing type is itself a type, so we can use unions, keyof, or other types entirely</b><br><br>
  type I1 = <mark>Person["age" | "name"]</mark>;<br>
        &nbsp;<b>//type I1 = string | number</b><br>
  type I2 = <mark>Person[keyof Person]</mark>;<br>
        &nbsp;<b>//type I2 = string | number | boolean</b><br>
  type AliveOrName = "alive" | "name";<br>
  type I3 = <mark>Person[AliveOrName]</mark>;<br>
        &nbsp;<b>//type I3 = string | boolean</b><br>
  </code>`;

  /*
  You’ll even see an error if you try to index a property that doesn’t exist:

  type I1 = Person["alve"];
  Property 'alve' does not exist on type 'Person'.

  Another example of indexing with an arbitrary type is using 'number'
  to get the type of an array’s elements. 
  We can combine this with typeof to conveniently capture the element type of an array literal:

  const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];
  
  type Person = typeof MyArray[number];
      //type Person = {
        name: string;
        age: number;
      }
  type Age = typeof MyArray[number]["age"];
      //type Age = number
  
  // Or
  type Age2 = Person["age"];
      //type Age2 = number

  */

  const MyArray = [
    { name: 'Alice', age: 15 },
    { name: 'Bob', age: 23 },
    { name: 'Eve', age: 38 }
  ];
  type Persona = (typeof MyArray)[number];
  /*type Person = {
      name: string;
      age: number;
    }*/
  type Edat = (typeof MyArray)[number]['age'];
  //type Edat = number

  // Or
  type Edat2 = Persona['age'];
  //type Edat2 = number

  sortida += `<code>
  <b>//Another example of indexing with an arbitrary type is using <mark>number</mark><br>
  //to get the type of an array's elements.<br> 
  //We can combine this with <mark>typeof</mark> to conveniently capture the element type of an array literal</b><br><br>
  const MyArray = [<br>
    &nbsp;{ name: 'Alice', age: 15 },<br>
    &nbsp;{ name: 'Bob', age: 23 },<br>
    &nbsp;{ name: 'Eve', age: 38 }<br>
  ];<br><br>
  type Persona = <mark>(typeof MyArray)[number]</mark>;<br>
    &nbsp;<b>//type Person = {<br>
      &nbsp;&nbsp;name: string;<br>
      &nbsp;&nbsp;age: number;<br>
    &nbsp;}</b><br>
  type Edat = <mark>(typeof MyArray)[number]['age'];</mark><br>
  <b>//type Edat = number</b><br><br>
  // Or<br>
  type Edat2 = <mark>Persona['age'];</mark><br>
  <b>//type Edat2 = number</b><br>
  </code>`;

  /*
  You can only use types when indexing, meaning you can’t use a const to make a variable reference:

  const key = "age";
  type Age = Person[key];
  //Type 'key' cannot be used as an index type.
  //'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?
  
  However, you can use a type alias for a similar style of refactor:

  type key = "age";
  type Age = Person[key];
  */

  const key = 'age';
  type Age3 = Person[typeof key];

  sortida += `<code>
  <b>//You can only use types when indexing</b><br>
  <mark>const</mark> key = "age";<br>
  type Age = Person[key];<br>
  <b>//Type 'key' cannot be used as an index type.</b><br>
  <b>//'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?</b><br><br>
  <mark>//However, you can use a type alias for a similar style of refactor</mark><br>
  <mark>type</mark> key = "age";<br>
  type Age = Person[key];<br>
  //or<br>
  <mark>const</mark> key = "age";<br>
  type Age = Person[<mark>typeof key</mark>];<br>
  </code>`;

  return sortida;
};

const conditionalTypes = (title: string) => {
  /*
  Conditional Types
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  At the heart of most useful programs, we have to make decisions based on input. 
  JavaScript programs are no different, but given the fact that values can be easily introspected, 
  those decisions are also based on the types of the inputs. 
  Conditional types help describe the relation between the types of inputs and outputs.

  interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }
  type Example1 = Dog extends Animal ? number : string;
        //type Example1 = number
  
  type Example2 = RegExp extends Animal ? number : string;
        //type Example2 = string
   */

  interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }
  type Example1 = Dog extends Animal ? number : string;
  //type Example1 = number
  type Example2 = RegExp extends Animal ? number : string;
  //type Example2 = string

  sortida += `<code>
  <b>//Conditional types help describe the relation between the types of inputs and outputs</b><br><br>
  interface Animal {<br>
    &nbsp;live(): void;<br>
  }<br>
  interface Dog extends Animal {<br>
    &nbsp;woof(): void;<br>
  }<br>
  type Example1 = <mark>Dog extends Animal ? number : string;</mark><br>
  //type Example1 = number<br>
  type Example2 = <mark>RegExp extends Animal ? number : string;</mark><br>
  //type Example2 = string<br>
  </code>`;

  return sortida;
};

montaPagina(h2);
const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += generics(h2[0]);
  sortida.innerHTML += workingGenerics(h2[1]);
  sortida.innerHTML += genericTypes(h2[2]);
  sortida.innerHTML += genericClasses(h2[3]);
  sortida.innerHTML += genericConstraints(h2[4]);
  sortida.innerHTML += typeParametersGenericConstraints(h2[5]);
  sortida.innerHTML += classTypesGenerics(h2[6]);
  sortida.innerHTML += genericParameterDefaults(h2[7]);
  sortida.innerHTML += keyofTypeOperator(h2[8]);
  sortida.innerHTML += typeofTypeOperator(h2[9]);
  sortida.innerHTML += indexedAccessTypes(h2[10]);
  sortida.innerHTML += conditionalTypes(h2[11]);
}
