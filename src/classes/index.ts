import { montaPagina } from '../init';
import { titles } from '../constants';
import '../main.css';
//import "./styles.css"; //component styles

//constants
const h2 = titles.classes;

//https://www.typescriptlang.org/docs/handbook/2/classes.html

const classMembers = (title: string) => {
  /*
Class Members
*/

  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  Here’s the most basic class - an empty one:

  class Point {}
  
  This class isn’t very useful yet, so let’s start adding some members.
   */

  sortida += `<code>
  <b>//Here's the most basic class - an empty one</b><br><br>
  <mark>class Point {}</mark><br>
  </code>`;

  /*
  Fields
  */
  sortida += '<h3>Fields</h3>';

  /*
  A field declaration creates a public writeable property on a class:

  class Point {
    x: number;
    y: number;
  }
  
  const pt = new Point();
  pt.x = 0;
  pt.y = 0;


  As with other locations, the type annotation is optional, 
  but will be an implicit 'any' if not specified.

  Fields can also have initializers; these will run automatically when the class is instantiated:

  class Point {
    x = 0;
    y = 0;
  }
  
  const pt = new Point();
  // Prints 0, 0
  console.log(`${pt.x}, ${pt.y}`);

  Just like with const, let, and var, 
  the initializer of a class property will be used to infer its type:

  const pt = new Point();
  pt.x = "0";
  Type 'string' is not assignable to type 'number'.

  */

  //A field declaration creates a public writeable property on a class
  class Point {
    x: number;
    y: number;
  }
  const pt = new Point();
  pt.x = 0;
  pt.y = 0;

  //the type annotation is optional, but will be an implicit 'any' if not specified.
  //Fields can also have initializers; these will run automatically when the class is instantiated
  class Point2 {
    x = 0;
    y = 0;
  }
  const pt2 = new Point2();
  // Prints 0, 0
  console.log(`${pt2.x}, ${pt2.y}`);

  const pt3 = new Point();
  //pt.x = "0"; //error
  //Type 'string' is not assignable to type 'number'.

  sortida += `<code>
  <b>//A field declaration creates a public writeable property on a class</b><br><br>
  class Point {<br>
    &nbsp;<mark>x: number;</mark><br>
    &nbsp;<mark>y: number;</mark><br>
  }<br>
  const pt = new Point();<br>
  <mark>pt.x</mark> = 0;<br>
  <mark>pt.y</mark> = 0;<br>
  </code>`;

  sortida += `<code>
  <b>//the type annotation is optional, but will be an implicit <mark>any</mark> if not specified.<br>
  //Fields can also have initializers; these will run automatically when the class is instantiated</b><br><br>
  class Point {<br>
    &nbsp;<mark>x = 0;</mark><br>
    &nbsp;<mark>y = 0;</mark><br>
  }<br>
  const pt = new Point();<br>
  console.log(${'`${pt.x}, ${pt.y}`'});<br>
  <b>// Prints 0, 0</b><br>
  </code>`;

  sortida += `<code>
  <b>//Just like with const, let, and var, the initializer of a class property will be used to infer its type</b><br><br>
  const pt = new Point();<br>
  <b>//pt.x = "0"; //error</b><br>
  <mark>//Type 'string' is not assignable to type 'number'</mark><br>
  </code>`;

  /*
  --strictPropertyInitialization
  */
  sortida += '<h3>--strictPropertyInitialization</h3>';

  /*
  The strictPropertyInitialization setting controls whether class fields need to be initialized 
  in the constructor.

  class BadGreeter {
    name: string; //error
  //Property 'name' has no initializer and is not definitely assigned in the constructor.
  }


  class GoodGreeter {
  name: string;
 
    constructor() {
      this.name = "hello";
    }
  }

  Note that the field needs to be initialized in the constructor itself. 
  TypeScript does not analyze methods you invoke from the constructor to detect initializations, 
  because a derived class might override those methods and fail to initialize the members.

  If you intend to definitely initialize a field through means other than the constructor 
  (for example, maybe an external library is filling in part of your class for you), 
  you can use the definite assignment assertion operator, !:

  class OKGreeter {
    // Not initialized, but no error
    name!: string;
  }
  */

  sortida += `<code>
  <b>The <mark>strictPropertyInitialization</mark> setting controls whether class fields need to be initialized in the constructor</b><br><br>
  class BadGreeter {<br>
    &nbsp;name: string; <b>//error</b><br>
  <mark>Property 'name' has no initializer and is not definitely assigned in the constructor.</mark><br>
  }<br>
  </code>`;

  sortida += `<code>
  <b>//correct way</b><br>
  class GoodGreeter {<br>
    &nbsp;name: string;<br><br>
    &nbsp;<mark>constructor() {</mark><br>
      &nbsp;&nbsp;this.name = "hello";<br>
    &nbsp;}<br>
  }<br>
  </code>`;

  sortida += `<code>
  <b>//If you intend to definitely initialize a field through means other than the constructor,<br>
  you can use the definite assignment assertion operator <mark>!</mark></b><br><br>
  class OKGreeter {<br>
    &nbsp;<b>// Not initialized, but no error</b><br>
    &nbsp;name<mark>!</mark>: string;<br>
  }<br>
  </code>`;

  /*
  readonly
  */
  sortida += '<h3>readonly</h3>';

  /*
  Fields may be prefixed with the readonly modifier. 
  This prevents assignments to the field outside of the constructor.

  class Greeter {
    readonly name: string = "world";
  
    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }
  
    err() {
      this.name = "not ok"; //error
      //Cannot assign to 'name' because it is a read-only property.
    }
  }
  const g = new Greeter();
  //g.name = "also not ok"; //error
  //Cannot assign to 'name' because it is a read-only property.

  */

  class Greeter {
    readonly name: string = 'world';

    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }

    err() {
      //this.name = "not ok"; //error
      //Cannot assign to 'name' because it is a read-only property.
    }
  }
  const g = new Greeter();
  //g.name = "also not ok"; //error
  //Cannot assign to 'name' because it is a read-only property.

  const ok = new Greeter('change world');
  console.log(g.name);
  console.log(ok.name);

  sortida += `<code>
  <b>//Fields may be prefixed with the <mark>readonly</mark> modifier.<br>
  This prevents assignments to the field outside of the constructor.</b><br><br>
  class Greeter {<br>
    &nbsp;<mark>readonly</mark> name: string = 'world';<br><br>
    &nbsp;constructor(otherName?: string) {<br>
      &nbsp;&nbsp;if (otherName !== undefined) {<br>
        &nbsp;&nbsp;&nbsp;this.name = otherName;<br>
      &nbsp;&nbsp;}<br>
    &nbsp;}<br><br>
    &nbsp;err() {<br>
      &nbsp;&nbsp;<b>//this.name = "not ok"; //error</b><br>
      &nbsp;&nbsp;<mark>//Cannot assign to 'name' because it is a read-only property.</mark><br>
    &nbsp;}<br>
  }<br>
  const g = new Greeter();<br>
  <b>//g.name = "also not ok"; //error</b><br>
  <mark>//Cannot assign to 'name' because it is a read-only property.</mark><br><br>
  const ok = new Greeter(<mark>'change world'</mark>); <b>//ok</b><br>
  </code>`;

  /*
  Constructors
  */
  sortida += '<h3>Constructors</h3>';

  /*
  Class constructors are very similar to functions. 
  You can add parameters with type annotations, default values, and overloads:

class Point {
    x: number;
    y: number;
  
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }

  class Point {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }
  }

  There are just a few differences between class constructor signatures and function signatures:

  - Constructors can’t have type parameters - these belong on the outer class declaration, 
  which we’ll learn about later
  
  - Constructors can’t have return type annotations - 
  the class instance type is always what’s returned

  */

  sortida += `<code>
  //Class constructors are very similar to functions.<br>
  //You can add parameters with type annotations, default values, and overloads.<br><br>
  class Point {<br>
    &nbsp;x: number;<br>
    &nbsp;y: number;<br><br>  
    &nbsp;<b>// Normal signature with defaults</b><br>
    &nbsp;<mark>constructor(x = 0, y = 0)</mark> {<br>
      &nbsp;&nbsp;this.x = x;<br>
      &nbsp;&nbsp;this.y = y;<br>
    &nbsp;}<br>
  }<br>
  </code>`;

  sortida += `<code>
  class Point {<br>
    &nbsp;<b>// Overloads</b><br>
    &nbsp;constructor(x: number, y: string);<br>
    &nbsp;constructor(s: string);<br>
    &nbsp;constructor(xs: any, y?: any) {<br>
      &nbsp;&nbsp;// TBD<br>
    &nbsp;}<br>
  }<br>
  </code>`;

  /*
  Super Calls
  */
  sortida += '<h4>Super Calls</h4>';

  /*
  Just as in JavaScript, if you have a base class, you’ll need to call super(); 
  in your constructor body before using any this. members:

  class Base {
    k = 4;
  }
  
  class Derived extends Base {
    constructor() {
      // Prints a wrong value in ES5; throws exception in ES6
      console.log(this.k);
  'super' must be called before accessing 'this' in the constructor of a derived class.
      super();
    }
  }
  
  Forgetting to call super is an easy mistake to make in JavaScript, 
  but TypeScript will tell you when it’s necessary.
  */

  class Base {
    k = 4;
  }

  class Derived extends Base {
    constructor() {
      // Prints a wrong value in ES5; throws exception in ES6
      //console.log(this.k); //error
      //'super' must be called before accessing 'this' in the constructor of a derived class.

      super();
      console.log(this.k); //ok after super()
    }
  }

  sortida += `<code>
  //Just as in JavaScript, if you have a base class, you'll need to call <mark>super();</mark><br> 
  in your constructor body before using any this. members<br><br>
  class Base {<br>
    &nbsp;k = 4;<br>
  }<br><br>
  class Derived <mark>extends</mark> Base {<br>
    &nbsp;constructor() {<br>
      &nbsp;&nbsp;<mark>console.log(this.k); //error</mark><br>
      &nbsp;&nbsp;<b>//'super' must be called before accessing 'this' in the constructor of a derived class</b><br><br>
      &nbsp;&nbsp;<mark>super();</mark><br>
      &nbsp;&nbsp;<b>console.log(this.k); //ok after super()</b><br>
    &nbsp;}<br>
  }<br>
  </code>`;

  /*
  Methods
  */
  sortida += '<h3>Methods</h3>';

  /*
  A function property on a class is called a method. 
  Methods can use all the same type annotations as functions and constructors:

  class Point {
    x = 10;
    y = 10;
  
    scale(n: number): void {
      this.x *= n;
      this.y *= n;
    }
  }

  Other than the standard type annotations, TypeScript doesn’t add anything else new to methods.

  Note that inside a method body, 
  it is still mandatory to access fields and other methods via this.. 
  An unqualified name in a method body will always refer to something in the enclosing scope:


  let x: number = 0;
 
  class C {
    x: string = "hello";
  
    m() {
      // This is trying to modify 'x' from line 1, not the class property
      x = "world"; //error
  //Type 'string' is not assignable to type 'number'.
    }
  }

  */

  let x: number = 0;

  class C {
    x: string = 'hello';

    m() {
      // This is trying to modify 'x' from line 1, not the class property
      //x = "world"; //error
      //Type 'string' is not assignable to type 'number'.
      this.x = 'world'; //ok
    }
  }

  sortida += `<code>
  <b>//A function property on a class is called a <mark>method</mark>.<br>
  Methods can use all the same type annotations as functions and constructors</b><br><br>
  class Point {<br>
    &nbsp;x = 10;<br>
    &nbsp;y = 10;<br><br>
    &nbsp;<mark>scale(n: number): void </mark>{<br>
      &nbsp;&nbsp;this.x *= n;<br>
      &nbsp;&nbsp;this.y *= n;<br>
    &nbsp;}<br>
  }<br>
  </code>`;

  sortida += `<code>
  <b>//use <mark>this.</mark> to access fields and other methods</b><br><br>
  let <mark>x</mark>: number = 0;<br><br> 
  class C {<br>
    &nbsp;<mark>x</mark>: string = "hello";<br><br>  
    &nbsp;m() {<br>
      &nbsp;&nbsp;<b>// This is trying to modify 'x' from line 1, not the class property</b><br>
      &nbsp;&nbsp;<mark>x = "world"; //error</mark><br>
      &nbsp;&nbsp;<b>//Type 'string' is not assignable to type 'number'.</b><br><br>
      &nbsp;&nbsp;<mark>this.x = 'world'; //ok</mark><br>
    &nbsp;}<br>
  }<br>
  </code>`;

  /*
  Getters / Setters
  */
  sortida += '<h3>Getters / Setters</h3>';

  /*
  Classes can also have accessors:

  class C {
    _length = 0;
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
  }

  Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. 
  It’s fine to expose public fields if you don’t need to add additional logic 
  during the get/set operations.

  TypeScript has some special inference rules for accessors:

  - If get exists but no set, the property is automatically readonly
  - If the type of the setter parameter is not specified, 
  it is inferred from the return type of the getter
  - Getters and setters must have the same Member Visibility
  
  Since TypeScript 4.3, it is possible to have accessors with different types for getting and setting.

  */

  sortida += `<code>
  class C {<br>
    &nbsp;_length = 0;<br>
    &nbsp;<mark>get</mark> length() {<br>
      &nbsp;&nbsp;return this._length;<br>
    &nbsp;}<br>
    &nbsp;<mark>set</mark> length(value) {<br>
      &nbsp;&nbsp;this._length = value;<br>
    &nbsp;}<br>
  }<br>
  </code>`;

  /*
  Index Signatures
  */
  sortida += '<h3>Index Signatures</h3>';

  /*
  Classes can declare index signatures; 
  these work the same as Index Signatures for other object types:

  class MyClass {
    [s: string]: boolean | ((s: string) => boolean);
  
    check(s: string) {
      return this[s] as boolean;
    }
  }

  Because the index signature type needs to also capture the types of methods, 
  it’s not easy to usefully use these types. 
  Generally it’s better to store indexed data in another place instead of on the class instance itself.
  */

  sortida += `<code>
  <b>//Classes can declare index signatures;<br>
  these work the same as <mark>Index Signatures for other object types</mark></b><br><br>
  class MyClass {<br>
    &nbsp;<mark>[s: string]: boolean | ((s: string) => boolean);</mark><br><br>
    &nbsp;check(s: string) {<br>
      &nbsp;&nbsp;return this[s] as boolean;<br>
    &nbsp;}<br>
  }<br>
  </code>`;

  return sortida;
};

const classHeritage = (title: string) => {
  /*
Class Heritage
*/

  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
   */

  sortida += `<code>
test
</code>`;

  return sortida;
};

montaPagina(h2);
const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += classMembers(h2[0]);
  sortida.innerHTML += classHeritage(h2[1]);
}
