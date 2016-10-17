var sentence = prompt("please enter a sentence:");

var firstLetter = sentence.charAt(0);
var lastLetter = sentence.slice(-1);

var newSentence = function(firstLetter, lastLetter) {
  return (firstLetter + lastLetter).toUpperCase();
}

var finalSentence = alert (newSentence(firstLetter, lastLetter));
