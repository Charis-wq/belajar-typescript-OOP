"use strict";
describe("Interface", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it("should support inharitance", () => {
        const person = new Person("Budi");
        person.sayHello("Joko");
        console.log(person.name);
    });
});
