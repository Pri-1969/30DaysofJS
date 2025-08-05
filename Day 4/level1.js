// Exercise 1: Driving Age Check
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}

// Exercise 2: Who is older?
let myAge = 25;
let yourAge = prompt("Enter your age:");
if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
  console.log("We are the same age.");
}

// Exercise 3a: a vs b using if...else
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

// Exercise 3b: a vs b using ternary
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

// Exercise 4: Even or Odd Number
let number = prompt("Enter a number:");
if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
