// console.log("Exercise 1 - Word Highlighter");

const myText = document.getElementById('myParagraph').textContent;

let text = myText.split(' ')

let count = 0;
let countedWords = {}

text.map((ele) => {
  countedWords[ele] = (countedWords[ele] || 0) +1;
    if(countedWords[ele] === 2) count++
});








