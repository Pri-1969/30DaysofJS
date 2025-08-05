// Exercise 1: Days in a Month (No Leap Year)
let monthInput = prompt("Enter a month:").toLowerCase();
switch (monthInput) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${monthInput.charAt(0).toUpperCase() + monthInput.slice(1)} has 31 days.`);
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${monthInput.charAt(0).toUpperCase() + monthInput.slice(1)} has 30 days.`);
    break;
  case 'february':
    console.log("February has 28 days.");
    break;
  default:
    console.log("Invalid month.");
}

// Exercise 2: Days in a Month (Considering Leap Year)
let year = prompt("Enter a year:");
if (monthInput === 'february') {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${monthInput.charAt(0).toUpperCase() + monthInput.slice(1)} has 29 days.`);
  } else {
    console.log(`${monthInput.charAt(0).toUpperCase() + monthInput.slice(1)} has 28 days.`);
  }
}
