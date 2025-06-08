describe("Visibility", () => {
    class Counter {
        //private count: number = 0;
        protected count: number = 0;

        public incerment(): void {
            this.count++;
        }

        public getCount(): number {
            return this.count;
        }
    }

    class doubleCounter extends Counter {
         public incerment(): void {
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