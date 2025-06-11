"use strict";
describe("Abstract", () => {
    class Customer {
        constructor(id) {
            this.id = id;
        }
        hello() {
            console.log("Hello");
        }
    }
    class RegularCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it("should support", () => {
        const customer1 = new RegularCustomer(1, "Nika");
        customer1.sayHello("Adit");
    });
});
