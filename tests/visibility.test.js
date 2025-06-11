"use strict";
describe("Visibility", () => {
    class Counter {
        constructor() {
            //private count: number = 0;
            this.count = 0;
        }
        incerment() {
            this.count++;
        }
        getCount() {
            return this.count;
        }
    }
    class doubleCounter extends Counter {
        incerment() {
            this.count += 2;
        }
    }
    it("should support private", () => {
        const counter = new Counter();
        counter.incerment();
        counter.incerment();
        counter.incerment();
        counter.incerment();
        counter.incerment();
        console.log(counter.getCount());
    });
    it("should support protected", () => {
        const counter = new doubleCounter();
        counter.incerment();
        counter.incerment();
        counter.incerment();
        counter.incerment();
        counter.incerment();
        console.log(counter.getCount());
    });
});
