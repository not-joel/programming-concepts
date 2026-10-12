const num: number = 1234;
let mySum: number = Math.abs(num).toString().split('').reduce((a, b): number => a + +b, 0);
console.log(mySum, typeof mySum);

let strVal: string = '3';
console.log(+strVal, typeof strVal, typeof +strVal);

let x: number = 5;
let y: string = '5';
console.log(x + y);
console.log(x + +y);

// Day - 1 (19/06/2026)
let a: boolean = true;
let b: number = 4;
let c: string = 'Alvin';

function sumOfTwoNumbers(num1: number, num2: number): number {
    return  num1 + num2;
}
const result = sumOfTwoNumbers(4, 7);
console.log('result = ', result);

interface User {
    name: string;
    age: number;
    isAdmin?: boolean;
}

const user: User = {
    name: 'Joel',
    age: 26,
}

// Day - 2 (08/07/2026)
// Exercise - 1
type Operator = '+' | '-' | '*' | '/';

function calculator(num1: number, num2: number, operator: Operator): number | string {
    switch(operator) {
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
            const _exhaustiveCheck: never = operator;
            return _exhaustiveCheck;
    }
}

// Exercise - 2
// function logger(message: string): void {
//     console.log(`[LOG]: ${message}`);
// }
// logger('Application started');

// Example - 2
type LogLevel = 'info' | 'warning' | 'error';

function logger(level: LogLevel, message?: string): void {
    console.log(`[${level.toUpperCase()}]: ${message}`);
}
logger('info','Application started');

// Exercise - 3
function average(...nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let sum = nums.reduce((total, num) => total + num, 0);
    return sum / nums.length;
}

// Exercise - 4
// function with type alias
type MathOperator = (a: number, b: number) => number;
const mul: MathOperator = (a: number, b: number) => a * b;
const sub: MathOperator = (a: number, b: number) => a - b;

let multiplyOperator = mul(5,5);
console.log(multiplyOperator);