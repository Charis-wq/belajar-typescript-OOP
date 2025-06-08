describe("Super Constractor", () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string){
            super(name);
            this.department = department;
        }
    }
    it("should call super constractor", () => {
        const employee = new Employee("Budi", "IT");
        console.log(employee.name);
        console.log(employee.department);

    })
})