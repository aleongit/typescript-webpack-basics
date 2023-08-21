import { montaPagina } from '../init';
import { getImgWithLink } from '../helpers';

import '../main.css';
//import "./styles.css"; //component styles

import png1 from '../img/TypeScript Types.png';
import png2 from '../img/TypeScript Interfaces.png';
const imatges = [png1, png2];

//https://www.typescriptlang.org/docs/handbook/2/objects.html

const quickReference = () => {
  /*
Quick Reference
*/

  let sortida = '<h2>Quick Reference</h2>';

  /*
  We have cheat-sheets available for both type and interface, 
  if you want a quick look at the important every-day syntax at a glance.
  */

  return sortida;
};

const propertyModifiers = () => {
  /*
  Property Modifiers
  */
  let sortida = '<h2>Property Modifiers</h2>';

  /*
  Each property in an object type can specify a couple of things: 
  the type, whether the property is optional, and whether the property can be written to.

  Optional Properties
   */
  sortida += '<h3>Optional Properties</h3>';

  /*
  Much of the time, we’ll find ourselves dealing with objects that might have a property set. 
  In those cases, we can mark those properties as optional by adding a question mark (?) 
  to the end of their names.

  interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
  }
  
  function paintShape(opts: PaintOptions) {
    // ...
  }
  
  const shape = getShape();
  paintShape({ shape });
  paintShape({ shape, xPos: 100 });
  paintShape({ shape, yPos: 100 });
  paintShape({ shape, xPos: 100, yPos: 100 });

  In this example, both xPos and yPos are considered optional.
  We can choose to provide either of them, so every call above to paintShape is valid. 
  All optionality really says is that if the property is set, it better have a specific type.

  We can also read from those properties - but when we do under strictNullChecks, 
  TypeScript will tell us they’re potentially undefined.

  function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos;          
            (property) PaintOptions.xPos?: number | undefined
  let yPos = opts.yPos;       
            (property) PaintOptions.yPos?: number | undefined
  // ...
  }


  In JavaScript, even if the property has never been set, 
  we can still access it - it’s just going to give us the value undefined. 
  We can just handle undefined specially by checking for it.

  function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
        
  let xPos: number
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;
        
  let yPos: number
    // ...
  }

  Note that this pattern of setting defaults for unspecified values is so common 
  that JavaScript has syntax to support it.

  function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    console.log("x coordinate at", xPos);
                                    
  (parameter) xPos: number
    console.log("y coordinate at", yPos);
                                    
  (parameter) yPos: number
    // ...
  }

  Here we used a destructuring pattern for paintShape’s parameter, 
  and provided default values for xPos and yPos. 
  Now xPos and yPos are both definitely present within the body of paintShape, 
  but optional for any callers to paintShape.

  Note that there is currently no way to place type annotations within destructuring patterns. 
  This is because the following syntax already means something different in JavaScript.

  function draw({ shape: Shape, xPos: number = 100 ... }) {
    render(shape);
  Cannot find name 'shape'. Did you mean 'Shape'?
    render(xPos);
  Cannot find name 'xPos'.
  }

  In an object destructuring pattern, 
  shape: Shape means “grab the property shape and redefine it locally as a variable named Shape. 
  Likewise xPos: number creates a variable named number whose value is based on the parameter’s xPos.



    */
  interface Shape {}

  interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
  }

  /*
  function paintShape(opts: PaintOptions) {
    // ...
    console.log(opts);
    let xPos = opts.xPos;
    //(property) PaintOptions.xPos?: number | undefined
    let yPos = opts.yPos;
    //(property) PaintOptions.yPos?: number | undefined
  }
  */
  /*
  function paintShape(opts: PaintOptions) {
    console.log(opts);
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;
    console.log(xPos, yPos);
    // ...
  }
  */
  function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    console.log('x coordinate at', xPos);
    console.log('y coordinate at', yPos);
    // ...
  }

  const shape: Shape = {};
  paintShape({ shape });
  paintShape({ shape, xPos: 100 });
  paintShape({ shape, yPos: 100 });
  paintShape({ shape, xPos: 100, yPos: 100 });

  sortida += `<code>
  interface Shape {}<br>
  interface PaintOptions {
    &nbsp;shape: Shape;
    &nbsp;xPos<mark>?</mark>: number;
    &nbsp;yPos<mark>?</mark>: number;
  }<br><br>
  function paintShape(opts: PaintOptions) {<br>
    &nbsp;// ...<br>
    &nbsp;let xPos = opts.xPos;<br>
    <mark>&nbsp;//(property) PaintOptions.xPos?: number | undefined</mark><br>
    &nbsp;let yPos = opts.yPos;<br>
    <mark>&nbsp;//(property) PaintOptions.yPos?: number | undefined</mark><br>
  }<br><br>
  const shape: Shape = {};<br>
  paintShape({ shape });<br>
  paintShape({ shape, xPos: 100 });<br>
  paintShape({ shape, yPos: 100 });<br>
  paintShape({ shape, xPos: 100, yPos: 100 });<br>
  </code>`;

  sortida += `<code>
  <b>//we can check undefined</b><br>
  function paintShape(opts: PaintOptions) {<br>
    &nbsp;<mark>let xPos = opts.xPos === undefined ? 0 : opts.xPos;</mark><br>
    &nbsp;<mark>let yPos = opts.yPos === undefined ? 0 : opts.yPos;</mark><br>
    &nbsp;// ...<br>
  }<br>
  </code>`;

  sortida += `<code>
  <b>//or set defaults</b><br>
  function paintShape(<mark>{ shape, xPos = 0, yPos = 0 }: PaintOptions</mark>) {<br>
    &nbsp;console.log('x coordinate at', xPos);<br>
    &nbsp;console.log('y coordinate at', yPos);<br>
    &nbsp;// ...<br>
  }<br>
  </code>`;

  /*
  readonly Properties
  */
  sortida += '<h3>readonly Properties</h3>';

  /*
  Properties can also be marked as readonly for TypeScript.
  While it won’t change any behavior at runtime, 
  a property marked as readonly can’t be written to during type-checking.

  interface SomeType {
  readonly prop: string;
}
 
  function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
  
    obj.prop = "hello";  //error
    // But we can't re-assign it.
    //Cannot assign to 'prop' because it is a read-only property.
  }



  Using the readonly modifier doesn’t necessarily imply that a value is totally immutable 
  - or in other words, 
  that its internal contents can’t be changed. 
  It just means the property itself can’t be re-written to.

  interface Home {
    readonly resident: { name: string; age: number };
  }
  
  function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
  }
  
  function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    home.resident = {
  Cannot assign to 'resident' because it is a read-only property.
      name: "Victor the Evictor",
      age: 42,
    };
  }

  It’s important to manage expectations of what readonly implies. 
  It’s useful to signal intent during development time for TypeScript on how an object should be used. 
  TypeScript doesn’t factor in whether properties on two types are readonly 
  when checking whether those types are compatible, 
  so readonly properties can also change via aliasing.

  interface Person {
  name: string;
  age: number;
  }
  
  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
  
  let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
  };
  
  // works
  let readonlyPerson: ReadonlyPerson = writablePerson;
  
  console.log(readonlyPerson.age); // prints '42'
  writablePerson.age++;
  console.log(readonlyPerson.age); // prints '43'


  Using mapping modifiers, you can remove readonly attributes.
  https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers

  */

  interface SomeType {
    readonly prop: string;
  }

  function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    //obj.prop = "hello";  //error
    // But we can't re-assign it.
    //Cannot assign to 'prop' because it is a read-only property.
  }

  sortida += `<code>
  interface SomeType {<br>
    &nbsp;<mark>readonly</mark> prop: string;<br>
  }<br><br>
  function doSomething(obj: SomeType) {<br>
    &nbsp;<mark>// We can read from 'obj.prop'</mark><br>
    &nbsp;console.log('prop has the value ' + obj.prop}');<br>
    &nbsp;<mark>//obj.prop = "hello";  //error<br>
    &nbsp;// But we can't re-assign it.</mark><br>
    &nbsp;<b>//Cannot assign to 'prop' because it is a read-only property.</b><br>
  }</br>
  </code>`;

  /*
  Index Signatures
  */
  sortida += '<h3>Index Signatures</h3>';
  /*
  Sometimes you don’t know all the names of a type’s properties ahead of time, 
  but you do know the shape of the values.

  In those cases you can use an index signature to describe the types of possible values, for example:


  interface StringArray {
    [index: number]: string;
  }
  
  const myArray: StringArray = getStringArray();
  const secondItem = myArray[1];       
  const secondItem: string
  

  Above, we have a StringArray interface which has an index signature. 
  This index signature states that when a StringArray is indexed with a number, 
  it will return a string.

  Only some types are allowed for index signature properties: string, number, symbol, 
  template string patterns, and union types consisting only of these.

  It is possible to support both types of indexers...
  While string index signatures are a powerful way to describe the “dictionary” pattern, 
  they also enforce that all properties match their return type. 
  This is because a string index declares that obj.property is also available as obj["property"]. 
  In the following example, name’s type does not match the string index’s type, 
  and the type checker gives an error:

  interface NumberDictionary {
  [index: string]: number;
 
  length: number; // ok
  name: string;
      Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
  }


  However, properties of different types are acceptable if the index signature 
  is a union of the property types:

  interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
  }

  Finally, you can make index signatures readonly in order to prevent assignment to their indices:

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  
  let myArray: ReadonlyStringArray = getReadOnlyStringArray();
  myArray[2] = "Mallory";
  //Index signature in type 'ReadonlyStringArray' only permits reading.
  
  You can’t set myArray[2] because the index signature is readonly.
  
  */

  interface NumberDictionary {
    [index: string]: number;
    length: number; // ok
    //name: string; // error
    //Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
  }

  interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
  }

  sortida += `<code>
  <b>//per crear un objecte el qual encara no sabem les propietats (objecte dinàmic)</b><br>
  <b>//es defineix una key (de tipus normalment string) i el tipus del valor que contindrà</b><br>
  interface NumberDictionary {<br>
    &nbsp;<mark>[index: string]: number;</mark><br>
    &nbsp;length: number; // ok<br>
    &nbsp;<mark>//name: string; // error</mark><br>
    &nbsp;<b>//Property 'name' of type 'string' is not assignable to 'string' index type 'number'.</b><br>
  }<br>
  </code>`;

  sortida += `<code>
  interface NumberOrStringDictionary {<br>
    &nbsp;<mark>[index: string]: number | string;</mark><br>
    &nbsp;length: number; <b>//ok, length is a number</b><br>
    &nbsp;name: string; <b>//ok, name is a string</b><br>
  }<br>
  </code>`;

  return sortida;
};

