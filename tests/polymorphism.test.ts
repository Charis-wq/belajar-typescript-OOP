describe(" Polymorphis", () => {

    class Employee {
        constructor(public name: string){

        }
    }

    class Manager extends Employee{

    }

    class VicePresident extends Manager{

    }

    function sayHello(employee: Employee): void {
        if(employee instanceof VicePresident){
            const VP = employee as VicePresident; // harus di awali dari child class yg paling kecil 
            console.log(`Hello ${VP.name}, Iam Vice`);

        }else if(employee instanceof Manager){
            const manager = employee as Manager;
            console.log(`Hello ${manager.name}, Iam Manager`)

        }else{
            console.log(`Hello ${employee.name}, Iam Employee`)
        }
    }

    function sayHelloWrong(employee: Employee): void {
        if(employee instanceof Manager){
            const manager = employee as Manager;
            console.log(`Hello ${manager.name}, Iam Manager`);

        }else if(employee instanceof VicePresident){
            const VP = employee as VicePresident; 
            console.log(`Hello ${VP.name}, Iam Vice`);

        }else{
            console.log(`Hello ${employee.name}, Iam Employee`);
        }
    }

    it("should support", () => {
        let employee: Employee = new Employee("Eko");
        console.log(employee);

        employee = new Manager("Joko");
        console.log(employee);

        employee= new VicePresident("Eko");
        console.log(employee);
    });

    it("should support method poliymorphism", () => {
        sayHello(new Manager("Joko"));
        sayHello(new Employee("Budi"));
        sayHello(new VicePresident("Eko"));
    });

    it("should support method poliymorphism Wrong", () => {
        sayHelloWrong(new Manager("Joko"));
        sayHelloWrong(new Employee("Budi"));
        sayHelloWrong(new VicePresident("Eko"));
    });

});