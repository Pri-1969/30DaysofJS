// 1. Print full name
function fullName() {
  console.log("John Doe");
}
fullName();

// 2. Return full name from firstName and lastName
function fullNameWithParams(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullNameWithParams("John", "Doe"));

// 3. Add two numbers
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(3, 5));

// 4. Area of rectangle
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(4, 5)); // 20

// 5. Perimeter of rectangle
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(4, 5)); // 18

// 6. Volume of a rectangular prism
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfRectPrism(4, 5, 6)); // 120

// 7. Area of a circle
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
console.log(areaOfCircle(5)); // 78.54...

// 8. Circumference of a circle
function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}
console.log(circumOfCircle(5)); // 31.415...

// 9. Density = mass / volume
function density(mass, volume) {
  return mass / volume;
}
console.log(density(10, 2)); // 5

// 10. Speed = distance / time
function speed(distance, time) {
  return distance / time;
}
console.log(speed(100, 2)); // 50

// 11. Weight = mass x gravity
function weight(mass, gravity = 9.81) {
  return mass * gravity;
}
console.log(weight(60)); // 588.6

// 12. Convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(convertCelsiusToFahrenheit(25)); // 77

// 13. BMI Calculator
function bmi(weightKg, heightM) {
  const bmiValue = weightKg / (heightM ** 2);
  if (bmiValue < 18.5) return "Underweight";
  else if (bmiValue < 25) return "Normal weight";
  else if (bmiValue < 30) return "Overweight";
  else return "Obese";
}
console.log(bmi(70, 1.75)); // Normal weight

// 14. Check Season
function checkSeason(month) {
  month = month.toLowerCase();
  if (["september", "october", "november"].includes(month)) return "Autumn";
  else if (["december", "january", "february"].includes(month)) return "Winter";
  else if (["march", "april", "may"].includes(month)) return "Spring";
  else if (["june", "july", "august"].includes(month)) return "Summer";
  else return "Invalid month";
}
console.log(checkSeason("April")); // Spring

// 15. Find max without using Math.max
function findMax(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log(findMax(0, 10, 5));  // 10
console.log(findMax(0, -10, -2)); // 0
