console.log("Hello, TypeScript!");

// data types
let isAdmin: boolean = false;
let age: number = 30;
let userName: string = 'Joel';

// ES202+ features
const hugeNum: bigint = BigInt(182748732874923874892);
const uniqueKey: symbol = Symbol('description'); // creates a unique identifier
const obj = {
    [uniqueKey]: 'This is a unique property',
}

// explicit types
function greet(name: string): string {
    return `Hello ${name}!`;
}

const obj1 = {
    name: 'Joe',
    age: 26,
    job: 'dev',
    isAdmin: true,
    greet: function() {
        console.log(`Hi ${this.name}!`);
    }
}

let person1 = obj1.greet();
let person2 = obj
console.log(person2);

// Special types
// any
let myValue: any = true;
myValue = 'Joel' // no errors

// unknown
// difference between any and unknown is
// unknown must be type checked
let w: unknown = 1;
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
let foo: undefined = undefined;
let bar: null = null;

// Optional parameters
function greetPerson(name?: string) { // `string | undefined`
    return `Hello, ${name || 'stranger'}`;
}

// Nullish coalescing
let input = 'Nullish Coalescing';
const val = input ?? 'default';

// Optional chaining
const userIsAdmin = obj1?.isAdmin;

// explicit types
// use when initial value might not be the final type
let greeting: string = 'Hello Alvin!';

// function with explicit types
function greetUser(name: string): string {
    return `Hello ${name}`;
}

// infered types
// use when the type is obvious from the context
let arr1 = [true, false, true];

// function with infered type
function userAge(bornYear: number, currentYear: number) {
    return currentYear - bornYear;
}

// type inference are most useful in objects
const myUser1 = {
    name: 'Alvin',
    age: 30,
    isAdmin: true,
}
console.log(myUser1.age);
// when typescript cannot infer types it falls back to 'any' type
// avoid 'any' type as much as possible

// optional parameters
function greetUser1(name: string, age?: number): string {
    return `Hello ${name}, you are ${age} years old`;
}
const user1 = greetUser1('Joel');
console.log(user1);

// default paramter
function withDefaultParameter(name: string, age: number = 30) {
    console.log(`Hello ${name}, you're ${age} years old`);
}

// rest parameter
function withRestParameter(name?: string, ...basket: string[]) {
    console.log(`${basket} of ${name}`);
}
console.log(withRestParameter('Mike', 'apple', 'banana', 'orange'));

// different function types
// Arrow syntax (inline type)
let add: (a: number, b: number) => number;
add = (x, y) => x + y;

// type alias
type MathOperation = (a: number, b: number) => number;
const multiply: MathOperation = (a, b) => a * b;
const subtract: MathOperation = (a, b) => a - b;


// interface signatures
interface StringValidator {
    (input: string): boolean;
}
const isEmail: StringValidator = (input) => input.includes('@');

// call signatures (function with properties)
type DescribableFunction = {
    descritption: string;           // Property
    (someArg: number): boolean      // Call signature
}
const checkStock: DescribableFunction = (amount) => amount > 0;
checkStock.descritption = 'Checks if items are available';

// Construct signatures (Contsructor types)
type PointConstructor = {
    new (x: number, y: number): {x: number, y: number};
};

class Point {
    constructor(public x: number, public y: number) {}
}

function createPoint(ctor: PointConstructor) {
    return new ctor(10, 20);
}

// Generic function types
type IdentityWrapper = <T>(arg: T) => T;

const wrapValue: IdentityWrapper = (arg) => arg;
const output = wrapValue<string>('Hello');
console.log(output);


// Typed arrays
const names: string[] = [];
names.push('Joel');
// names.push(11); // error

// readonly arrays - not mutable
const nums: readonly number[] = [1, 2, 3];
// nums.push(1); // error

// type inference
const n = [1, 2, 3];
// n.push('hello'); // error


// tuples
// tuple is a typed array with pre-defined length
// and types for each index
let ourTuple: [number, boolean, string];
ourTuple = [1, false, 'coding is cool!'];
ourTuple.push('Joel'); // no error

// recomended to keep tuples readonly
const readOnlyTuple: readonly [number, boolean, string] = [1, true, 'hello'];
// readOnlyTuple.push('world'); // error

