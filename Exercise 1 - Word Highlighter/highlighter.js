// console.log("Exercise 1 - Word Highlighter");

const myText = document.getElementById('myParagraph').textContent;

let countedWords = {};

let text = myText.split(' ')
text.forEach((word) => {
  countedWords[word.toLocaleLowerCase()] = countedWords[word.toLocaleLowerCase()]+ 1 || 1;
 });

 let mostOftenOccuringWords = Object.entries(countedWords).sort((a,b) =>  b[1] - a[1]).flat(Infinity).slice(2,12);

const highlightedParagraph = myText.replace(
    new RegExp(`\\b(${mostOftenOccuringWords.join('|')})\\b`, 'gi'),
    '<span style="background-color: yellow">$1</span>'
);


document.getElementById("myParagraph").innerHTML = highlightedParagraph;








