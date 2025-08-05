// Exercise 1: Grade Checker
let score = prompt("Enter your score:");
if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else if (score >= 50) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Exercise 2: Season Checker
let month = prompt("Enter month:").toLowerCase();
if (month === 'september' || month === 'october' || month === 'november') {
  console.log("The season is Autumn");
} else if (month === 'december' || month === 'january' || month === 'february') {
  console.log("The season is Winter");
} else if (month === 'march' || month === 'april' || month === 'may') {
  console.log("The season is Spring");
} else if (month === 'june' || month === 'july' || month === 'august') {
  console.log("The season is Summer");
} else {
  console.log("Invalid month entered.");
}

// Exercise 3: Weekend or Working Day
let day = prompt("What is the day today?").toLowerCase();
switch (day) {
  case 'saturday':
  case 'sunday':
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`);
    break;
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`);
    break;
  default:
    console.log('Invalid day entered.');
}
