import { montaPagina } from '../init';
import { getImgWithLink } from '../helpers';

import '../main.css';
//import "./styles.css"; //component styles

//https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

const generics = () => {
  /*
Generics
*/

  let sortida = '<h2>Hello World of Generics</h2>';

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

const workingGenerics = () => {
  /*
  Working with Generic Type Variables
  */
  let sortida = '<h2>Working with Generic Type Variables</h2>';

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

const genericTypes = () => {
  /*
  Generic Types
  */
  let sortida = '<h2>Generic Types</h2>';

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

montaPagina();

const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += generics();
  sortida.innerHTML += workingGenerics();
  sortida.innerHTML += genericTypes();
}
