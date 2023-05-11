// unknow type
var val;
console.log(val);
val = true;
console.log(val);
val = 7;
console.log(val);
val = "geeks for geeks";
console.log(val);
val = [1, 2, 3, 4];
console.log(val);
val = { name: "rachel" };
console.log(val);
val = Math.random();
console.log(val);
val = null;
console.log(val);
val = undefined;
// Never Type
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log("I always does something and never ends.");
    }
}
// The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.
