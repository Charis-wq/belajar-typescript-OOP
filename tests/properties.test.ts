describe("Properties", () => {

    class Customer {
        readonly id: number;
        name: string;
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }
    it("should can have properties", () => {

        const customer: Customer = new Customer(123, "Abi");
        customer.age = 27;

        console.log(customer);

    });
});