const excessPropertyChecks = () => {
  /*
  Excess Property Checks
  */
  let sortida = '<h2>Excess Property Checks</h2>';

  /*
  Where and how an object is assigned a type can make a difference in the type system. 
  O
  ne of the key examples of this is in excess property checking, 
  which validates the object more thoroughly when it is created 
  and assigned to an object type during creation.

  interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || "red",
      area: config.width ? config.width * config.width : 20,
    };
  }
 
  let mySquare = createSquare({ colour: "red", width: 100 });
  Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
    Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?

  Notice the given argument to createSquare is spelled colour instead of color. 
  In plain JavaScript, this sort of thing fails silently.

  You could argue that this program is correctly typed, 
  since the width properties are compatible, there’s no color property present, 
  and the extra colour property is insignificant.

  However, TypeScript takes the stance that there’s probably a bug in this code. 
  Object literals get special treatment and undergo excess property checking 
  when assigning them to other variables, or passing them as arguments. 
  If an object literal has any properties that the “target type” doesn’t have, you’ll get an error:

  let mySquare = createSquare({ colour: "red", width: 100 });
  Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
  Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
  
  Getting around these checks is actually really simple. 
  
  The easiest method is to just use a type assertion:

  let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

  However, a better approach might be to add a string index signature 
  if you’re sure that the object can have some extra properties that are used in some special way. 
  If SquareConfig can have color and width properties with the above types, 
  but could also have any number of other properties, then we could define it like so:

  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }

  Here we’re saying that SquareConfig can have any number of properties, 
  and as long as they aren’t color or width, their types don’t matter.

  One final way to get around these checks, 
  which might be a bit surprising, is to assign the object to another variable: 
  Since assigning squareOptions won’t undergo excess property checks, 
  the compiler won’t give you an error:

  let squareOptions = { colour: "red", width: 100 };
  let mySquare = createSquare(squareOptions);

  The above workaround will work as long as you have a common property 
  between squareOptions and SquareConfig. 
  In this example, it was the property width. It will however, 
  fail if the variable does not have any common object property. 
  For example:

  let squareOptions = { colour: "red" };
  let mySquare = createSquare(squareOptions);
  Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.

  Keep in mind that for simple code like above, 
  you probably shouldn’t be trying to “get around” these checks. 
  For more complex object literals that have methods and hold state, 
  you might need to keep these techniques in mind, but a majority of excess property errors 
  are actually bugs.

  That means if you’re running into excess property checking problems for something like option bags, 
  you might need to revise some of your type declarations. 
  In this instance, if it’s okay to pass an object with both 
  a color or colour property to createSquare, 
  you should fix up the definition of SquareConfig to reflect that.

    */

  interface SquareConfig {
    color?: string;
    width?: number;
  }

  /*
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }
  */

  function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
      color: config.color || 'red',
      area: config.width ? config.width * config.width : 20
    };
  }
  //let mySquare = createSquare({ colour: 'red', width: 100 }); //error
  //Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
  //Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'.
  //let mySquare = createSquare({ color: 'red', width: 100 } as SquareConfig);
  let squareOptions = { colour: 'red', width: 100 };
  let mySquare = createSquare(squareOptions);
  console.log(mySquare);

  sortida += `<code>
  <b>//typescript pot interpretar erròniament com error de validació<br>
  //la modificació d'un tipus prèviament ja definit</b><br>
  interface SquareConfig {<br>
    &nbsp;color?: string;<br>
    &nbsp;width?: number;<br>
  }<br><br>
  function createSquare(config: SquareConfig): { color: string; area: number } {<br>
    &nbsp;return {<br>
      &nbsp;&nbsp;color: config.color || 'red',<br>
      &nbsp;&nbsp;area: config.width ? config.width * config.width : 20<br>
    &nbsp;};<br>
  }<br><br>
  <mark>let mySquare = createSquare({ colour: "red", width: 100 }); //error</mark><br>
  <b>//Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.<br>
  //Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'</b><br>
  </code>`;

  sortida += `<code>
  <b>//solució: use a type assertion</b><br>
  let mySquare = createSquare({ color: 'red', width: 100 } <mark>as SquareConfig</mark>);<br>
  <b>//però també permetria</b><br>
  let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
  </code>`;

  sortida += `<code>
  <b>//solució més segura: add a string index signature </b><br>
  interface SquareConfig {<br>
    &nbsp;color?: string;<br>
    &nbsp;width?: number;<br>
    &nbsp;<mark>[propName: string]: any;</mark><br>
  }<br>
  </code>`;

  sortida += `<code>
  <b>//solució assignar a una altra variable per anul·lar la validació</b><br>
  let squareOptions = { colour: 'red', width: 100 };<br>
  let mySquare = createSquare(<mark>squareOptions</mark>);<br>
  </code>`;

  return sortida;
};

