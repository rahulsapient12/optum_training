"use strict";
let a = "Rahul";
const b = "Rahul";
// Let can be re assigned
// const can not be re assigned
a = "Rahul Nayak";
// b = "Rahul Nayak"; // ERROR
// Why Let is introduced
// Because of scope variables Var has many limitations.
// Example
const z = true;
if (z) {
    var test1 = "Rahul";
    let test2 = "Nayak";
    test1 = "Rahul Nayak";
    test2 = "Nayak Rahul";
    console.log({ a, b, test1, test2 }, "IF SCOPED");
}
test1 = "Rahul Nayak reassigned";
// test2 = "Rahul Nayak reassigned"; // Error because Let variable is not accessable outside If scope
// but var variable can be accessed. These creates complexity
console.log({ a, b, test1 }, "Outside IF SCOPED");
