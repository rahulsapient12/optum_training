// Return Type
// The type of the value returned by the function can be explicitly defined.
function getTime(): number {
  return new Date().getTime();
}

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
  console.log("Hello!");
}
// By default arrow functions are void
const voidType = () => {
  console.log("Hello!");
};

// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
function multiply(a: number, b: number) {
  return a * b;
}

// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// Default Parameters
// For parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addRest(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// Type Alias
// Function types can be specified separately from functions with type aliases.
type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
