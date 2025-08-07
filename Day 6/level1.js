// Exercise 1: Loops and Patterns Practice

// 1. Iterate 0 to 10 using for, while, and do while loops

console.log("For loop: 0 to 10");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("While loop: 0 to 10");
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("Do-while loop: 0 to 10");
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 2. Iterate 10 to 0 using for, while, and do while loops

console.log("For loop: 10 to 0");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("While loop: 10 to 0");
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

console.log("Do-while loop: 10 to 0");
i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

// 3. Iterate 0 to n using for loop
let n = 15;
console.log(`For loop: 0 to ${n}`);
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// 4. Print triangle pattern
console.log("Triangle pattern:");
let pattern = '';
for (let i = 1; i <= 7; i++) {
  pattern += '#';
  console.log(pattern);
}

// 5. Multiplication table pattern
console.log("Multiplication pattern:");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// 6. Powers table: i, i², i³
console.log("i   i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}

// 7. Print even numbers from 0 to 100
console.log("Even numbers from 0 to 100:");
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// 8. Print odd numbers from 0 to 100
console.log("Odd numbers from 0 to 100:");
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

// 9. Print prime numbers from 0 to 100
console.log("Prime numbers from 0 to 100:");
for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(num);
}

// 10. Sum of all numbers from 0 to 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("The sum of all numbers from 0 to 100 is", sum);

// 11. Sum of all evens and odds from 0 to 100
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}`);
console.log(`The sum of all odds from 0 to 100 is ${oddSum}`);

// 12. Sum of evens and odds as array
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? even += i : odd += i;
}
console.log([even, odd]); // [2550, 2500]

// 13. Generate array of 5 random numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log("Random numbers:", randomNumbers);

// 14. Generate array of 5 unique random numbers
let uniqueNumbers = new Set();
while (uniqueNumbers.size < 5) {
  uniqueNumbers.add(Math.floor(Math.random() * 100));
}
console.log("Unique random numbers:", Array.from(uniqueNumbers));

// 15. Generate a six-character random ID
let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let id = '';
for (let i = 0; i < 6; i++) {
  id += chars[Math.floor(Math.random() * chars.length)];
}
console.log("Random ID:", id);
