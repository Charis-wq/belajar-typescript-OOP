"use strict";
describe("Method Overriding", () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name} and Iam a manager`);
        }
    }
    it("should support", () => {
        const employee = new Employee("Danu");
        employee.sayHello("Rudi");
        const manager = new Manager("Budi");
        manager.sayHello("Joko");
    });
});
