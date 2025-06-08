describe("Super Method", () => {

    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name);
            console.log(`I am a manager`);
            
        }
    }
    it("should support", () => {
        const employee = new Employee("Danu");
        employee.sayHello("Rudi");

        const manager = new Manager("Budi");
        manager.sayHello("Joko");

    });
});