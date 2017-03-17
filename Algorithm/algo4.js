var arrayA = [1,2,3,4,5,6]
var arrayB = [0,1,2,3,4,5]
function unorderedtwopair(arrayA,arrayB) {
for (var i = 0; i < arrayA.length; i++) {
  for (var j = 0; j < arrayB.length; j++) {
    if (arrayA[i]<arrayB[j]) {
      console.log(arrayA[i]+","+arrayB[j]);
    }
  }
}
}
unorderedtwopair(arrayA,arrayB);
