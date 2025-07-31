// Human readable time format with two digits for hours and minutes
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

month = month < 10 ? '0' + month : month;
date = date < 10 ? '0' + date : date;
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
