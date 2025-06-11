"use strict";
describe("Getter and Setter", () => {
    class Category {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "Empty";
            }
        }
        set name(value) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    it("should can have get and set", () => {
        const category = new Category();
        console.log(category.name);
        category.name = "Tshirt";
        console.log(category.name);
        category.name = "";
        console.log(category.name);
    });
});
