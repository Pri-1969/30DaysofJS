// Day 8 - Level 2 Exercise
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// 1. Find the person who has many skills
let mostSkilledUser = '';
let maxSkills = 0;

for (const user in users) {
  const numSkills = users[user].skills.length;
  if (numSkills > maxSkills) {
    maxSkills = numSkills;
    mostSkilledUser = user;
  }
}

console.log(`User with the most skills: ${mostSkilledUser}`);

// 2. Count logged in users and users with >= 50 points
let loggedInCount = 0;
let highPointsCount = 0;

for (const user in users) {
  if (users[user].isLoggedIn) loggedInCount++;
  if (users[user].points >= 50) highPointsCount++;
}

console.log(`Logged in users: ${loggedInCount}`);
console.log(`Users with >= 50 points: ${highPointsCount}`);

// 3. Find people who are MERN stack developers
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let mernDevs = [];

for (const user in users) {
  const skills = users[user].skills;
  if (mernStack.every(skill => skills.includes(skill))) {
    mernDevs.push(user);
  }
}

console.log('MERN stack developers:', mernDevs);

// 4. Set your name in the users object without modifying the original users object
const updatedUsers = { ...users, YourName: {
  email: 'yourname@example.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Node'],
  age: 24,
  isLoggedIn: true,
  points: 45
}};

console.log('Updated users with your name:', updatedUsers);

// 5. Get all keys of users object
const userKeys = Object.keys(users);
console.log('User keys:', userKeys);

// 6. Get all values of users object
const userValues = Object.values(users);
console.log('User values:', userValues);

// 7. Use the countries object to print country name, capital, population and languages
// Dummy countries object for the purpose of the exercise
const countries = {
  Nigeria: {
    capital: 'Abuja',
    population: 200_000_000,
    languages: ['English']
  },
  Finland: {
    capital: 'Helsinki',
    population: 5_500_000,
    languages: ['Finnish', 'Swedish']
  },
  Japan: {
    capital: 'Tokyo',
    population: 126_000_000,
    languages: ['Japanese']
  }
};

for (const country in countries) {
  const { capital, population, languages } = countries[country];
  console.log(`Country: ${country}`);
  console.log(`Capital: ${capital}`);
  console.log(`Population: ${population}`);
  console.log(`Languages: ${languages.join(', ')}`);
  console.log('---');
}
