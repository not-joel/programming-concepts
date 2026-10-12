// 03/09/2026

// Create the sumAll function with rest parameters
function sumAll(...numbers: number[]): number {
    let sum: number = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// Create the findMaximum function with rest parameters
function findMaximum(...numbers: number[]): number {
    let max: number = Math.max(...numbers);
    return max;
}

// Create the concatenateStrings function with separator and rest parameters
function concatenateStrings(separator: string, ...values: string[]): string {
    return `${values.join(separator)}`;
}

// Test the functions and print results
console.log(sumAll(5, 10, 15));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(findMaximum(8, 3, 12, 7));
console.log(findMaximum(25, 18));
console.log(concatenateStrings("-", "apple", "banana", "cherry"));
console.log(concatenateStrings(" | ", "red", "green", "blue", "yellow"));

// ------ X ------

// TODO: Create type aliases here
// StringProcessor, NumberCalculator, BooleanChecker
type StringProcessor = (value: string) => string;
type NumberCalculator = (a: number, b: number) => number;
type BooleanChecker = (value: string) => boolean;
// TODO: Implement the functions here
// toUpperCase, addPrefix, divide, power, isEmpty, startsWithA
const toUpperCase: StringProcessor = (value: string): string => value.toUpperCase();
const addPrefix: StringProcessor = (value: string): string => `Processed: ${value}`;
const divide: NumberCalculator = (a: number, b: number): number => a / b;
const power: NumberCalculator = (a: number, b: number): number => Math.pow(a, b);
const isEmpty: BooleanChecker = (value: string): boolean => value.trim().length === 0 ? true : false;
const startsWithA: BooleanChecker = (value: string): boolean => value[0] === 'A' ? true : false;
// TODO: Test your functions and print the results
// Call each function with the specified values and print the results
console.log(toUpperCase("hello world"));
console.log(addPrefix("data"));
console.log(divide(20, 4));
console.log(power(3, 4));
console.log(isEmpty(""));
console.log(startsWithA("Apple"));

// ------ X ------

// import * as fs from "fs";

// Read inputs
// const stdinBuffer: Buffer = fs.readFileSync(0);
// const inputs: string[] = stdinBuffer.toString().trim().split('\n');
// const firstName: string = inputs[0];
// const lastName: string = inputs[1];
// const middleName: string = inputs[2];

// TODO: Write your code here
// Create the formatName function with proper type annotations
function formatName(firstName: string, lastName: string, middleName?: string): string {
    if (!middleName) {
        return `${firstName} ${lastName}`;
    }
    return `${firstName} ${middleName} ${lastName}`;
}

// Call the function and output the result
// Remember to handle the case where middleName is an empty string
/**
let firstName: string = "John";
let lastName: string = "Doe";
let middleName: string = "";
const nameResult = formatName(firstName, lastName, middleName);
console.log(nameResult);


// ------------- X --------------
Create a generic interface named InventoryItem that represents the structure of any inventory item in your management system.

The interface should:

Use a generic type parameter T
Have an id property of type number
Have a quantity property of type number
Have a details property of type T
Create the following objects using your generic interface:

bookItem of type InventoryItem<{ title: string; author: string }> with:
id: 1
quantity: 5
details: { title: "TypeScript Guide", author: "John Doe" }
electronicItem of type InventoryItem<{ brand: string; model: string }> with:
id: 2
quantity: 3
details: { brand: "TechCorp", model: "X200" }
clothingItem of type InventoryItem<{ size: string; color: string }> with:
id: 3
quantity: 10
details: { size: "M", color: "Blue" }
*/

// TODO: Write your code here
// Create the InventoryItem interface and the required objects
interface InventoryItem<T> {
    id: number;
    quantity: number;
    details: T;
}

const bookItem: InventoryItem<{title: string, author: string}> = {
    id: 1,
    quantity: 5,
    details: { title: "TypeScript Guide", author: "John Doe" },
};
const electronicItem: InventoryItem<{brand: string, model: string}> = {
    id: 2,
    quantity: 3,
    details: { brand: "TechCorp", model: "X200" },
};
const clothingItem: InventoryItem<{size: string, color: string}> = {
    id: 3,
    quantity: 10,
    details: { size: "M", color: "Blue" },
};