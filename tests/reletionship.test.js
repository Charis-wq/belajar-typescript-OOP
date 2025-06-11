"use strict";
describe("Class Relotionship", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it("shoul support", () => {
        const person = new Customer("Budi");
        console.log(person);
    });
});
