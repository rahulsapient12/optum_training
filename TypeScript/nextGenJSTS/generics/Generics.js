"use strict";
const Names = ["Rahul", "Rohit"];
// Names[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is done!");
    }, 2000);
});
promise.then((data) => {
    data.length;
});
// OWN GENERIC FUNCTION
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
function mergeA(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
let mergeData = merge({ name: "Rahul" }, { age: 27 });
console.log(merge({ name: "Rahul" }, { age: 27 }));
console.log(mergeData.name);
// let mergeData1 = mergeA({ name: "Rahul" }, 26);
