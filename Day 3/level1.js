// Declaring variables and checking types
let firstName = 'Priscilla';
let lastName = 'Annang-Akwetey';
let country = 'Ghana';
let city = 'Accra';
let age = 25;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);  // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number

// Type Checking Examples
console.log(typeof '10' === typeof 10);  // false
console.log(parseInt('9.8') == 10);      // false

// Truthy values
console.log(Boolean(1));         // true
console.log(Boolean('Hello'));   // true
console.log(Boolean([]));        // true

// Falsy values
console.log(Boolean(0));         // false
console.log(Boolean(''));        // false
console.log(Boolean(undefined)); // false

// Comparison Operations
console.log(4 > 3);     // true
console.log(4 >= 3);    // true
console.log(4 < 3);     // false
console.log(4 <= 3);    // false
console.log(4 == 4);    // true
console.log(4 === 4);   // true
console.log(4 != 4);    // false
console.log(4 !== 4);   // false
console.log(4 != '4');  // false
console.log(4 == '4');  // true
console.log(4 === '4'); // false

// Length comparison of python and jargon
console.log('python'.length != 'jargon'.length); // false

// Logical Operators
console.log(4 > 3 && 10 < 12);    // true
console.log(4 > 3 && 10 > 12);    // false
console.log(4 > 3 || 10 < 12);    // true
console.log(4 > 3 || 10 > 12);    // true
console.log(!(4 > 3));            // false
console.log(!(4 < 3));            // true
console.log(!false);              // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));        // true

// 'on' in dragon and python
console.log('dragon'.includes('on')); // true
console.log('python'.includes('on')); // true

// Date Object operations
const now = new Date();
console.log('Year:', now.getFullYear());          // Year today
console.log('Month:', now.getMonth() + 1);        // Month as a number
console.log('Date:', now.getDate());              // Date today
console.log('Day:', now.getDay());                // Day as a number
console.log('Hours:', now.getHours());            // Hours now
console.log('Minutes:', now.getMinutes());        // Minutes now
console.log('Seconds since 1970:', Math.floor(Date.now() / 1000)); // Seconds since Jan 1, 1970
