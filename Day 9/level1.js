// Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Explain the difference between forEach, map, filter, reduce
/*
forEach → Loops over array elements, performs action, returns undefined
map → Transforms each element, returns new array of same length
filter → Selects elements that meet condition, returns new array (<= original length)
reduce → Reduces array to single value by applying accumulator logic
*/

// 2. Define callback function
const logItem = (item) => console.log(item)

// 3. forEach examples
countries.forEach(logItem)
names.forEach(logItem)
numbers.forEach(logItem)

// 4. map examples
const upperCountries = countries.map(country => country.toUpperCase())
console.log(upperCountries)

const countriesLength = countries.map(country => country.length)
console.log(countriesLength)

const squaredNumbers = numbers.map(num => num ** 2)
console.log(squaredNumbers)

const upperNames = names.map(name => name.toUpperCase())
console.log(upperNames)

const productPrices = products.map(p => p.price)
console.log(productPrices)

// 5. filter examples
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'))
console.log(countriesWithLand)

const countriesWithSixChars = countries.filter(country => country.length === 6)
console.log(countriesWithSixChars)

const countriesWithSixOrMore = countries.filter(country => country.length >= 6)
console.log(countriesWithSixOrMore)

const countriesStartingE = countries.filter(country => country.startsWith('E'))
console.log(countriesStartingE)

const validPrices = products.filter(p => typeof p.price === 'number' && p.price > 0)
console.log(validPrices)

// 6. getStringLists function
const getStringLists = (arr) => arr.filter(item => typeof item === 'string')
console.log(getStringLists([1, 'hello', true, 'world']))

// 7. reduce examples
const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sumNumbers)

const concatenatedCountries = countries.reduce((acc, curr, i) => {
  return i === countries.length - 1
    ? `${acc} and ${curr} are north European countries`
    : `${acc}, ${curr}`
})
console.log(concatenatedCountries)

// 8. some vs every
/*
some → Returns true if at least one element passes the test
every → Returns true if all elements pass the test
*/
console.log(names.some(name => name.length > 7))
console.log(countries.every(country => country.toLowerCase().includes('land')))

// 9. find vs findIndex
/*
find → Returns first element that satisfies condition
findIndex → Returns index of first element that satisfies condition
*/
console.log(countries.find(country => country.length === 6))
console.log(countries.findIndex(country => country.length === 6))
console.log(countries.findIndex(country => country === 'Norway'))
console.log(countries.findIndex(country => country === 'Russia'))
