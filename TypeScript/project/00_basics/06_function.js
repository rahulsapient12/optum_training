// Return Type
// The type of the value returned by the function can be explicitly defined.
function getTime() {
    return new Date().getTime();
}
// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log("Hello!");
}
// By default arrow functions are void
var voidType = function () {
    console.log("Hello!");
};
// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
function multiply(a, b) {
    return a * b;
}
// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
// Default Parameters
// For parameters with default values, the default value goes after the type annotation:
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addRest(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
