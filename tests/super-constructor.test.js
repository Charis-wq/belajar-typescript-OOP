"use strict";
describe("Super Constractor", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it("should call super constractor", () => {
        const employee = new Employee("Budi", "IT");
        console.log(employee.name);
        console.log(employee.department);
    });
});
