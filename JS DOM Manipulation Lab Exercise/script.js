// Selecting the heading using getElementById
const heading = document.getElementById('main-heading');
console.log("Heading:", heading);

// Selecting the paragraph using querySelector
const paragraph = document.querySelector('.intro-text');
console.log("Paragraph:", paragraph);

// Selecting the unordered list using getElementById
const list = document.getElementById('item-list');
console.log("List:", list);

// Selecting all list items using querySelectorAll
const listItems = document.querySelectorAll('.list-item');
console.log("All List Items:");
listItems.forEach((item, index) => {
  console.log(`Item ${index + 1}:`, item);
});
