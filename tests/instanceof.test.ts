describe("Intansceof", () => {

    class Employee {}

    class Manager {}

    const budi = new Employee();
    const eko = new Manager();

    it("should can ahve typeof", () => {
    console.log(typeof budi);
    console.log(typeof eko);

    });
    it("should can have instanceof", () => {

        expect( budi instanceof Employee).toBe(true);
        expect( budi instanceof Manager).toBe(false); 

        expect( eko  instanceof Employee).toBe(false); 
        expect( eko  instanceof Manager).toBe(true); 
    });
});