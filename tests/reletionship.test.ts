describe("Class Relotionship", () => {
    class Person{
        constructor( public name: string){

        }
    }

    class Customer {
        constructor(public name: string){

        }
    }
    it("shoul support", ()  => {
        const person : Person = new Customer("Budi");
        console.log(person);

    });
});