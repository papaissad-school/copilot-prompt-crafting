// A class to calculate many numbers and return the result


class Calculator {
    
        constructor() {
            this.result = 0;
        }
    
        // add method
        add(num) {
            this.result = this.result + num;
            return this.result;
        }
    
        // subtract method
        subtract(num) {
            this.result = this.result - num;
            return this.result;
        }
    
        // multiply method
        multiply(num) {
            this.result = this.result * num;
            return this.result;
        }
    
        // divide method
        divide(num) {
            this.result = this.result / num;
            return this.result;
        }
    
        // clear method
        clear() {
            this.result = 0;
            return this.result;
        }
    }