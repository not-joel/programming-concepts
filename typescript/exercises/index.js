"use strict";
const num = 1234;
let mySum = Math.abs(num).toString().split('').reduce((a, b) => a + +b, 0);
console.log(mySum, typeof mySum);
let strVal = '3';
console.log(+strVal, typeof strVal, typeof +strVal);
let x = 5;
let y = '5';
console.log(x + y);
console.log(x + +y);
// Day - 1 (19/06/2026)
let a = true;
let b = 4;
let c = 'Alvin';
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}
const result = sumOfTwoNumbers(4, 7);
console.log('result = ', result);
const user = {
    name: 'Joel',
    age: 26,
};
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Division by zero is not allowed';
            }
            return num1 / num2;
        default:
            const _exhaustiveCheck = operator;
            return _exhaustiveCheck;
    }
}
