// Day 2 - Level 1 Exercises

// 1. Declare a variable named challenge and assign it to '30 Days Of JavaScript'
let challenge = '30 Days Of JavaScript';

// 2. Print the string on the browser console
console.log(challenge);

// 3. Print the length of the string
console.log(challenge.length);

// 4. Change all characters to uppercase
console.log(challenge.toUpperCase());

// 5. Change all characters to lowercase
console.log(challenge.toLowerCase());

// 6. Cut out the first word '30' using substr() or substring()
console.log(challenge.substr(0, 2));        // using substr
console.log(challenge.substring(0, 2));     // using substring

// 7. Slice out 'Days Of JavaScript'
console.log(challenge.substr(3));          // using substr
console.log(challenge.substring(3));       // using substring

// 8. Check if 'Script' is in the string using includes()
console.log(challenge.includes('Script')); // true

// 9. Split the string into an array
console.log(challenge.split());  // entire string as one array element

// 10. Split the string at spaces
console.log(challenge.split(' '));  // split into words array

// 11. Split company names at commas and turn into an array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12. Replace 'JavaScript' with 'Python'
console.log(challenge.replace('JavaScript', 'Python'));

// 13. What character is at index 15?
console.log(challenge.charAt(15));

// 14. What is the char code of 'J'?
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// 15. Use indexOf to find first 'a'
console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf to find last 'a'
console.log(challenge.lastIndexOf('a'));

// 17. indexOf 'because' in a sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 18. lastIndexOf 'because'
console.log(sentence.lastIndexOf('because'));

// 19. search 'because'
console.log(sentence.search('because'));

// 20. trim() trailing spaces
let trimStr = ' 30 Days Of JavaScript ';
console.log(trimStr.trim());

// 21. startsWith '30'
console.log(challenge.startsWith('30'));

// 22. endsWith 'JavaScript'
console.log(challenge.endsWith('JavaScript'));

// 23. match all 'a's
console.log(challenge.match(/a/g));

// 24. concat '30 Days of' + ' JavaScript'
let part1 = '30 Days of';
let part2 = ' JavaScript';
console.log(part1.concat(part2));

// 25. repeat string 2 times
console.log(challenge.repeat(2));
