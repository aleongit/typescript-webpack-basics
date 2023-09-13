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
Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.
*/

  /*
implements Clauses
*/
  sortida += '<h3>implements Clauses</h3>';

  /*
You can use an implements clause to check that a class satisfies a particular interface. 
An error will be issued if a class fails to correctly implement it:

interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {
  //Class 'Ball' incorrectly implements interface 'Pingable'.
  //Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
  pong() {
    console.log("pong!");
  }
}

Classes may also implement multiple interfaces, e.g. class C implements A, B {.
*/

  sortida += `<code>
<b>//You can use an <mark>implements</mark> clause to check that a class satisfies a particular <mark>interface</mark></b><br><br>
<mark>interface</mark> Pingable {<br>
  &nbsp;ping(): void;<br>
}<br><br>
class Sonar <mark>implements</mark> Pingable {<br>
  &nbsp;ping() {<br>
    &nbsp;&nbsp;console.log("ping!");<br>
  &nbsp;}<br>
}<br><br>
class Ball <mark>implements</mark> Pingable {<br>
  &nbsp;<mark>//Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.</mark><br>
  &nbsp;<b>//Class 'Ball' incorrectly implements interface 'Pingable'</b><br>
  &nbsp;pong() {<br>
    &nbsp;&nbsp;console.log("pong!");<br>
  &nbsp;}<br>
}<br>
</code>`;

  /*
Cautions

It’s important to understand that an implements clause is only a check that the class can be treated as the interface type. It doesn’t change the type of the class or its methods at all. A common source of error is to assume that an implements clause will change the class type - it doesn’t!

interface Checkable {
  check(name: string): boolean;
}
 
class NameChecker implements Checkable {
  check(s) {
Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    return s.toLowerCase() === "ok";
  }
}


In this example, we perhaps expected that s’s type would be influenced 
by the name: string parameter of check. 
It is not - implements clauses don’t change how the class body is checked or its type inferred.
*/

  /*
Similarly, implementing an interface with an optional property doesn’t create that property:

interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;
//Property 'y' does not exist on type 'C'.
*/

  /*
extends Clauses
*/
  sortida += '<h3>extends Clauses</h3>';

  /*
Classes may extend from a base class. 
A derived class has all the properties and methods of its base class, 
and can also define additional members.

class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
*/

  class Animal {
    move() {
      console.log('Moving along!');
    }
  }

  class Dog extends Animal {
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log('woof!');
      }
    }
  }

  const d = new Dog();
  // Base class method
  d.move();
  // Derived class method
  d.woof(3);

  sortida += `<code>
  //<b>Classes may <mark>extend</mark> from a base class.<br>
  A derived class has all the properties and methods of its base class, and can also define additional members</b><br><br>
  class Animal {<br>
    &nbsp;move() {<br>
      &nbsp;&nbsp;console.log('Moving along!');<br>
    &nbsp;}<br>
  }<br><br>
  class Dog <mark>extends</mark> Animal {<br>
    &nbsp;woof(times: number) {<br>
      &nbsp;&nbsp;for (let i = 0; i < times; i++) {<br>
        &nbsp;&nbsp;&nbsp;console.log('woof!');<br>
      &nbsp;&nbsp;}<br>
    &nbsp;}<br>
  }<br><br>
  const d = new Dog();<br>
  <b>d.move();</b><br>
  <mark>// Base class method</mark><br>
  <b>d.woof(3);</b><br>
  <mark>// Derived class method</mark><br>
  </code>`;

  /*
  Overriding Methods
  */
  sortida += '<h4>Overriding Methods</h4>';

  /*
  A derived class can also override a base class field or property.
  You can use the super. syntax to access base class methods. 
  Note that because JavaScript classes are a simple lookup object, 
  there is no notion of a “super field”.

  TypeScript enforces that a derived class is always a subtype of its base class.

  For example, here’s a legal way to override a method:

  class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
  
  class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }

  const d = new Derived();
  d.greet();
  d.greet("reader");


  It’s important that a derived class follow its base class contract. 
  Remember that it’s very common (and always legal!) to refer to a derived class instance 
  through a base class reference:

  // Alias the derived instance through a base class reference
  const b: Base = d;
  // No problem
  b.greet();


  What if Derived didn’t follow Base’s contract?

  class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
  
  class Derived extends Base {
    // Make this parameter required
    greet(name: string) {
    //Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
    //Type '(name: string) => void' is not assignable to type '() => void'.
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
  
  If we compiled this code despite the error, this sample would then crash:

  const b: Base = new Derived();
  // Crashes because "name" will be undefined
  b.greet();


  */

  class Base {
    greet() {
      console.log('Hello, world!');
    }
  }

  class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }

  const d1 = new Derived();
  d1.greet();
  d1.greet('reader');

  // Alias the derived instance through a base class reference
  const b1: Base = d1;
  // No problem
  b1.greet();

  sortida += `<code>
  <b>//A derived class can also override a base class field or property.<br>
  You can use the super. syntax to access base class methods.<br> 
  Here's a legal way to override a method</b><br><br>
  class Base {<br>
    &nbsp;greet() {<br>
      &nbsp;&nbsp;console.log('Hello, world!');<br>
    &nbsp;}<br>
  }<br><br>
  class Derived <b>extends</b> Base {<br>
    &nbsp;<mark>greet(name?: string) {<br>
      &nbsp;&nbsp;if (name === undefined) {</mark><br>
        &nbsp;&nbsp;&nbsp;<b>super.greet();</b><br>
      &nbsp;&nbsp;} else {<br>
        &nbsp;&nbsp;&nbsp;console.log(${'`Hello, ${name.toUpperCase()}`'});<br>
      &nbsp;&nbsp;}<br>
    &nbsp;}<br>
  }<br><br>
  const d = new Derived();<br>
  d.greet();<br>
  d.greet('reader');<br><br>
  <b>// Alias the derived instance through a base class reference</b><br>
  const b: <mark>Base</mark> = d;<br>
  b.greet(); <b>//No problem</b><br>
  </code>`;

  /*
  Type-only Field Declarations
  */
  sortida += '<h4>Type-only Field Declarations</h4>';

  /*
  When target >= ES2022 or useDefineForClassFields is true, 
  class fields are initialized after the parent class constructor completes, 
  overwriting any value set by the parent class. 
  This can be a problem when you only want to re-declare a more accurate type for an inherited field. 
  To handle these cases, you can write 'declare' to indicate to TypeScript 
  that there should be no runtime effect for this field declaration.

  interface Animal {
    dateOfBirth: any;
  }
  
  interface Dog extends Animal {
    breed: any;
  }
  
  class AnimalHouse {
    resident: Animal;
    constructor(animal: Animal) {
      this.resident = animal;
    }
  }
  
  class DogHouse extends AnimalHouse {
    // Does not emit JavaScript code,
    // only ensures the types are correct
    declare resident: Dog;
    constructor(dog: Dog) {
      super(dog);
    }
  }

  */

  interface Animal {
    dateOfBirth: any;
  }

  interface Dog extends Animal {
    breed: any;
  }

  class AnimalHouse {
    resident: Animal;
    constructor(animal: Animal) {
      this.resident = animal;
    }
  }

  class DogHouse extends AnimalHouse {
    // Does not emit JavaScript code,
    // only ensures the types are correct
    declare resident: Dog;
    constructor(dog: Dog) {
      super(dog);
    }
  }

  const animal = new Animal();
  const gos = new Dog();
  const casaAnimal = new AnimalHouse(animal);
  const casaGos = new DogHouse(gos);

  console.log(animal);
  console.log(gos);
  console.log(casaAnimal);
  console.log(casaGos);

  sortida += `<code>
  //When <mark>target >= ES2022</mark> or <mark>useDefineForClassFields is true</mark>,<br>
  class fields are initialized after the parent class constructor completes,<br>
  overwriting any value set by the parent class.<br> 
  This can be a problem when you only want to re-declare a more accurate type for an inherited field.<br> 
  To handle these cases, you can write <mark>declare</mark> to indicate to TypeScript<br>
  that there should be no runtime effect for this field declaration.<br><br>
  interface Animal {<br>
    &nbsp;dateOfBirth: any;<br>
  }<br><br>
  interface Dog extends Animal {<br>
    &nbsp;breed: any;<br>
  }<br><br>
  class AnimalHouse {<br>
    &nbsp;resident: Animal;<br>
    &nbsp;constructor(animal: Animal) {<br>
      &nbsp;&nbsp;this.resident = animal;<br>
    &nbsp;}<br>
  }<br><br>
  class DogHouse extends AnimalHouse {<br>
    &nbsp;<b>// Does not emit JavaScript code,<br>
    &nbsp;// only ensures the types are correct</b><br>
    &nbsp;<mark>declare</mark> resident: Dog;<br>
    &nbsp;constructor(dog: Dog) {<br>
      &nbsp;&nbsp;super(dog);<br>
    &nbsp;}<br>
  }<br>
  </code>`;

  /*
  Initialization Order
  */
  sortida += '<h4>Initialization Order</h4>';

  /*
  The order that JavaScript classes initialize can be surprising in some cases. 
  Let’s consider this code:

  class Base {
    name = "base";
    constructor() {
      console.log("My name is " + this.name);
    }
  }
  
  class Derived extends Base {
    name = "derived";
  }
  
  // Prints "base", not "derived"
  const d = new Derived();
  */

  class Base1 {
    name = 'base';
    constructor() {
      console.log('My name is ' + this.name);
    }
  }

  class Derived1 extends Base1 {
    name = 'derived';
  }

  const d2 = new Derived1();
  // Prints "base", not "derived"

  console.log(d2.name);
  // Prints "derived"

  /*
  What happened here?

  The order of class initialization, as defined by JavaScript, is:

  - The base class fields are initialized
  - The base class constructor runs
  - The derived class fields are initialized
  - The derived class constructor runs
  
  This means that the base class constructor saw its own value for 'name' during its own constructor, 
  because the derived class field initializations hadn’t run yet.
  */

  sortida += `<code>
  <b>//The order that JavaScript classes initialize can be surprising in some cases</b><br><br>
  The order of class initialization, as defined by JavaScript, is:<br>
  - The base class fields are initialized<br>
  - The base class constructor runs<br>
  - The derived class fields are initialized<br>
  - The derived class constructor runs<br><br>  
  class Base {<br>
    &nbsp;name = "base";<br>
    &nbsp;constructor() {<br>
      &nbsp;&nbsp;console.log("My name is " + this.name);<br>
    &nbsp;}<br>
  }<br><br>   
  class Derived extends Base {<br>
    name = "derived";<br>
  }<br><br>   
  const d = new Derived();<br>
  <mark>// Prints "base", not "derived"</mark><br><br>
  console.log(d2.name);<br>
  <mark>// Prints "derived"</mark><br><br>
  <b>//This means that the base class constructor saw its own value for <mark>name</mark> during its own constructor,<br> 
  because the derived class field initializations hadn't run yet.</b><br>
  </code>`;

  /*
  Inheriting Built-in Types
  */

  /*
  Note: If you don’t plan to inherit from built-in types like Array, Error, Map, etc. 
  or your compilation target is explicitly set to ES6/ES2015 or above, you may skip this section

  In ES2015, constructors which return an object implicitly substitute the value of 'this' 
  for any callers of super(...). 
  It is necessary for generated constructor code to capture any potential return value of super(...) 
  and replace it with this.

  As a result, subclassing Error, Array, and others may no longer work as expected. 
  This is due to the fact that constructor functions for Error, Array, and the like use ECMAScript 6’s 
  new.target to adjust the prototype chain; however, 
  there is no way to ensure a value for new.target when invoking a constructor in ECMAScript 5. 
  Other downlevel compilers generally have the same limitation by default.

  For a subclass like the following:

  class MsgError extends Error {
    constructor(m: string) {
      super(m);
    }
    sayHello() {
      return "hello " + this.message;
    }
  }

  you may find that:

  - methods may be undefined on objects returned by constructing these subclasses, 
  so calling sayHello will result in an error.
  - instanceof will be broken between instances of the subclass and their instances, 
  so (new MsgError()) instanceof MsgError will return false.
  As a recommendation, you can manually adjust the prototype immediately after any super(...) calls.

  class MsgError extends Error {
    constructor(m: string) {
      super(m);
  
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, MsgError.prototype);
    }
  
    sayHello() {
      return "hello " + this.message;
    }
  }

  However, any subclass of MsgError will have to manually set the prototype as well. 
  For runtimes that don’t support Object.setPrototypeOf, you may instead be able to use __proto__.

  Unfortunately, these workarounds will not work on Internet Explorer 10 and prior. 
  One can manually copy methods from the prototype onto the instance itself 
  (i.e. MsgError.prototype onto this), but the prototype chain itself cannot be fixed.

  */

  /*
  class MsgError extends Error {
    constructor(m: string) {
      super(m);
    }
    sayHello() {
      return 'hello ' + this.message;
    }
  }
  */
  class MsgError extends Error {
    constructor(m: string) {
      super(m);

      // Set the prototype explicitly.
      Object.setPrototypeOf(this, MsgError.prototype);
    }

    sayHello() {
      return 'hello ' + this.message;
    }
  }

  const err = new MsgError('error del bo!');
  console.log(err.sayHello());

  return sortida;
};

const memberVisibility = (title: string) => {
  /*
Member Visibility
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
  sortida.innerHTML += memberVisibility(h2[2]);
}
