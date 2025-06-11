"use strict";
describe("Static", () => {
    class Configuration {
    }
    Configuration.NAME = "Belajar Typescript OOP";
    Configuration.VERSION = 1.0;
    Configuration.AUTHOR = "Abdul Charis";
    class MathUtil {
        static sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
    }
    it("should support MathUtil", () => {
        console.log(MathUtil.sum(1, 1, 3, 4, 2));
        expect(MathUtil.sum(1, 1, 3, 4, 2)).toBe(11);
    });
    it("should support", () => {
        console.log(Configuration.NAME);
        console.log(Configuration.VERSION);
        console.log(Configuration.AUTHOR);
    });
});
