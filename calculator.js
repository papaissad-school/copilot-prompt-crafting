// A class to calculates numbers and returns the result.
// The methods should be chainable.
// For example:
// const calc = new Calculator();
// calc.add(4).multiply(2).divide(2).subtract(5).add(5).getResult(); // 5
// calc.getResult(); // 5

export

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
        return this;
    }

    subtract(num) {
        this.result -= num;
        return this;
    }

    multiply(num) {
        this.result *= num;
        return this;
    }

    divide(num) {
        this.result /= num;
        return this;
    }

    clear() {
        this.result = 0;
        return this;
    }

    getResult() {
        return this.result;
    }
}
