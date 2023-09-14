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
  You can use TypeScript 
  to control whether certain methods or properties are visible to code outside the class.
   */

  /*
  public
  */
  sortida += '<h3>public</h3>';

  /*
  The default visibility of class members is public.
  A public member can be accessed anywhere:

  class Greeter {
    public greet() {
      console.log("hi!");
    }
  }
  const g = new Greeter();
  g.greet();
  
  Because public is already the default visibility modifier, 
  you don’t ever need to write it on a class member, 
  but might choose to do so for style/readability reasons.
  */

  class Greeter {
    public greet() {
      console.log('hi!');
    }
  }
  const g = new Greeter();
  g.greet();

  sortida += `<code>
  <b>//The default visibility of class members is <mark>public</mark></b><br>
  class Greeter {<br>
    &nbsp;<mark>public</mark> greet() {<br>
      &nbsp;&nbsp;console.log("hi!");<br>
    &nbsp;}<br>
  }<br><br>
  const g = new Greeter();<br>
  g.greet();<br><br>
  <b>//you don't ever need to write <mark>public</mark>,<br> 
  but might choose to do so for style/readability reasons</b><br>
  </code>`;

  /*
  protected
  */
  sortida += '<h3>protected</h3>';

  /*
  protected members are only visible to subclasses of the class they’re declared in.

  class Greeter {
    public greet() {
      console.log("Hello, " + this.getName());
    }
    protected getName() {
      return "hi";
    }
  }
  
  class SpecialGreeter extends Greeter {
    public howdy() {
      // OK to access protected member here
      console.log("Howdy, " + this.getName());
    }
  }
  const g = new SpecialGreeter();
  g.greet(); // OK
  g.getName();
  Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

  */

  class Greeter2 {
    public greet() {
      console.log('Hello, ' + this.getName());
    }
    protected getName() {
      return 'Pepet';
    }
  }

  class SpecialGreeter extends Greeter2 {
    public howdy() {
      // OK to access protected member here
      console.log('Howdy, ' + this.getName());
    }
  }
  const s = new SpecialGreeter();
  s.greet(); // OK
  //s.getName(); // ERROR
  //Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

  s.howdy(); // OK

  sortida += `<code>
  <b>//<mark>protected</mark> members are only visible to subclasses of the class they're declared in.</b><br><br>
  class Greeter {<br>
    &nbsp;public greet() {<br>
      &nbsp;&nbsp;console.log('Hello, ' + this.getName());<br>
    &nbsp;}<br>
    &nbsp;<mark>protected</mark> getName() {<br>
      &nbsp;&nbsp;return 'Pepet';<br>
    &nbsp;}<br>
  }<br><br>
  class SpecialGreeter extends Greeter {<br>
    &nbsp;public howdy() {<br>
      &nbsp;&nbsp;console.log('Howdy, ' + this.getName());<br>
      &nbsp;&nbsp;<mark>// OK to access protected member here</mark><br>
    &nbsp;}<br>
  }<br><br>
  const s = new SpecialGreeter();<br>
  s.greet(); <b>// OK</b><br>
  s.howdy(); <b>// OK</b><br>
  <mark>//s.getName(); // ERROR</mark><br>
  <b>//Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.</b><br>
  </code>`;

  /*
  Exposure of protected members
  */
  sortida += '<h4>Exposure of protected members</h4>';

  /*
  Derived classes need to follow their base class contracts, 
  but may choose to expose a subtype of base class with more capabilities. 
  This includes making protected members public:

  class Base {
    protected m = 10;
  }
  class Derived extends Base {
    // No modifier, so default is 'public'
    m = 15;
  }
  const d = new Derived();
  console.log(d.m); // OK

  Note that Derived was already able to freely read and write m, 
  so this doesn’t meaningfully alter the “security” of this situation. 
  The main thing to note here is that in the derived class, 
  we need to be careful to repeat the protected modifier if this exposure isn’t intentional.

  */

  class Base {
    protected m = 10;
  }
  class Derived extends Base {
    // No modifier, so default is 'public'
    m = 15;
  }
  const d = new Derived();
  console.log(d.m); // OK

  sortida += `<code>
  <b>//a subclass can make publics the protected members of a class</b><br><br>
  class Base {<br>
    &nbsp;protected m = 10;<br>
  }<br><br>
  class Derived extends Base {<br>
    &nbsp;<mark>// No modifier, so default is 'public'</mark><br>
    &nbsp;m = 15;<br>
  }<br>
  const d = new Derived();<br>
  console.log(d.m); <b>// OK</b><br>
  </code>`;

  /*
  Cross-hierarchy protected access
  */
  sortida += '<h4>Cross-hierarchy protected access</h4>';

  /*
  Different OOP languages disagree about whether it’s legal 
  to access a protected member through a base class reference:

  class Base {
    protected x: number = 1;
  }
  class Derived1 extends Base {
    protected x: number = 5;
  }
  class Derived2 extends Base {
    f1(other: Derived2) {
      other.x = 10;
    }
    f2(other: Derived1) {
      other.x = 10;
  Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
    }
  }

  Java, for example, considers this to be legal. 
  On the other hand, C# and C++ chose that this code should be illegal.

  TypeScript sides with C# and C++ here, 
  because accessing x in Derived2 should only be legal from Derived2’s subclasses, 
  and Derived1 isn’t one of them. Moreover, 
  if accessing x through a Derived1 reference is illegal (which it certainly should be!), 
  then accessing it through a base class reference should never improve the situation.

  See also Why Can’t I Access A Protected Member From A Derived Class?
  which explains more of C#‘s reasoning.

  */

  class Base2 {
    protected x: number = 1;
  }
  class Derived1 extends Base2 {
    protected x: number = 5;
  }
  class Derived2 extends Base2 {
    f1(other: Derived2) {
      other.x = 10;
    }
    f2(other: Derived1) {
      //other.x = 10; // ERROR
      //Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
    }
  }

  sortida += `<code>
  <b>//Different OOP languages disagree about whether it's legal to access a protected member through a base class reference<br>
  //Java, for example, considers this to be legal. On the other hand, C# and C++ chose that this code should be illegal.<br>
  //TypeScript sides with C# and C++ here</b><br><br>
  class Base {<br>
    &nbsp;protected x: number = 1;<br>
  }<br><br>
  class Derived1 extends Base {<br>
    &nbsp;protected x: number = 5;<br>
  }<br><br>
  class Derived2 extends Base {<br>
    &nbsp;f1(other: Derived2) {<br>
      &nbsp;&nbsp;other.x = 10;<br>
    &nbsp;}<br>
    &nbsp;f2(other: Derived1) {<br>
      &nbsp;&nbsp;<mark>//other.x = 10; // ERROR</mark><br>
      &nbsp;&nbsp;<b>//Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.</b><br>
    &nbsp;}<br>
  }<br>
  </code>`;

  /*
  private
  */
  sortida += '<h3>private</h3>';

  /*
  'private' is like 'protected', but doesn’t allow access to the member even from subclasses:

  class Base {
    private x = 0;
  }
  const b = new Base();
  // Can't access from outside the class
  console.log(b.x);
  //Property 'x' is private and only accessible within class 'Base'.
  
  class Derived extends Base {
    showX() {
      // Can't access in subclasses
      console.log(this.x);
  //Property 'x' is private and only accessible within class 'Base'.
    }
  }

  */

  class Base3 {
    private x = 0;
  }
  const b = new Base3();
  //console.log(b.x); // ERROR
  // Can't access from outside the class
  //Property 'x' is private and only accessible within class 'Base'.

  class Derived3 extends Base3 {
    showX() {
      //console.log(this.x); // ERROR
      // Can't access in subclasses
      //Property 'x' is private and only accessible within class 'Base'.
    }
  }

  sortida += `<code>
  <b>//<mark>private</mark> is like <mark>protected</mark>, but doesn't allow access to the member even from subclasses</b><br><br>
  class Base {<br>
    &nbsp;<mark>private</mark> x = 0;<br>
  }<br><br>
  const b = new Base();<br>
  <b>console.log(b.x); // ERROR</b><br>
  <mark>// Can't access from outside the class</mark><br>
  <b>//Property 'x' is private and only accessible within class 'Base'.</b><br><br>
  class Derived extends Base {<br>
    &nbsp;showX() {<br>
      &nbsp;&nbsp;<b>console.log(this.x); // ERROR</b><br>
      &nbsp;&nbsp;<mark>// Can't access in subclasses</mark><br>
      &nbsp;&nbsp;<b>//Property 'x' is private and only accessible within class 'Base'.</b><br>
    &nbsp;}<br>
  }<br>
  </code>`;

  /*
  Because private members aren’t visible to derived classes, a derived class can’t increase their visibility:

  class Base {
    private x = 0;
  }
  class Derived extends Base {
  Class 'Derived' incorrectly extends base class 'Base'.
    Property 'x' is private in type 'Base' but not in type 'Derived'.
    x = 1;
  }
  */

  sortida += `<code>
  <b>//a derived class can't increase their visibility</b><br><br>
  class Base {<br>
    &nbsp;<mark>private</mark> x = 0;<br>
  }<br><br>
  class Derived extends Base {<br>
    &nbsp;<mark>x = 1; //ERROR</mark><br>
    &nbsp;<b>//Class 'Derived' incorrectly extends base class 'Base'.<br>
    &nbsp;Property 'x' is private in type 'Base' but not in type 'Derived'.</b><br>
  }<br>
  </code>`;

  /*
  Cross-instance private access

  Different OOP languages disagree about whether different instances of the same class 
  may access each others’ private members. 
  While languages like Java, C#, C++, Swift, and PHP allow this, Ruby does not.

  TypeScript does allow cross-instance private access:

  class A {
    private x = 10;
  
    public sameAs(other: A) {
      // No error
      return other.x === this.x;
    }
  }
  */

  /*
  Caveats
  */
  sortida += '<h4>Caveats</h4>';

  /*
  Like other aspects of TypeScript’s type system, 
  private and protected are only enforced during type checking.

  This means that JavaScript runtime constructs like in or simple property lookup can still access 
  a private or protected member:

  class MySafe {
    private secretKey = 12345;
  }
  
  // In a JavaScript file...
  const s = new MySafe();
  // Will print 12345
  console.log(s.secretKey);



  private also allows access using bracket notation during type checking. 
  This makes private-declared fields potentially easier to access for things like unit tests, with the drawback that these fields are soft private and don’t strictly enforce privacy.

  class MySafe {
    private secretKey = 12345;
  }
  
  const s = new MySafe();
  
  // Not allowed during type checking
  console.log(s.secretKey);
  Property 'secretKey' is private and only accessible within class 'MySafe'.

  */

  class MySafe {
    private secretKey = 12345;
  }

  const safe = new MySafe();
  //console.log(safe.secretKey); // ERROR
  // Not allowed during type checking
  //Property 'secretKey' is private and only accessible within class 'MySafe'.

  console.log(safe['secretKey']); // OK

  sortida += `<code>
  class MySafe {<br>
    &nbsp;private secretKey = 12345;<br>
  }<br><br>   
  const safe = new MySafe();<br>
  <b>console.log(safe.secretKey); // ERROR</b><br>
  <mark>// Not allowed during type checking</mark><br>
  <b>//Property 'secretKey' is private and only accessible within class 'MySafe'.</b><br><br>   
  <b>console.log(safe["secretKey"]);  // OK</b><br>
  <mark>//private also allows access using bracket notation during type checking</mark><br>
  </code>`;

  /*
  Unlike TypeScripts’s private, 
  JavaScript’s private fields (#) remain private after compilation 
  and do not provide the previously mentioned escape hatches like bracket notation access, 
  making them hard private.

  class Dog {
    #barkAmount = 0;
    personality = "happy";
  
    constructor() {}
  }

  When compiling to ES2021 or less, TypeScript will use WeakMaps in place of #.

  "use strict";
  var _Dog_barkAmount;
  class Dog {
      constructor() {
          _Dog_barkAmount.set(this, 0);
          this.personality = "happy";
      }
  }
  _Dog_barkAmount = new WeakMap();


  If you need to protect values in your class from malicious actors, 
  you should use mechanisms that offer hard runtime privacy, such as closures, WeakMaps, 
  or private fields. 
  Note that these added privacy checks during runtime could affect performance.

  */

  class Dog {
    //#barkAmount = 0;
    //Private identifiers are only available when targeting ECMAScript 2015 and higher
    personality = 'happy';
    constructor() {}
  }

  sortida += `<code>
  <b>//hard private: JavaScript's private fields (#) remain private after compilation</b><br><br>
  class Dog {<br>
    &nbsp;<mark>#</mark>barkAmount = 0;<br>
    &nbsp;<mark>//Private identifiers are only available when targeting ECMAScript 2015 and higher</mark><br>
    &nbsp;personality = "happy";<br>
    &nbsp;constructor() {}<br>
  }<br><br>
  <b>//When compiling to ES2021 or less, TypeScript will use <mark>WeakMaps</mark> in place of #</b><br>
  </code>`;

  return sortida;
};

