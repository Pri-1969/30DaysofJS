// Declare an empty array
const emptyArray = []

// Declare an array with more than 5 elements
const numbers = [10, 20, 30, 40, 50, 60]

// Find the length of your array
console.log(numbers.length)  // Output: 6

// Get the first item, the middle item, and the last item of the array
console.log(numbers[0])                        // First item: 10
console.log(numbers[Math.floor(numbers.length / 2)]) // Middle item: 30
console.log(numbers[numbers.length - 1])       // Last item: 60

// Declare mixedDataTypes array
const mixedDataTypes = ['Asabeneh', 250, true, { country: 'Finland' }, [1, 2, 3], null]
console.log(mixedDataTypes.length) // Output: 6

// Declare itCompanies array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array
console.log(itCompanies)

// Print number of companies
console.log(itCompanies.length) // Output: 7

// Print first, middle, last company
console.log(itCompanies[0]) // Facebook
console.log(itCompanies[Math.floor(itCompanies.length / 2)]) // Apple
console.log(itCompanies[itCompanies.length - 1]) // Amazon

// Print out each company
itCompanies.forEach(company => console.log(company))

// Print each company in uppercase
itCompanies.forEach(company => console.log(company.toUpperCase()))

// Print as sentence
console.log(`${itCompanies.join(', ')} are big IT companies.`)

// Check if a company exists
const companyToCheck = 'Google'
if (itCompanies.includes(companyToCheck)) {
    console.log(companyToCheck)
} else {
    console.log('Company not found')
}

// Filter out companies with more than one 'o' (without filter method)
let companiesWithOneO = []
for (let company of itCompanies) {
    let count = company.split('o').length - 1
    if (count <= 1) {
        companiesWithOneO.push(company)
    }
}
console.log(companiesWithOneO)

// Sort the array
console.log(itCompanies.sort())

// Reverse the array
console.log(itCompanies.reverse())

// Slice out first 3 companies
console.log(itCompanies.slice(0, 3))

// Slice out last 3 companies
console.log(itCompanies.slice(itCompanies.length - 3))

// Slice out the middle IT company
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1))

// Remove first IT company
itCompanies.shift()
console.log(itCompanies)

// Remove middle IT company
let middleIndex = Math.floor(itCompanies.length / 2)
itCompanies.splice(middleIndex, 1)
console.log(itCompanies)

// Remove last IT company
itCompanies.pop()
console.log(itCompanies)

// Remove all IT companies
itCompanies.length = 0
console.log(itCompanies) // []
