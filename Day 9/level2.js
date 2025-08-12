// Level 2

// 1. Total price using chaining
const totalPriceChained = products
  .map(p => p.price)
  .filter(price => typeof price === 'number' && price > 0)
  .reduce((sum, price) => sum + price, 0)
console.log(totalPriceChained)

// 2. Total price using only reduce
const totalPriceReduce = products.reduce((sum, p) => {
  return typeof p.price === 'number' && p.price > 0 ? sum + p.price : sum
}, 0)
console.log(totalPriceReduce)

// 3. categorizeCountries
const categorizeCountries = (pattern) => {
  return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()))
}
console.log(categorizeCountries('land'))

// 4. Array of letter counts
const letterCounts = countries.reduce((acc, country) => {
  const letter = country[0].toUpperCase()
  acc[letter] = (acc[letter] || 0) + 1
  return acc
}, {})
console.log(letterCounts)

// 5. getFirstTenCountries
const getFirstTenCountries = (arr) => arr.slice(0, 10)
console.log(getFirstTenCountries(countries))

// 6. getLastTenCountries
const getLastTenCountries = (arr) => arr.slice(-10)
console.log(getLastTenCountries(countries))

// 7. Most frequent initial letter
const mostFrequentLetter = Object.entries(letterCounts).sort((a, b) => b[1] - a[1])[0]
console.log(`Most used initial: ${mostFrequentLetter[0]} (${mostFrequentLetter[1]} times)`)
