var array = [1,2,3,4,5,6]
function unorderedpair(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      console.log(array[i] +","+array[j]);
    }
  }

}
unorderedpair(array);