const staticMembers = (title: string) => {
  /*
  Static Members
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  Classes may have static members.
  These members aren’t associated with a particular instance of the class.
  They can be accessed through the class constructor object itself:

  class MyClass {
    static x = 0;
    static printX() {
      console.log(MyClass.x);
    }
  }
  console.log(MyClass.x);
  MyClass.printX();

   */

  class MyClass {
    static x = 0;
    static printX() {
      console.log(MyClass.x);
    }
  }
  console.log(MyClass.x);
  MyClass.printX();

  sortida += `<code>
  <b>//These members aren't associated with a particular instance of the class.<br>
  They can be accessed through the class constructor object itself</b><br>
  <mark>No cal instanciar l'objecte per utilitzar-ho</mark><br><br>
  class MyClass {<br>
    &nbsp;<mark>static</mark> x = 0;<br>
    &nbsp;<mark>static</mark> printX() {<br>
      &nbsp;&nbsp;console.log(MyClass.x);<br>
    &nbsp;}<br>
  }<br>
  console.log(MyClass.x);<br>
  MyClass.printX();<br>
  </code>`;

  /*
  Static members can also use the same public, protected, and private visibility modifiers:

  class MyClass {
    private static x = 0;
  }
  console.log(MyClass.x);
  //Property 'x' is private and only accessible within class 'MyClass'.
  */

  class MyClass2 {
    private static x = 0;
  }
  //console.log(MyClass2.x); //ERROR
  //Property 'x' is private and only accessible within class 'MyClass'.

  sortida += `<code>
  <b>//<mark>Static</mark> members can also use the same <mark>public</mark>, <mark>protected</mark>, and <mark>private</mark> visibility modifiers</b><br><br>
  class MyClass {<br>
    &nbsp;<mark>private static</mark> x = 0;<br>
  }<br>
  <mark>console.log(MyClass.x); //ERROR</mark><br>
  <b>//Property 'x' is private and only accessible within class 'MyClass'.</b><br>
  </code>`;

  /*
  Static members are also inherited:

  class Base {
    static getGreeting() {
      return "Hello world";
    }
  }
  class Derived extends Base {
    myGreeting = Derived.getGreeting();
  }
  */

  class Base {
    static getGreeting() {
      return 'Hello world';
    }
  }
  class Derived extends Base {
    myGreeting = Derived.getGreeting();
  }

  sortida += `<code>
  <mark>//Static members are also inherited</mark><br><br>
  class Base {<br>
    &nbsp;static getGreeting() {<br>
      &nbsp;&nbsp;return "Hello world";<br>
    &nbsp;}<br>
  }<br>
  class Derived <mark>extends</mark> Base {<br>
    &nbsp;myGreeting = Derived.getGreeting();<br>
  }<br>
  </code>`;

  /*
  Special Static Names
  */
  sortida += '<h4>Special Static Names</h4>';

  /*
  It’s generally not safe/possible to overwrite properties from the Function prototype. 
  Because classes are themselves functions that can be invoked with new, 
  certain static names can’t be used. 
  Function properties like name, length, and call aren’t valid to define as static members:

  class S {
    static name = "S!";
  Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
  }
  */

  sortida += `<code>
  <b>//Function properties like <mark>name</mark>, <mark>length</mark>, and <mark>call</mark> aren't valid to define as static members<br><br>
  class S {<br>
    &nbsp;<mark>static name = "S!"; //ERROR</mark><br>
    &nbsp;<b>//Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.</b><br>
  }
  </code>`;

  /*
  Why No Static Classes?
  */
  sortida += '<h4>Why No Static Classes?</h4>';

  /*
  TypeScript (and JavaScript) don’t have a construct called static class the same way as, 
  for example, C# does.

  Those constructs only exist because those languages force all data and functions to be inside a class;
  because that restriction doesn’t exist in TypeScript, there’s no need for them. 
  A class with only a single instance is typically just represented as a normal object 
  in JavaScript/TypeScript.

  For example, we don’t need a “static class” syntax in TypeScript because a regular object 
  (or even top-level function) will do the job just as well:

  // Unnecessary "static" class
  class MyStaticClass {
    static doSomething() {}
  }
  
  // Preferred (alternative 1)
  function doSomething() {}
  
  // Preferred (alternative 2)
  const MyHelperObject = {
    dosomething() {},
  };
  */

  sortida += `<code>
  <mark>// Unnecessary "static" class</mark><br>
  class MyStaticClass {<br>
    &nbsp;static doSomething() {}<br>
  }<br><br>   
  <mark>// Preferred (alternative 1)</mark><br>
  function doSomething() {}<br><br>
  <mark>// Preferred (alternative 2)</mark><br>
  const MyHelperObject = {<br>
    &nbsp;dosomething() {},<br>
  };<br>
  </code>`;

  return sortida;
};

