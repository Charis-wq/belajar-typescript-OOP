"use strict";
describe("Properties", () => {
    class Customer {
        constructor(id, name) {
            this.name = "guest"; //default value
            this.id = id;
            this.name = name;
        }
        //method
        sayHello(name, id) {
            console.log(`Hello My name  is ${name} and my id is ${id}`);
        }
    }
    it("should can have properties", () => {
        const customer = new Customer(123, "Abi");
        customer.age = 27;
        console.log(customer);
    });
    it("should can have methods", () => {
        const customer = new Customer(231, "Budi");
        customer.sayHello(customer.name, customer.id);
    });
});
