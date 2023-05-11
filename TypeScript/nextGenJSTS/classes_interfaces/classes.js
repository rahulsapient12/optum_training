"use strict";
// what are classes ?
// Object Oriented Programming - this is for real life entity
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const department1 = new Department("MERN");
console.log(department1);
department1.describe();