const staticBlocksClasses = (title: string) => {
  /*
  static Blocks in Classes
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  Static blocks allow you to write a sequence of statements with their own scope 
  that can access private fields within the containing class. 
  This means that we can write initialization code with all the capabilities of writing statements, 
  no leakage of variables, and full access to our class’s internals.

  class Foo {
      static #count = 0;
  
      get count() {
          return Foo.#count;
      }
  
      static {
          try {
              const lastInstances = loadLastInstances();
              Foo.#count += lastInstances.length;
          }
          catch {}
      }
  }
   */

  sortida += `<code>
  test
  </code>`;

  return sortida;
};

const genericClasses = (title: string) => {
  /*
  Generic Classes
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  Classes, much like interfaces, can be generic. 
  When a generic class is instantiated with new, 
  its type parameters are inferred the same way as in a function call:

  class Box<Type> {
    contents: Type;
    constructor(value: Type) {
      this.contents = value;
    }
  }
  
  const b = new Box("hello!");
  //const b: Box<string>


  Classes can use generic constraints and defaults the same way as interfaces.

   */

  class Box<Type> {
    contents: Type;
    constructor(value: Type) {
      this.contents = value;
    }
  }

  const b1 = new Box('hello!');
  //const b: Box<string>
  const b2 = new Box(666);
  //const b2: Box<number>
  console.log(b1);
  console.log(b2);

  sortida += `<code>
  <b>//Classes, much like interfaces, can be <mark>generic</mark></b><br><br>
  class Box<mark>&lt;Type&gt;</mark> {<br>
    &nbsp;contents: <mark>Type</mark>;<br>
    &nbsp;constructor(value: <mark>Type</mark>) {<br>
      &nbsp;&nbsp;this.contents = value;<br>
    &nbsp;}<br>
  }<br><br>
  const b1 = new Box('hello!');<br>
  <mark>//const b: Box<string></mark><br>
  const b2 = new Box(666);<br>
  <mark>//const b2: Box<number></mark><br>
  </code>`;

  /*
  Type Parameters in Static Members
  */
  sortida += '<h3>Type Parameters in Static Members</h3>';

  /*

  This code isn’t legal, and it may not be obvious why:

  class Box<Type> {
    static defaultValue: Type; // ERROR
  //Static members cannot reference class type parameters.
  }

  Remember that types are always fully erased! 
  At runtime, there’s only one Box.defaultValue property slot. 
  This means that setting Box<string>.defaultValue (if that were possible) 
  would also change Box<number>.defaultValue - not good. 
  The static members of a generic class can never refer to the class’s type parameters.
  */

  sortida += `<code>
  <b>//The static members of a generic class can never refer to the class's type parameters</b><br><br>
  class Box<mark>&lt;Type&gt;</mark> {<br>
    &nbsp;<mark>static</mark> defaultValue: <mark>Type</mark>; <b>//ERROR</b><br>
  <b>//Static members cannot reference class type parameters.</b><br>
  }
  </code>`;

  return sortida;
};

