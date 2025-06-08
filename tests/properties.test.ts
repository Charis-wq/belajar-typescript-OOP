describe("Properties", () => {

    class Customer {
        readonly id: number;
        name: string ="guest"; //default value
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        //method
        sayHello(name: string, id:number ): void {
            console.log(`Hello My name  is ${name} and my id is ${id}`);
        }
    }
    it("should can have properties", () => {

        const customer: Customer = new Customer(123, "Abi");
        customer.age = 27;

        console.log(customer);

    });
    it ("should can have methods", () => {
        const customer: Customer = new Customer(231, "Budi");
        customer.sayHello(customer.name, customer.id);
    });
});