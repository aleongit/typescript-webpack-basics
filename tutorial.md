# The TypeScript Handbook
- https://www.typescriptlang.org/docs/handbook/intro.html

## TypeScript for JavaScript Programmers
- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

## The Basics
- https://www.typescriptlang.org/docs/handbook/2/basic-types.html




## Everyday Types
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

### The primitives: string, number, and boolean

JavaScript has three very commonly used primitives: string, number, and boolean. Each has a corresponding type in TypeScript. As you might expect, these are the same names you’d see if you used the JavaScript typeof operator on a value of those types:

string represents string values like "Hello, world"
number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
boolean is for the two values true and false
The type names String, Number, and Boolean (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.