const thisRuntimeClasses = (title: string) => {
  /*
  this at Runtime in Classes
  */
  let sortida = `<h2 id="${title}">${title}</h2>`;

  /*
  It’s important to remember that TypeScript doesn’t change the runtime behavior of JavaScript, 
  and that JavaScript is somewhat famous for having some peculiar runtime behaviors.

  JavaScript’s handling of this is indeed unusual:

  class MyClass {
    name = "MyClass";
    getName() {
      return this.name;
    }
  }
  const c = new MyClass();
  const obj = {
    name: "obj",
    getName: c.getName,
  };
  
  // Prints "obj", not "MyClass"
  console.log(obj.getName());


  Long story short, by default, 
  the value of this inside a function depends on how the function was called. 
  In this example, because the function was called through the obj reference, 
  its value of 'this' was obj rather than the class instance.

  This is rarely what you want to happen! 
  TypeScript provides some ways to mitigate or prevent this kind of error.


   */

  class MyClass {
    name = 'MyClass';
    getName() {
      return this.name;
    }
  }
  const c = new MyClass();
  const obj = {
    name: 'obj',
    getName: c.getName
  };

  console.log(obj.getName());
  // Prints "obj", not "MyClass"

  sortida += `<code>
  <b>//TypeScript doesn't change the runtime behavior of JavaScript,<br>
  and that JavaScript is somewhat famous for having some peculiar runtime behaviors</b><br><br>
  class MyClass {<br>
    &nbsp;name = 'MyClass';<br>
    &nbsp;getName() {<br>
      &nbsp;&nbsp;return <mark>this</mark>.name;<br>
    &nbsp;}<br>
  }<br>
  const c = new MyClass();<br>
  const obj = {<br>
    &nbsp;name: 'obj',<br>
    &nbsp;getName: c.getName<br>
  };<br>
  console.log(obj.getName());<br>
  <mark>// Prints "obj", not "MyClass"</mark><br><br>
  //the value of <mark>this</mark> inside a function depends on how the function was called<br>
  <mark>but TypeScript provides some ways to mitigate or prevent this kind of error</mark><br>
  </code>`;

  /*
  Arrow Functions
  */
  sortida += '<h3>Arrow Functions</h3>';

  /*
  If you have a function that will often be called in a way that loses its this context, 
  it can make sense to use an arrow function property instead of a method definition:

  class MyClass {
    name = "MyClass";
    getName = () => {
      return this.name;
    };
  }
  const c = new MyClass();
  const g = c.getName;
  // Prints "MyClass" instead of crashing
  console.log(g());

  This has some trade-offs:

  - The 'this' value is guaranteed to be correct at runtime, 
  even for code not checked with TypeScript
  - This will use more memory, 
  because each class instance will have its own copy of each function defined this way
  - You can’t use super.getName in a derived class, 
  because there’s no entry in the prototype chain to fetch the base class method from
  */

  class MyClass2 {
    name = 'MyClass';
    getName = () => {
      return this.name;
    };
  }
  const c2 = new MyClass2();
  const g = c2.getName;
  // Prints "MyClass" instead of crashing
  console.log(g());

  sortida += `<code>
  <b>//with arrow function works, but not the best way</b><br><br>
  class MyClass {<br>
    &nbsp;name = "MyClass";<br>
    &nbsp;<mark>getName = () => {</mark><br>
      &nbsp;return <mark>this</mark>.name;<br>
    &nbsp;};<br>
  }<br>
  const c = new MyClass();<br>
  const g = c.getName;<br>
  console.log(g());
  <mark>// Prints "MyClass" instead of crashing</mark>
  </code>`;

  /*
  this parameters
  */
  sortida += '<h3>this parameters</h3>';

  /*
  In a method or function definition, 
  an initial parameter named this has special meaning in TypeScript. 
  These parameters are erased during compilation:

  // TypeScript input with 'this' parameter
  function fn(this: SomeType, x: number) {
    //...
  }

  // JavaScript output
  function fn(x) {
    //...
  }

  TypeScript checks that calling a function with a this parameter is done so with a correct context. 
  Instead of using an arrow function, 
  we can add a this parameter to method definitions to statically enforce 
  that the method is called correctly:

  class MyClass {
    name = "MyClass";
    getName(this: MyClass) {
      return this.name;
    }
  }
  const c = new MyClass();
  // OK
  c.getName();
  
  // Error, would crash
  const g = c.getName;
  console.log(g());
  //The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.

  This method makes the opposite trade-offs of the arrow function approach:

  - JavaScript callers might still use the class method incorrectly without realizing it
  - Only one function per class definition gets allocated, rather than one per class instance
  - Base method definitions can still be called via super.

  */

  class MyClass3 {
    name = 'MyClass';
    getName(this: MyClass3) {
      return this.name;
    }
  }
  const c3 = new MyClass3();
  // OK
  c3.getName();

  // Error, would crash
  const g3 = c3.getName;
  //console.log(g3()); //ERROR
  //The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.

  sortida += `<code>
  <b>//TypeScript checks that calling a function with a <mark>this</mark> parameter is done so with a correct context.<br>
  Instead of using an arrow function, we can add a this parameter to method definitions to statically enforce that the method is called correctly:</b><br><br>
  class MyClass {<br>
    &nbsp;name = "MyClass";<br>
    &nbsp;getName(<mark>this: MyClass</mark>) {<br>
      &nbsp;&nbsp;return <mark>this</mark>.name;<br>
    &nbsp;}<br>
  }<br><br>
  const c = new MyClass();<br>
  c.getName(); <b>//OK</b> <br><br>   
  <mark>// Error, would crash</mark><br>
  const g = c.getName;<br>
  console.log(g()); <b>//ERROR</b><br>
  <b>//The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.</b><br>
  </code>`;

  return sortida;
};

const thisTypes = (title: string) => {
  /*
  this Types
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
  sortida.innerHTML += staticMembers(h2[3]);
  //sortida.innerHTML += staticBlocksClasses(h2[4]);
  sortida.innerHTML += genericClasses(h2[4]);
  sortida.innerHTML += thisRuntimeClasses(h2[5]);
  sortida.innerHTML += thisTypes(h2[6]);
}
