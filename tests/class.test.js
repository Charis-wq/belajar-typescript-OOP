"use strict";
describe("Class", () => {
    class Customer {
        constructor() {
            console.log("New Customer");
        }
    }
    class Order {
    }
    it("should can create class", () => {
        const customer = new Customer();
        const order = new Order();
    });
    it("should can create constructor", () => {
        new Customer();
        new Customer();
    });
});
