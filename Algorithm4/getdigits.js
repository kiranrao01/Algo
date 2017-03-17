var word = ["0s1f3g4gh!!6t"]


for (i=0; i<word.length; i++){
  if(word[i]!== parseInt){
    word[i].pop;
    console.log(word.join(""));
  }
}
console.log(word.join(""));
