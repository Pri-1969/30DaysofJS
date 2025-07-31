// Day 2 - Level 2 Exercises

// 1. Print this quote
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Print this quote by Mother Teresa
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// 3. Check if typeof '10' is exactly equal to 10
console.log(typeof '10' === typeof 10);  // false
console.log(typeof parseInt('10') === typeof 10);  // true

// 4. Check if parseFloat('9.8') is equal to 10, else make it exactly equal
console.log(parseFloat('9.8') === 10);  // false
console.log(Math.ceil(parseFloat('9.8')) === 10); // true after ceil()

// 5. Check if 'on' is found in both python and jargon
console.log('python'.includes('on'));  // true
console.log('jargon'.includes('on'));  // true

// 6. Check if 'jargon' is in the sentence
let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon'));  // true

// 7. Generate a random number between 0 and 100 inclusively
console.log(Math.floor(Math.random() * 101));  // 0-100

// 8. Generate a random number between 50 and 100 inclusively
console.log(Math.floor(Math.random() * 51) + 50);  // 50-100

// 9. Generate a random number between 0 and 255 inclusively
console.log(Math.floor(Math.random() * 256));  // 0-255

// 10. Access 'JavaScript' string characters using a random number
let jsString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]);

// 11. Print this pattern using escape characters
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

// 12. Use substr to slice out 'because because because' from this sentence
let longSentence = 'You cannot end a sentence with because because because is a conjunction';
let startIndex = longSentence.indexOf('because');
let slicedPhrase = longSentence.substr(startIndex, 'because because because'.length);
console.log(slicedPhrase);
