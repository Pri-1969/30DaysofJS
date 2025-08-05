const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort and find min, max
ages.sort((a, b) => a - b)
console.log('Sorted ages:', ages)
console.log('Min:', ages[0])
console.log('Max:', ages[ages.length - 1])

// Median age
let median
if (ages.length % 2 === 0) {
    median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
} else {
    median = ages[Math.floor(ages.length / 2)]
}
console.log('Median:', median)

// Average age
const sum = ages.reduce((acc, val) => acc + val, 0)
const average = sum / ages.length
console.log('Average:', average)

// Range of ages
const range = ages[ages.length - 1] - ages[0]
console.log('Range:', range)

// Compare (min - average) vs (max - average)
console.log('Min - Average:', Math.abs(ages[0] - average))
console.log('Max - Average:', Math.abs(ages[ages.length - 1] - average))

// Slice first 10 countries
console.log(countries.slice(0, 10))

// Find middle country(ies)
const midIndex = Math.floor(countries.length / 2)
if (countries.length % 2 === 0) {
    console.log(countries.slice(midIndex - 1, midIndex + 1))
} else {
    console.log(countries[midIndex])
}

// Divide countries into two equal arrays
let firstHalf, secondHalf
if (countries.length % 2 === 0) {
    firstHalf = countries.slice(0, countries.length / 2)
    secondHalf = countries.slice(countries.length / 2)
} else {
    firstHalf = countries.slice(0, Math.ceil(countries.length / 2))
    secondHalf = countries.slice(Math.ceil(countries.length / 2))
}
console.log('First Half:', firstHalf)
console.log('Second Half:', secondHalf)
