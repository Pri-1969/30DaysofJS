// countries.js
export const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

// web_techs.js
export const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

// main.js
import { countries } from './countries.js'
import { webTechs } from './web_techs.js'

console.log(countries)
console.log(webTechs)

// String Cleaning & Word Count
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g, '').split(' ')
console.log(words)  // ['I', 'love', 'teaching', ..., 'Python']
console.log(words.length)  // 13

// Shopping Cart Operations
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// Add 'Meat' to beginning if not exists
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}

// Add 'Sugar' at end if not exists
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}

// Remove 'Honey' if allergic
const honeyIndex = shoppingCart.indexOf('Honey')
if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1)
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea')
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea'
}

console.log(shoppingCart)

// Check Ethiopia In Countries
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

//Check Sass In WebTechs
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

//Concatenate FrontEnd & BackEnd Arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

