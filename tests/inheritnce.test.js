"use strict";
describe("Inheritance", () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it("should can inheritance calss", () => {
        const empployee = new Employee("Abi");
        console.log(empployee.name);
        const manager = new Manager("Budi");
        console.log(manager.name);
        const director = new Director("Joko");
        console.log(director.name);
    });
});
