// 1. Solve linear equation ax + by + c = 0
function solveLinEquation(a, b, c, x = 0, y = 0) {
  return a * x + b * y + c;
}
console.log(solveLinEquation(2, 3, -6, 1, 2)); // 2*1 + 3*2 -6 = 2

// 2. Solve quadratic equation ax^2 + bx + c = 0
function solveQuadratic(a = 1, b = 0, c = 0) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}
console.log(solveQuadratic());
console.log(solveQuadratic(1, 4, 4)); // [-2]
console.log(solveQuadratic(1, -1, -2)); // [2, -1]
console.log(solveQuadratic(1, 7, 12)); // [-3, -4]
console.log(solveQuadratic(1, 0, -4)); // [2, -2]
console.log(solveQuadratic(1, -1, 0)); // [1, 0]

// 3. Print array elements
function printArray(arr) {
  for (let value of arr) {
    console.log(value);
  }
}
printArray([1, 2, 3]);

// 4. Show formatted date and time
function showDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('en-GB');
  const time = now.toTimeString().slice(0, 5);
  console.log(`${date} ${time}`);
}
showDateTime(); // e.g. 07/08/2025 14:22

// 5. Swap values
function swapValues(x, y) {
  console.log(`x => ${y}, y => ${x}`);
}
swapValues(3, 4);
swapValues(4, 5);

// 6. Reverse array without using .reverse()
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C']));

// 7. Capitalize array
function capitalizeArray(arr) {
  return arr.map(item => item.toUpperCase());
}
console.log(capitalizeArray(['apple', 'banana', 'cherry']));

// 8. Add item to array
function addItem(item, arr = []) {
  arr.push(item);
  return arr;
}
console.log(addItem("orange", ["apple", "banana"]));

// 9. Remove item from array
function removeItem(index, arr) {
  if (index >= 0 && index < arr.length) {
    arr.splice(index, 1);
  }
  return arr;
}
console.log(removeItem(1, ["apple", "banana", "cherry"]));

// 10. Sum of numbers in range 0 to n
function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
}
console.log(sumOfNumbers(10)); // 55

// 11. Sum of odd numbers in range
function sumOfOdds(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) if (i % 2 !== 0) sum += i;
  return sum;
}
console.log(sumOfOdds(10)); // 25

// 12. Sum of even numbers in range
function sumOfEven(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) if (i % 2 === 0) sum += i;
  return sum;
}
console.log(sumOfEven(10)); // 30

// 13. Count evens and odds
function evensAndOdds(n) {
  let evens = 0, odds = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) evens++;
    else odds++;
  }
  console.log(`The number of odds are ${odds}`);
  console.log(`The number of evens are ${evens}`);
}
evensAndOdds(100);

// 14. Sum of any number of arguments
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// 15. Generate random user IP
function randomUserIp() {
  return `${randByte()}.${randByte()}.${randByte()}.${randByte()}`;
}
function randByte() {
  return Math.floor(Math.random() * 256);
}
console.log(randomUserIp());

// 16. Generate random MAC address
function randomMacAddress() {
  const hex = "0123456789ABCDEF";
  let mac = "";
  for (let i = 0; i < 6; i++) {
    mac += hex[Math.floor(Math.random() * 16)];
    mac += hex[Math.floor(Math.random() * 16)];
    if (i !== 5) mac += ":";
  }
  return mac;
}
console.log(randomMacAddress());

// 17. Random Hexadecimal Number
function randomHexaNumberGenerator() {
  const hex = "0123456789abcdef";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexCode;
}
console.log(randomHexaNumberGenerator());

// 18. User ID Generator
function userIdGenerator() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
console.log(userIdGenerator());