// named tuples
// allows us to provide context for our values at each index
const graph: [x: number, y: number] = [22, 44];
const [a1, b1] = graph;

// destructuring tuples
const newGraph: [number, number] = [1, 2];
const [x1, y1] = newGraph;


// Object types
// inline object type annotation are separated by semicolons
const car: { type: string; model: string; year: number } = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2008,
};

// optional properties
const car1: { type: string, mileage?: number } = {
    type: 'Audi',
};
car1.mileage = 20;


// enums
enum Directions {
    North = 100,
    South,
    East,
    West
}

const myDirection = Directions.West;
console.log(myDirection);

// heterogenious enums
// contains both numeric and string types
enum Data {
    Id = 101,
    Admin = 'ADMIN'
}


// Type Aliases and Interface
type CarName = string;
type CarYear = number;
type CarModel = string;
type Car = {
    name: CarName,
    year: CarYear,
    model: CarModel,
}
const carName: CarName = "Ford";
const carYear: CarYear = 2005;
const carModel: CarModel = "GTR";
const userCar: Car = {
    name: carName,
    year: carYear,
    model: carModel,
};
console.log(userCar);

// Literal types
// Only 'left' is allowed
let direction: 'left' = 'left';


// Union and Intersection Types
type ID = number | string;
let myId: ID = 20;
myId = "123_Dev";

type Admin = {
    name: string;
    permissions: string[];
};
type Users = {
    name: string;
    email: string;
};
type Person = Admin | Users;

const obj12: Person = {
    name: 'Bob',
    permissions: ['delete'],
};
const obj23: Person = {
    name: 'Foo',
    email: 'foo@example.com',
};
console.log(obj23.email);
function printPerson(person: Admin | Users) {
    console.log(person.name);

    if ("permissions" in person) {
        console.log(person.permissions);
    }

    if ("email" in person) {
        console.log(person.email);
    }
}
printPerson(obj12);

// intersection
// Intersections are most useful for object types, where combining properties makes sense.
type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

// interfaces
// Interfaces are similar to type aliases, except they only apply to object types
// NOTE:
// 1. interface does not require "=" after name
// 2. Use comma (,) instead of semi-colon (;)
// 3. Try not using semicolon at the object parenthesis end
interface Rectangle {
    height: number,
    readonly width: number, // cannot be changed
}

interface Area extends Rectangle {
    unit: string,
}
// Area now has height, width and unit

const rectangle: Rectangle = {
    height: 20,
    width: 10,
};

// interface merging
interface Animals { name: string }
interface Animals { age: number }
const dog: Animals = {
    name: 'Destroyer',
    age: 2,
};

// methods in interface
interface Human {
    greet(): string,
}


// union types
function printStatusCode(code: string | number) {
    console.log(`Status code: ${code}`);
}
printStatusCode(404);
printStatusCode('404');


// functions
function addNumber(a: number, b: number): number {
    return a + b;
}

type CalculateNumber = (a: number, b: number) => number;
const subRes: CalculateNumber = (a: number, b: number): number => a - b;

// optional parameter
function formatWelcome(name: string, age?: number): string {
    return `Hello ${name}, your age is ${age}`;
}

// default paramter
function updateInfo(name: string, age: number = 25): string {
    return `Hello ${name}, your age is ${age}`;
}

// rest parameter
// rest parameter always placed at last
function logInfo(fruit: string, ...fruits: string[]): void {
    console.log(fruit);
    console.log(fruits);
}

// named parameter
function divideNumber({ dividend, divisor }: {dividend: number, divisor: number}) {
    return dividend / divisor;
}


// Type casting
// casting using "as" keyword
let typeCast: unknown = 'hello';
// typeCast = 4; // undefined since .length not present on numbers
console.log((typeCast as string).length);
// console.log((4 as string).length); // error

// casting using <>
let typeCast1: unknown = 'hello';
console.log((<string>typeCast1).length);

// force casting
let typeCast2 = 'hello';
console.log(((typeCast2 as unknown) as string).length);
// console.log(((typeCast2 as unknown) as number).length); // error .length not present for type number


// Classes



// Basic Generics
// The T is a generic type parameter.
// Think of T as a placeholder
function getValue<T>(value: T): T {
    return value;
}
// Whatever type goes in, that same type comes out

