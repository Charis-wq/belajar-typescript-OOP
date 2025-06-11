describe("Error Handling", () => {

    class ValidastionError extends Error {
        constructor(public massage: string) {
            super(massage);
        }
    }

    function doubel(value: number): number {
        if(value < 0){
            throw new ValidastionError("Value cannot to less 0");
        }
        return value * 2;
    }
    it("should support ", () => {
        try{
             const  result = doubel(-1);
             console.log(result);

        } catch(e){
            if(e instanceof ValidastionError){
                console.log(e.massage);
            }

        }


    })
})