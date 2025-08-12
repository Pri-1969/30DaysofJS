// Level 2

// 1. Union of a and b
const setA = new Set(a)
const setB = new Set(b)
const union = new Set([...setA, ...setB])
console.log(union)

// 2. Intersection of a and b
const intersection = new Set([...setA].filter(num => setB.has(num)))
console.log(intersection)

// 3. Difference of a with b (elements in a not in b)
const difference = new Set([...setA].filter(num => !setB.has(num)))
console.log(difference)
