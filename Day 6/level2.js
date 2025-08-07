//Exercise 2: Arrays, Strings, Colors, and Random IDs

const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'
];

const webTechs = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1. Generate any number of characters random id
function generateRandomId(length) {
  let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
console.log("Random ID (12 chars):", generateRandomId(12));
console.log("Random ID (24 chars):", generateRandomId(24));

// 2. Generate a random hexadecimal number
function generateHexColor() {
  let hex = '#';
  let chars = '0123456789abcdef';
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
}
console.log("Random Hex:", generateHexColor());

// 3. Generate a random rgb color number
function generateRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
console.log("Random RGB:", generateRgbColor());

// 4. Create array of uppercase countries
const upperCountries = countries.map(country => country.toUpperCase());
console.log("Uppercase Countries:", upperCountries);

// 5. Create array of countries length
const countryLengths = countries.map(country => country.length);
console.log("Countries Lengths:", countryLengths);

// 6. Create array of arrays with country, 3-letter code, and length
const countryData = countries.map(country => [
  country,
  country.slice(0, 3).toUpperCase(),
  country.length
]);
console.log("Country Info:", countryData);

// 7. Countries containing 'land'
const landCountries = countries.filter(country => country.includes('land'));
console.log(
  landCountries.length > 0
    ? landCountries
    : 'All these countries are without land'
);

// 8. Countries ending with 'ia'
const iaCountries = countries.filter(country => country.endsWith('ia'));
console.log(
  iaCountries.length > 0
    ? iaCountries
    : 'These are countries ends without ia'
);

// 9. Country with the most characters
let longestCountry = countries[0];
for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}
console.log("Country with most characters:", longestCountry);

// 10. Countries with only 5 characters
const fiveCharCountries = countries.filter(country => country.length === 5);
console.log("Countries with 5 characters:", fiveCharCountries);

// 11. Longest word in webTechs
let longestTech = webTechs[0];
for (let tech of webTechs) {
  if (tech.length > longestTech.length) longestTech = tech;
}
console.log("Longest Web Tech:", longestTech);

// 12. Array of arrays from webTechs
const techDetails = webTechs.map(tech => [tech, tech.length]);
console.log("Tech Details:", techDetails);

// 13. Create acronym MERN from mernStack
const mernAcronym = mernStack.map(tech => tech[0]).join('');
console.log("MERN Acronym:", mernAcronym);

// 14. Iterate through mixed stack array using loop
const mixedStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
console.log("Stack Items:");
for (let tech of mixedStack) {
  console.log(tech);
}

// 15. Reverse fruit array using loop (no reverse method)
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log("Reversed Fruits:", reversedFruits);

// 16. Print all elements of fullStack 2D array
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

console.log("Full Stack Elements:");
for (let sub of fullStack) {
  for (let tech of sub) {
    console.log(tech.toUpperCase());
  }
}
