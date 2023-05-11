"use strict";
class DepartmentP {
    constructor(n, id) {
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmpInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new DepartmentP("MERN", "2");
console.log(accounting);
accounting.addEmployee("Jhon Cena");
accounting.addEmployee("MS Dhoni");
// accounting.employees[2] = "HHH"; //can not access a private var or method
accounting.printEmpInfo();
//  INHERITANCE
class ITDepartment extends DepartmentP {
    constructor(id, admins) {
        super(id, "name");
        this.admins = admins;
    }
}
const accounting2 = new ITDepartment("Mern", ["2"]);
