describe("Parameter Properties", () => {
    class Person {
        
        constructor(public name: string) {

        }
    }
    it("should exsport", () => {
        const person = new Person("Danu");
        console.log(person.name);

        person.name = "Budi";
        console.log(person.name);
    });

});