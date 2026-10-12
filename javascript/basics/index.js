`use strict`;
// console.log('Hello world!');

// OOP
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 2,
//     },
//     draw: function() {
//         console.log('Draw');
//     },
// }
// circle.draw();

// 2 ways to create object
// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Draw');
        },
    };
}
const circle = createCircle(3);
circle.draw();
console.log(circle.radius);

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    };
}
const circleConstructor = new Circle(2);
circleConstructor.draw();

// constructor property
console.log(circleConstructor.constructor);

console.log(Circle.name);
console.log(Circle.length);


const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
    `);
const newCircle = new Circle1(1);
console.log(newCircle);

const str= new String();
console.log(str);

// funtions are objects
function myFunction() {
    console.log('Hello');
}
myFunction.call({});

