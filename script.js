// This code is from VS Code but will run in browser console

console.log('Hello, Priscilla!');
console.log('Welcome to 30 Days of JavaScript!');

console.log('Let\'s do some math:');
console.log('2 + 3 =', 2 + 3);
console.log('3 - 2 =', 3 - 2);
console.log('2 * 3 =', 2 * 3);
console.log('3 / 2 =', 3 / 2);
console.log('3 % 2 =', 3 % 2);
console.log('3 ** 2 =', 3 ** 2);

// Single Line Comment: Declaring variables

let firstName = 'Priscilla';
let lastName = 'Annang-Akwetey';
let country = 'Ghana';
let city = 'Accra';
let age = 25;
let isMarried = false;

const gravity = 9.81; // constant value
const boilingPoint = 100; // water boiling point in °C
let emptyValue = null;
let unAssigned;

// Checking data types
console.log(typeof firstName); // string
console.log(typeof age);       // number
console.log(typeof isMarried); // boolean
console.log(typeof gravity);   // number
console.log(typeof emptyValue); // object (special case in JS)
console.log(typeof unAssigned); // undefined

// Output values
console.log(firstName, lastName, country, city, age, isMarried);
console.log('Gravity:', gravity, 'Boiling Point:', boilingPoint);


// Comments Example
// This is a single-line comment
/*
  This is a multi-line comment.
  JavaScript comments won't be executed.
*/
