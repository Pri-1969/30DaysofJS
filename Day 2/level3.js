// Day 2: Level 3 Exercises

// 1. Count number of "love" in the sentence
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveCount = sentence1.match(/love/gi).length;
console.log(`Number of 'love' in sentence:`, loveCount);

// 2. Count number of "because" in the sentence
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let becauseCount = sentence2.match(/because/gi).length;
console.log(`Number of 'because' in sentence:`, becauseCount);

// 3. Clean text and find most frequent word
const messyText = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Clean unwanted symbols using regex
let cleanText = messyText.replace(/[%$@#&;!?.]/g, '');
console.log('Clean Text:', cleanText);

// Split the cleaned text into words
let words = cleanText.split(' ');

// Count word frequencies
let wordFreq = {};
for (let word of words) {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
}

// Find the most frequent word
let mostFrequent = '';
let highestCount = 0;
for (let word in wordFreq) {
    if (wordFreq[word] > highestCount) {
        mostFrequent = word;
        highestCount = wordFreq[word];
    }
}
console.log(`Most frequent word: ${mostFrequent} (${highestCount} times)`);

// 4. Calculate total annual income from text
const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let incomeNumbers = incomeText.match(/\d+/g).map(Number);
let monthlySalary = incomeNumbers[0];
let annualBonus = incomeNumbers[1];
let monthlyCourses = incomeNumbers[2];

let totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);
console.log(`Total Annual Income: €${totalAnnualIncome}`);
