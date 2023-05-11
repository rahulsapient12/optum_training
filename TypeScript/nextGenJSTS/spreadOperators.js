"use strict";
const myObj = {
    name: "Rahul",
    age: 27,
    skills: ["JS", "TS"],
};
// After cloning the my obj data to cloneobj variable if we modify cloneobj autpomatically myobj will change
// This is called value by reference
const cloneObj = myObj;
cloneObj.name = "Rahul Nayak";
console.log({ cloneObj });
console.log({ myObj });
// lets achive this using spread operator
const newCloneObj = Object.assign({}, myObj);
newCloneObj.age = 26;
console.log({ cloneObj });
console.log({ myObj });
console.log({ newCloneObj });
// Lets try spread operators with Array
const objNew = {
    name: "Rohit",
    age: 16,
    skills: ["C++"],
};
const myArry = [...[objNew], newCloneObj];
console.log(myArry);
