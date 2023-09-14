export const htmlPageNames = [
  'types',
  'narrowing',
  'functions',
  'objects',
  'manipulation',
  'classes'
] as const; //  aconst assertion per poder exportar els valors de l'array com a tipus

type htmlPageNamesType = (typeof htmlPageNames)[number]; //tipus amb els valors array

//les keys han de ser les de l'array i han de contenir una array d'strings
export const titles: { [Key in htmlPageNamesType]: string[] } = {
  types: [
    'The primitives: string, number, and boolean',
    'Arrays',
    'Any',
    'Type Annotations on Variables',
    'Functions',
    'Object Types',
    'Union Types',
    'Type Aliases',
    'Interfaces',
    'Type Assertions',
    'Literal Types',
    'null and undefined',
    'Enums',
    'Less Common Primitives'
  ],
  narrowing: [
    'typeof  type guards',
    'Truthiness narrowing',
    'Equality narrowing',
    'The in operator narrowing',
    'instanceof narrowing',
    'Assignments',
    'Control flow analysis',
    'Using type predicates',
    'Discriminated unions',
    'The never type'
  ],
  functions: [
    'Function Type Expressions',
    'Call Signatures',
    'Construct Signatures',
    'Generic Functions',
    'Optional Parameters',
    'Function Overloads',
    'Other Types to Know About',
    'Rest Parameters and Arguments',
    'Parameter Destructuring',
    'Assignability of Functions'
  ],
  objects: [
    'Quick Reference',
    'Property Modifiers',
    'Excess Property Checks',
    'Extending Types',
    'Intersection Types',
    'Generic Object Types'
  ],
  manipulation: [
    'Hello World of Generics',
    'Working with Generic Type Variables',
    'Generic Types',
    'Generic Classes',
    'Generic Constraints',
    'Using Type Parameters in Generic Constraints',
    'Using Class Types in Generics',
    'Generic Parameter Defaults',
    'Keyof Type Operator',
    'Typeof Type Operator',
    'Indexed Access Types',
    'Conditional Types',
    'Mapped Types',
    'Template Literal Types'
  ],
  classes: [
    'Class Members',
    'Class Heritage',
    'Member Visibility',
    'Static Members',
    //'static Blocks in Classes',
    'Generic Classes',
    'this at Runtime in Classes',
    'this Types',
    'Parameter Properties',
    'Class Expressions',
    'Constructor Signatures',
    'abstract Classes and Members',
    'Relationships Between Classes'
  ]
};
