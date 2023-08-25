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

  return sortida;
};

montaPagina(h2);
const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += classMembers(h2[0]);
}
