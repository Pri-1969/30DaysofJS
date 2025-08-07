// Exercise 3: Arrays and Non-Mutating Operations

const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland',
  'Japan', 'Kenya', 'South Africa', 'New Zealand'
];

const webTechs = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1. Copy countries array (non-mutating)
const copiedCountries = [...countries]; // or countries.slice()
console.log("Copied Countries:", copiedCountries);

// 2. Sort copied countries and store in sortedCountries
const sortedCountries = [...countries].sort(); // avoid mutating original
console.log("Sorted Countries:", sortedCountries);

// 3. Sort webTechs array and mernStack array
const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();
console.log("Sorted WebTechs:", sortedWebTechs);
console.log("Sorted MERN Stack:", sortedMernStack);

// 4. Extract all countries containing the word 'land'
const landCountries = countries.filter(country => country.toLowerCase().includes('land'));
console.log("Countries with 'land':", landCountries);

// 5. Find the country with the highest number of characters
let longestCountry = countries.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);
console.log("Longest Country:", longestCountry);

// 6. Extract all countries containing only four characters
const fourCharCountries = countries.filter(country => country.length === 4);
console.log("Countries with 4 characters:", fourCharCountries);

// 7. Extract all countries with two or more words
const multiWordCountries = countries.filter(country => country.trim().includes(' '));
console.log("Countries with multiple words:", multiWordCountries);

// 8. Reverse countries array and capitalize each country
const reversedCapitalizedCountries = [...countries]  // avoid mutation
  .reverse()
  .map(country => country.toUpperCase());
console.log("Reversed and Capitalized Countries:", reversedCapitalizedCountries);
