// 4 pillars
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// Encapsulation
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() { // no paramters
        return this.baseSalary + (this.overtime * this.rate);
    },
}

// same using procedural code
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}


// Abstraction
