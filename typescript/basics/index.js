"use strict";
console.log("Hello, TypeScript!");
// data types
let isAdmin = false;
let age = 30;
let userName = 'Joel';
// ES202+ features
const hugeNum = BigInt(182748732874923874892);
const uniqueKey = Symbol('description'); // creates a unique identifier
const obj = {
    [uniqueKey]: 'This is a unique property',
};
// explicit types
function greet(name) {
    return `Hello ${name}!`;
}
const obj1 = {
    name: 'Joe',
    age: 26,
    job: 'dev',
    isAdmin: true,
    greet: function () {
        console.log(`Hi ${this.name}!`);
    }
};
let person1 = obj1.greet();
let person2 = obj;
console.log(person2);
// Special types
// any
let myValue = true;
myValue = 'Joel'; // no errors
// unknown
// difference between any and unknown is
// unknown must be type checked
let w = 1;
w = 'string'; // no error
// mainly use it when dealing with API datas.
if (typeof w === 'string') {
    console.log('Yes!, it is a String');
}
// never
// function throwError(message: string): never {
//     throw new Error(message);
// }
// throwError('Oops, you ran into a error');
// undefined & null
let foo = undefined;
let bar = null;
// Optional parameters
function greetPerson(name) {
    return `Hello, ${name || 'stranger'}`;
}
// Nullish coalescing
let input = 'Nullish Coalescing';
const val = input ?? 'default';
// Optional chaining
const userIsAdmin = obj1?.isAdmin;
// explicit types
// use when initial value might not be the final type
let greeting = 'Hello Alvin!';
// function with explicit types
function greetUser(name) {
    return `Hello ${name}`;
}
// infered types
// use when the type is obvious from the context
let arr1 = [true, false, true];
// function with infered type
function userAge(bornYear, currentYear) {
    return currentYear - bornYear;
}
// type inference are most useful in objects
const myUser1 = {
    name: 'Alvin',
    age: 30,
    isAdmin: true,
};
console.log(myUser1.age);
// when typescript cannot infer types it falls back to 'any' type
// avoid 'any' type as much as possible
// optional parameters
function greetUser1(name, age) {
    return `Hello ${name}, you are ${age} years old`;
}
const user1 = greetUser1('Joel');
console.log(user1);
// default paramter
function withDefaultParameter(name, age = 30) {
    console.log(`Hello ${name}, you're ${age} years old`);
}
// rest parameter
function withRestParameter(name, ...basket) {
    console.log(`${basket} of ${name}`);
}
console.log(withRestParameter('Mike', 'apple', 'banana', 'orange'));
// different function types
// Arrow syntax (inline type)
let add;
add = (x, y) => x + y;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const isEmail = (input) => input.includes('@');
const checkStock = (amount) => amount > 0;
checkStock.descritption = 'Checks if items are available';
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function createPoint(ctor) {
    return new ctor(10, 20);
}
const wrapValue = (arg) => arg;
const output = wrapValue('Hello');
console.log(output);
// Typed arrays
const names = [];
names.push('Joel');
// names.push(11); // error
// readonly arrays - not mutable
const nums = [1, 2, 3];
// nums.push(1); // error
// type inference
const n = [1, 2, 3];
// n.push('hello'); // error
// tuples
// tuple is a typed array with pre-defined length
// and types for each index
let ourTuple;
ourTuple = [1, false, 'coding is cool!'];
ourTuple.push('Joel'); // no error
// recomended to keep tuples readonly
const readOnlyTuple = [1, true, 'hello'];
// readOnlyTuple.push('world'); // error
// named tuples
// allows us to provide context for our values at each index
const graph = [22, 44];
const [a1, b1] = graph;
// destructuring tuples
const newGraph = [1, 2];
const [x1, y1] = newGraph;
// Object types
// inline object type annotation are separated by semicolons
const car = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2008,
};
// optional properties
const car1 = {
    type: 'Audi',
};
car1.mileage = 20;
// enums
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 100] = "North";
    Directions[Directions["South"] = 101] = "South";
    Directions[Directions["East"] = 102] = "East";
    Directions[Directions["West"] = 103] = "West";
})(Directions || (Directions = {}));
const myDirection = Directions.West;
console.log(myDirection);
// heterogenious enums
// contains both numeric and string types
var Data;
(function (Data) {
    Data[Data["Id"] = 101] = "Id";
    Data["Admin"] = "ADMIN";
})(Data || (Data = {}));
const carName = "Ford";
const carYear = 2005;
const carModel = "GTR";
const userCar = {
    name: carName,
    year: carYear,
    model: carModel,
};
console.log(userCar);
// Literal types
// Only 'left' is allowed
let direction = 'left';
let myId = 20;
myId = "123_Dev";
const obj12 = {
    name: 'Bob',
    permissions: ['delete'],
};
const obj23 = {
    name: 'Foo',
    email: 'foo@example.com',
};
console.log(obj23.email);
function printPerson(person) {
    console.log(person.name);
    if ("permissions" in person) {
        console.log(person.permissions);
    }
    if ("email" in person) {
        console.log(person.email);
    }
}
printPerson(obj12);
const bear = { name: "Winnie", honey: true };
// Area now has height, width and unit
const rectangle = {
    height: 20,
    width: 10,
};
const dog = {
    name: 'Destroyer',
    age: 2,
};
// union types
function printStatusCode(code) {
    console.log(`Status code: ${code}`);
}
printStatusCode(404);
printStatusCode('404');
// functions
function addNumber(a, b) {
    return a + b;
}
const subRes = (a, b) => a - b;
// optional parameter
function formatWelcome(name, age) {
    return `Hello ${name}, your age is ${age}`;
}
// default paramter
function updateInfo(name, age = 25) {
    return `Hello ${name}, your age is ${age}`;
}
// rest parameter
// rest parameter always placed at last
function logInfo(fruit, ...fruits) {
    console.log(fruit);
    console.log(fruits);
}
// named parameter
function divideNumber({ dividend, divisor }) {
    return dividend / divisor;
}
// Type casting
// casting using "as" keyword
let typeCast = 'hello';
// typeCast = 4; // undefined since .length not present on numbers
console.log(typeCast.length);
// console.log((4 as string).length); // error
// casting using <>
let typeCast1 = 'hello';
console.log(typeCast1.length);
// force casting
let typeCast2 = 'hello';
console.log(typeCast2.length);
// console.log(((typeCast2 as unknown) as number).length); // error .length not present for type number
// Classes
// Basic Generics
// The T is a generic type parameter.
// Think of T as a placeholder
function getValue(value) {
    return value;
}
// Whatever type goes in, that same type comes out
// difference between generic and union
// Union
function getUserValue(value) {
    return value;
}
// The input & output should only be string or number
// Explicitly specify type
const res1 = getValue('Hello');
const res2 = getValue(100);
// Generics with arrays
function getFirst(items) {
    return items[0];
}
const firstNum = getFirst([1, 2, 3]);
console.log(firstNum);
const firstStr = getFirst(['first', 'second', 'third']);
console.log(firstStr);
// any[] throws away type safety
function wrapInObject(item) {
    return { value: item };
}
const wrappedString = wrapInObject("Hello TypeScript");
const wrappedNumber = wrapInObject(42);
const wrappedBoolean = wrapInObject(true);