const extendingTypes = () => {
  /*
  Extending Types
  */
  let sortida = '<h2>Extending Types</h2>';

  /*

  It’s pretty common to have types that might be more specific versions of other types. 
  For example, we might have a BasicAddress type that describes the fields necessary 
  for sending letters and packages in the U.S.

  interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
  
  In some situations that’s enough, but addresses often have a unit number associated 
  with them if the building at an address has multiple units. 
  We can then describe an AddressWithUnit.

  interface AddressWithUnit {
    name?: string;
    unit: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

  This does the job, but the downside here is that we had to repeat all the other fields 
  from BasicAddress when our changes were purely additive. 
  Instead, we can extend the original BasicAddress type and just add the new fields 
  that are unique to AddressWithUnit.

  interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
  
  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }

  The extends keyword on an interface allows us to effectively copy members from other named types, 
  and add whatever new members we want. 
  This can be useful for cutting down the amount of type declaration boilerplate we have to write, 
  and for signaling intent that several different declarations of the same property might be related. 
  
  For example, AddressWithUnit didn’t need to repeat the street property, 
  and because street originates from BasicAddress, 
  a reader will know that those two types are related in some way.

  interfaces can also extend from multiple types.

  interface Colorful {
    color: string;
  }
  
  interface Circle {
    radius: number;
  }
  
  interface ColorfulCircle extends Colorful, Circle {}
  
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };

  */

  sortida += `<code>
  interface BasicAddress {<br>
    &nbsp;name?: string;<br>
    &nbsp;street: string;<br>
    &nbsp;city: string;<br>
    &nbsp;country: string;<br>
    &nbsp;postalCode: string;<br>
  }<br>
  interface AddressWithUnit <mark>extends BasicAddress</mark> {<br>
    &nbsp;unit: string;<br>
  }<br>
  </code>`;

  sortida += `<code>
  <b>//interfaces can also extend from multiple types</b><br>
  interface Colorful {<br>
    &nbsp;color: string;<br>
  }<br><br>
  interface Circle {<br>
    &nbsp;radius: number;<br>
  }<br><br>
  interface ColorfulCircle <mark>extends Colorful, Circle {}</mark><br><br>
  const cc: ColorfulCircle = {<br>
    &nbsp;color: "red",<br>
    &nbsp;radius: 42,<br>
  };<br>
  </code>`;

  return sortida;
};

