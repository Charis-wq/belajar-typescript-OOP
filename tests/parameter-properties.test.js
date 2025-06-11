"use strict";
describe("Parameter Properties", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    it("should exsport", () => {
        const person = new Person("Danu");
        console.log(person.name);
        person.name = "Budi";
        console.log(person.name);
    });
});
