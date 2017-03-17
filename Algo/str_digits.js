var funstr = "23jewksjd"
wordArray = funstr.split("");
console.log(wordArray);
var num = [];
// New.map(item => parseInt(item) ? parseInt(item) : item)
for (var i= 0; i < wordArray.length; i++ ){
  if (wordArray[i] == 0 || wordArray[i] == 1 || wordArray[i] == 2 || wordArray[i] == 3 || wordArray[i] == 4 || wordArray[i] == 5 ||
     wordArray[i] == 6 || wordArray[i] == 7 || wordArray[i] == 8 || wordArray[i] == 9 ) {
    num.push(wordArray[i]);
  }
}
console.log(num);