const intersectionTypes = () => {
  /*
  Intersection Types
  */
  let sortida = '<h2>Intersection Types</h2>';

  /*
  interfaces allowed us to build up new types from other types by extending them. 
  TypeScript provides another construct called intersection types that is mainly used 
  to combine existing object types.

  An intersection type is defined using the & operator.

  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
 
  type ColorfulCircle = Colorful & Circle;

  Here, we’ve intersected Colorful and Circle to produce a new type that has all the members of Colorful and Circle.

  function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
  
  // okay
  draw({ color: "blue", radius: 42 });
  
  // oops
  draw({ color: "red", raidus: 42 });
  Argument of type '{ color: string; raidus: number; }' is not assignable to parameter of type 'Colorful & Circle'.
    Object literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?


    Interfaces vs. Intersections
  We just looked at two ways to combine types which are similar, but are actually subtly different. 
  With interfaces, we could use an extends clause to extend from other types, 
  and we were able to do something similar with intersections and name the result with a type alias. 
  The principal difference between the two is how conflicts are handled, 
  and that difference is typically one of the main reasons why you’d pick one over 
  the other between an interface and a type alias of an intersection type.
  */

  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
  //intersection types that is mainly used to combine existing object types
  type ColorfulCircle = Colorful & Circle;

  function draw(circle: ColorfulCircle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
  // okay
  draw({ color: 'blue', radius: 42 });
  // oops
  //draw({ color: "red", raidus: 42 });

  sortida += `<code>
  interface Colorful {<br>
    color: string;<br>
  }<br><br>
  interface Circle {<br>
    radius: number;<br>
  }<br><br>
  <mark>//intersection types that is mainly used to combine existing object types</mark><br>
  <b>type ColorfulCircle = Colorful <mark>&</mark> Circle;</b><br><br>
  function draw(circle: ColorfulCircle) {<br>
    console.log(circle.color);<br>
    console.log(circle.radius};<br>
  }<br><br>
  draw({ color: 'blue', radius: 42 });<b>// okay</b><br>
  //draw({ color: "red", raidus: 42 });<b>// oops</b><br>
  </code>`;

  return sortida;
};

const genericObjectTypes = () => {
  /*
  Generic Object Types
  */
  let sortida = '<h2>Generic Object Types</h2>';

  /*
  Let’s imagine a Box type that can contain any value - strings, numbers, Giraffes, whatever.

  interface Box {
    contents: any;
  }

  Right now, the contents property is typed as any, which works, 
  but can lead to accidents down the line.

  We could instead use unknown, but that would mean that in cases where we already know the type 
  of contents, we’d need to do precautionary checks, or use error-prone type assertions.


  interface Box {
    contents: unknown;
  }
  
  let x: Box = {
    contents: "hello world",
  };
  
  // we could check 'x.contents'
  if (typeof x.contents === "string") {
    console.log(x.contents.toLowerCase());
  }
  
  // or we could use a type assertion
  console.log((x.contents as string).toLowerCase());


  One type safe approach would be to instead scaffold out different Box types for every type of contents.

  interface NumberBox {
    contents: number;
  }
  
  interface StringBox {
    contents: string;
  }
  
  interface BooleanBox {
    contents: boolean;
  }

  But that means we’ll have to create different functions, or overloads of functions, to operate on these types.

  function setContents(box: StringBox, newContents: string): void;
  function setContents(box: NumberBox, newContents: number): void;
  function setContents(box: BooleanBox, newContents: boolean): void;
  function setContents(box: { contents: any }, newContents: any) {
    box.contents = newContents;
  }

  That’s a lot of boilerplate. Moreover, we might later need to introduce new types and overloads. 
  This is frustrating, since our box types and overloads are all effectively the same.

  Instead, we can make a generic Box type which declares a type parameter.

  interface Box<Type> {
    contents: Type;
  }

  You might read this as “A Box of Type is something whose contents have type Type”. 
  Later on, when we refer to Box, we have to give a type argument in place of Type.

  let box: Box<string>;

  Think of Box as a template for a real type, 
  where Type is a placeholder that will get replaced with some other type. 
  When TypeScript sees Box<string>, it will replace every instance of Type in Box<Type> with string, 
  and end up working with something like { contents: string }. 
  In other words, Box<string> and our earlier StringBox work identically.

  interface Box<Type> {
    contents: Type;
  }
  interface StringBox {
    contents: string;
  }
  
  let boxA: Box<string> = { contents: "hello" };
  boxA.contents;     
    (property) Box<string>.contents: string
  
  let boxB: StringBox = { contents: "world" };
  boxB.contents;        
    (property) StringBox.contents: string


  Box is reusable in that Type can be substituted with anything. 
  That means that when we need a box for a new type, 
  we don’t need to declare a new Box type at all (though we certainly could if we wanted to).

  interface Box<Type> {
    contents: Type;
  }
  
  interface Apple {
    // ....
  }
  
  // Same as '{ contents: Apple }'.
  type AppleBox = Box<Apple>;


  This also means that we can avoid overloads entirely by instead using generic functions.

  function setContents<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
  }

  It is worth noting that type aliases can also be generic. 
  We could have defined our new Box<Type> interface, which was:

  interface Box<Type> {
    contents: Type;
  }
  
  by using a type alias instead:

  type Box<Type> = {
    contents: Type;
  };

  Since type aliases, unlike interfaces, can describe more than just object types, 
  we can also use them to write other kinds of generic helper types.

  type OrNull<Type> = Type | null;
  type OneOrMany<Type> = Type | Type[];
  type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
    type OneOrManyOrNull<Type> = OneOrMany<Type> | null
  type OneOrManyOrNullStrings = OneOrManyOrNull<string>;          
    type OneOrManyOrNullStrings = OneOrMany<string> | null
  

  We’ll circle back to type aliases in just a little bit.

  */

  interface Box<Type> {
    contents: Type;
  }
  interface StringBox {
    contents: string;
  }

  let boxA: Box<string> = { contents: 'hello' };
  boxA.contents;
  //(property) Box<string>.contents: string

  let boxB: StringBox = { contents: 'world' };
  boxB.contents;
  //(property) StringBox.contents: string

  sortida += `<code>
  <b>//quan no sabem el tipus o pot haber múltiples tipus en la propietat d'un objecte<br>
  //es pot definir com any</b><br>
  interface Box {<br>
    &nbsp;contents: any;<br>
  }<br>
  //o unknow i crear múltiples interfícies i/o funcions overloads<br>
  //...<br>
  <mark>//millor crear un tipus d'objecte genèric</mark><br>
  <b>interface Box<mark>&lt;Type&gt;</mark> {</b><br>
    &nbsp;contents: <mark>Type;</mark><br>
  }<br>
  let boxA: Box<mark>&lt;string&gt;</mark> = { contents: <mark>'hello'</mark> };<br>
  boxA.contents;<br>
  <b>//(property) Box&lt;string&gt;.contents: string</b><br>
  </code>`;

  sortida += `<code>
  <mark>//Box is reusable in that Type can be substituted with anything</mark><br>
  interface Box<mark>&lt;Type&gt;</mark> {<br>
    &nbsp;contents: <mark>Type;</mark><br>
  }<br>
  interface Apple {<br>
    &nbsp;// ....<br>
  }<br>
  type AppleBox = Box<mark>&lt;Apple&gt;</mark>;<br>
  <b>// Same as '{ contents: Apple }'</b><br>
  </code>`;

  sortida += `<code>
  <mark>//i així usar a generic functions</mark><br>
  function setContents<mark>&lt;Type&gt;</mark>(box: Box<mark>&lt;Type&gt;</mark>, newContents: <mark>Type</mark>) {<br>
    &nbsp;box.contents = newContents;<br>
  }<br>
  </code>`;

  sortida += `<code>
  <b>//enlloc d'interfície també es pot crear un type alias</b><br>
  <mark>type Box&lt;Type&gt; = {</mark><br>
    &nbsp;contents: <mark>Type;</mark><br>
  };<br>
  </code>`;

  sortida += `<code>
  <b>//with type alias we can write other kinds of generic helper types</b><br>
  type OrNull&lt;Type&gt; = Type | null;<br>
  type OneOrMany&lt;Type&gt; = Type | Type[];<br>
  type OneOrManyOrNull&lt;Type&gt; = OrNull&lt;OneOrMany&lt;Type&gt;&gt;;<br>
  type OneOrManyOrNullStrings = OneOrManyOrNull&lt;string&gt;;<br>       
  </code>`;

  /*
  The Array Type
  */
  sortida += '<h3>The Array Type</h3>';

  /*
  Generic object types are often some sort of container type that work independently 
  of the type of elements they contain. 
  It’s ideal for data structures to work this way so that they’re re-usable across different data types.

  It turns out we’ve been working with a type just like that throughout this handbook: the Array type. 
  Whenever we write out types like number[] or string[], 
  that’s really just a shorthand for Array<number> and Array<string>.

  function doSomething(value: Array<string>) {
    // ...
  }
  
  let myArray: string[] = ["hello", "world"];
  
  // either of these work!
  doSomething(myArray);
  doSomething(new Array("hello", "world"));


  Much like the Box type above, Array itself is a generic type.

  interface Array<Type> {

    //Gets or sets the length of the array.
    length: number;
  
    //Removes the last element from an array and returns it.
    pop(): Type | undefined;
  
    //Appends new elements to an array, and returns the new length of the array.
    push(...items: Type[]): number;
  
    // ...
  }

    */

  function doSomething(value: Array<string>) {
    // ...
    console.log(value);
  }

  let myArray: string[] = ['hello', 'world'];

  // either of these work!
  doSomething(myArray);
  doSomething(new Array('hello', 'world'));

  sortida += `<code>
  function doSomething(value: <mark>Array&lt;string&gt;</mark>) {<br>
    &nbsp;// ...<br>
    &nbsp;console.log(value);<br>
  }<br>
  let myArray: string[] = ['hello', 'world'];<br>
  // either of these work!<br>
  doSomething(myArray);<br>
  doSomething(new Array('hello', 'world'));<br>
  </code>`;

  sortida += `<code>
  <mark>//Array itself is a generic type</mark><br>
  interface Array&lt;Type&gt; {<br>
    &nbsp;/**<br>
    &nbsp; * Gets or sets the length of the array.<br>
    &nbsp; */<br>
    &nbsp;length: number;<br>
    &nbsp;/**<br>
    &nbsp; * Removes the last element from an array and returns it.<br>
    &nbsp; */<br>
    &nbsp;pop(): Type | undefined;<br>
    &nbsp;/**<br>
    &nbsp; * Appends new elements to an array, and returns the new length of the array.<br>
    &nbsp; */<br>
    &nbsp;push(...items: Type[]): number;<br>
    &nbsp;// ...<br>
  }<br>
  </code>`;

  /*
  The ReadonlyArray Type
  */

  sortida += '<h3>The ReadonlyArray Type</h3>';

  /*
  The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.

  function doStuff(values: ReadonlyArray<string>) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
  
    // ...but we can't mutate 'values'.
    values.push("hello!");
  Property 'push' does not exist on type 'readonly string[]'.
  }

  Much like the readonly modifier for properties, it’s mainly a tool we can use for intent. 
  When we see a function that returns ReadonlyArrays, it tells us 
  we’re not meant to change the contents at all, 
  and when we see a function that consumes ReadonlyArrays, 
  it tells us that we can pass any array into that function without worrying that it will change 
  its contents.

  Unlike Array, there isn’t a ReadonlyArray constructor that we can use.

  new ReadonlyArray("red", "green", "blue");
  'ReadonlyArray' only refers to a type, but is being used as a value here.

  Instead, we can assign regular Arrays to ReadonlyArrays.
  
  const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

  Just as TypeScript provides a shorthand syntax for Array<Type> with Type[], 
  it also provides a shorthand syntax for ReadonlyArray<Type> with readonly Type[].

  ...
  One last thing to note is that unlike the readonly property modifier, 
  assignability isn’t bidirectional between regular Arrays and ReadonlyArrays.

  let x: readonly string[] = [];
  let y: string[] = [];
  
  x = y;
  y = x;
  The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.

  */

  function doStuff(values: ReadonlyArray<string>) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
    // ...but we can't mutate 'values'.
    //values.push("hello!"); //error
    //Property 'push' does not exist on type 'readonly string[]'.
  }

  //new ReadonlyArray("red", "green", "blue"); //error
  //'ReadonlyArray' only refers to a type, but is being used as a value here.

  //Instead, we can assign regular Arrays to ReadonlyArrays.
  const roArray: ReadonlyArray<string> = ['red', 'green', 'blue'];
  doStuff(roArray);

  sortida += `<code>
  function doStuff(values: <mark>ReadonlyArray&lt;string&gt;</mark>) {<br>
    <b>&nbsp;// We can read from 'values'...</b><br>
    &nbsp;const copy = values.slice();<br>
    &nbsp;console.log('The first value is ' + values[0]);<br>
    <b>&nbsp;// ...but we can't mutate 'values'.<br>
    &nbsp;//values.push("hello!"); //error<br>
    &nbsp;//Property 'push' does not exist on type 'readonly string[]'.</b><br>
  }<br><br>
  <b>//Unlike Array, there isn't a ReadonlyArray constructor that we can use</b><br>
  //<mark>new ReadonlyArray("red", "green", "blue"); //error</mark><br>
  <b>//'ReadonlyArray' only refers to a type, but is being used as a value here.</b><br><br>
  <b>//Instead, we can assign regular Arrays to ReadonlyArrays.</b><br>
  <mark>const roArray: ReadonlyArray<string> = ['red', 'green', 'blue'];</mark><br>
  doStuff(roArray);<br>
  </code>`;

  return sortida;
};

montaPagina();

const sortida = document.getElementById('sortida');
if (sortida) {
  sortida.innerHTML += quickReference();
  //add images
  imatges.forEach((img) => {
    sortida.appendChild(getImgWithLink(img));
  });
  sortida.innerHTML += propertyModifiers();
  sortida.innerHTML += excessPropertyChecks();
  sortida.innerHTML += extendingTypes();
  sortida.innerHTML += intersectionTypes();
  sortida.innerHTML += genericObjectTypes();
}
