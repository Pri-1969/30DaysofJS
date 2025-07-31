// Area of a Triangle
let base = prompt('Enter base of the triangle:');
let height = prompt('Enter height of the triangle:');
let areaTriangle = 0.5 * base * height;
console.log(`The area of the triangle is ${areaTriangle}`);

// Perimeter of a Triangle
let sideA = prompt('Enter side a:');
let sideB = prompt('Enter side b:');
let sideC = prompt('Enter side c:');
let perimeterTriangle = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log(`The perimeter of the triangle is ${perimeterTriangle}`);

// Area and Perimeter of Rectangle
let length = prompt('Enter length of rectangle:');
let width = prompt('Enter width of rectangle:');
let areaRectangle = length * width;
let perimeterRectangle = 2 * (parseFloat(length) + parseFloat(width));
console.log(`The area of the rectangle is ${areaRectangle}`);
console.log(`The perimeter of the rectangle is ${perimeterRectangle}`);

// Area and Circumference of Circle
let radius = prompt('Enter radius of circle:');
const PI = 3.14;
let areaCircle = PI * radius * radius;
let circumference = 2 * PI * radius;
console.log(`The area of the circle is ${areaCircle}`);
console.log(`The circumference of the circle is ${circumference}`);

// Slope, X-Intercept, Y-Intercept of y = 2x - 2
let slope = 2; // from equation y = 2x - 2
let xIntercept = 2 / slope; // when y = 0
let yIntercept = -2; // when x = 0
console.log(`Slope: ${slope}, X-Intercept: ${xIntercept}, Y-Intercept: ${yIntercept}`);

// Slope between (2,2) and (6,10)
let slopePoints = (10 - 2) / (6 - 2);
console.log(`Slope between points: ${slopePoints}`);

// Comparing slopes
console.log(slope === slopePoints);

// Calculate y = x^2 + 6x + 9
let x = prompt('Enter x to calculate y = x^2 + 6x + 9:');
let y = x * x + 6 * x + 9;
console.log(`When x is ${x}, y is ${y}`);

// Weekly earning calculator
let hours = prompt('Enter hours worked:');
let rate = prompt('Enter rate per hour:');
let weeklyEarning = hours * rate;
console.log(`Your weekly earning is ${weeklyEarning}`);

// Name length check
let userName = prompt('Enter your name:');
if (userName.length > 7) {
  console.log('Your name is long.');
} else {
  console.log('Your name is short.');
}

// Compare first name and family name lengths
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else {
  console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
}

// Age difference
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

// Driving eligibility
let birthYear = prompt('Enter birth year:');
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
  console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
  console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}

// Lifetime seconds lived
let yearsLived = prompt('Enter number of years you live:');
let secondsLived = yearsLived * 365 * 24 * 60 * 60;
console.log(`You lived ${secondsLived} seconds.`);

// Human readable time formats
let now = new Date();
let yearNow = now.getFullYear();
let monthNow = now.getMonth() + 1;
let dateNow = now.getDate();
let hoursNow = now.getHours();
let minutesNow = now.getMinutes();

console.log(`${yearNow}-${monthNow}-${dateNow} ${hoursNow}:${minutesNow}`);
console.log(`${dateNow}-${monthNow}-${yearNow} ${hoursNow}:${minutesNow}`);
console.log(`${dateNow}/${monthNow}/${yearNow} ${hoursNow}:${minutesNow}`);
