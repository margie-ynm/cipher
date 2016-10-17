var sentence = prompt("please enter a sentence:");
var firstLetter = sentence.charAt(0);
var lastLetter = sentence.slice(-1);
var newSentence = function(firstLetter, lastLetter) {
  return upper = (firstLetter + lastLetter).toUpperCase();
};
alert(newSentence(firstLetter,lastLetter));



var combineReverse = function(upper) {
  return newResults =upper.split('').reverse().join('');
};
alert(combineReverse(upper));


var results = function (newResults){
  return finalResults = sentence + newResults;
};
alert(results(newResults));

var count = function (sentence){
  return newFinal = sentence.charAt((sentence.length)/2) + finalResults;
};

alert(count(sentence));

var reverseWhole = function(newFinal) {
  return lastFinal = newFinal.split('').reverse().join('');
};

alert(reverseWhole(newFinal));

$(document).ready(function(){
jQuery("p").click(function() {
  alert(sentence);
});

jQuery("h2").click(function() {
  alert(lastFinal);
});
});
