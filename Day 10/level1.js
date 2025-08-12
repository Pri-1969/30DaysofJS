// Level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1. Create an empty set
const emptySet = new Set()
console.log(emptySet)

// 2. Create a set containing 0 to 10 using loop
const numberSet = new Set()
for (let i = 0; i <= 10; i++) {
  numberSet.add(i)
}
console.log(numberSet)

// 3. Remove an element from a set
numberSet.delete(5)
console.log(numberSet)

// 4. Clear a set
numberSet.clear()
console.log(numberSet)

// 5. Create a set of 5 string elements from array
const fruits = ['apple', 'banana', 'mango', 'orange', 'pear']
const fruitSet = new Set(fruits)
console.log(fruitSet)

// 6. Create a map of countries and number of characters of a country
const countryMap = new Map()
countries.forEach(country => {
  countryMap.set(country, country.length)
})
console.log(countryMap)