// difference between generic and union
// Union
function getUserValue(value: string | number): string | number {
    return value;
}
// The input & output should only be string or number

// Explicitly specify type
const res1 = getValue<string>('Hello');
const res2 = getValue<number>(100);

// Generics with arrays
function getFirst<T>(items: T[]): T {
    return items[0];
}
const firstNum = getFirst<number>([1, 2, 3]);
console.log(firstNum);
const firstStr = getFirst<string>(['first', 'second', 'third']);
console.log(firstStr);
// any[] throws away type safety


function wrapInObject<T>(item: T): { value: T } {
    return { value: item };
}

const wrappedString = wrapInObject("Hello TypeScript");
const wrappedNumber = wrapInObject(42);
const wrappedBoolean = wrapInObject(true);

// Generic Arrays
const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3, 4];

//Example
function getFirstElement<T>(arr: Array<T>): T | undefined {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}
// Create the required arrays using Array<T> syntax
const stringArray: Array<string> = ["apple", "banana", "cherry"];
const numberArray: Array<number> = [10, 20, 30, 40];
const booleanArray: Array<boolean> = [true, false, true];
const emptyStringArray: Array<string> = [];
// Test the function and print the results
console.log(getFirstElement<string>(stringArray));
console.log(getFirstElement<number>(numberArray));
console.log(getFirstElement<boolean>(booleanArray));
console.log(getFirstElement(emptyStringArray));
console.log(getFirstElement(['single']));

// Generic interfaces
// allows you to define the shape of an object
// Example
interface Container<T> {
    value: T;
    isEmpty: boolean;
}
const stringContainer: Container<string> = {
    value: 'hello',
    isEmpty: false,
}
const numberContainer: Container<number> = {
    value: 42,
    isEmpty: false,
}

// -------------------- X --------------------
// Create the generic Result interface
interface Result<T> {
    success: boolean;
    data: T;
}

// Create the objects using the Result interface
const stringResult: Result<string> = {
    success: true,
    data: 'Operation completed',
};
const numberResult: Result<number> = {
    success: true,
    data: 42,
};
const booleanResult: Result<boolean> = {
    success: false,
    data: false,
};
const arrayResult: Result<string[]> = {
    success: true,
    data: ["item1", "item2", "item3"],
};

// Create the generic processResult function
function processResult<T> (result: Result<T>): string {
    if (result.success) {
        return `Success: ${result.data}`;
    } else {
        return `Failed: ${result.data}`;
    }
}

// Print the required outputs
console.log(processResult(stringResult));
console.log(processResult(numberResult));
console.log(processResult(booleanResult));
console.log(processResult(arrayResult));
console.log(stringResult.data);
// -------------------- X --------------------


// type assertion
// as
let userData: unknown = '{"name": "John", "age": 30}';
let userInfoObj1 = userData as string;
// alternate way
let userInfoObj2 = <string>userData;

// in
// checks whether property exist in object
// Example
type Dog = { name: string; breed: string };
type Cat = { name: string; meow: () => void };

function petSound(pet: Dog | Cat) {
  if ('breed' in pet) {
    // TypeScript knows pet is a Dog here
    console.log(`${pet.name} is a ${pet.breed}`);
  } else {
    // TypeScript knows pet is a Cat here
    pet.meow();
  }
}

// instanceof
function processValue(value: string | Date) {
  if (value instanceof Date) {
    // TypeScript knows value is a Date
    console.log(value.getFullYear());
  } else {
    // TypeScript knows value is a string
    console.log(value.toUpperCase());
  }
}

// never
// The never type represents values that never occur
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // This loop never ends
  }
}

// nullable types ('strictNull')
// Without strictNullChecks - this would be allowed
// let sanityName1: string = null; // Error with strictNullChecks!

// With strictNullChecks - you must be explicit
let sanityName2: string | null = null; // Now this works

function processName(name: string | null) {
  // This would cause an error
  // console.log(name.toUpperCase());
  
  // You must check first
  if (name !== null) {
    console.log(name.toUpperCase()); // Safe to use
  }
}

// string indexing
interface AppConfig {
    [key: string]: string | number | boolean | null
}


// Utility Types
