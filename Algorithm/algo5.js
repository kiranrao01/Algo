var array=[0,1,2,3]
function unorderedpair(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      for (var k = 0; k < 10000; k++) {
        console.log(array[i]+","+array[j]);
      }
    }
  }

}
unorderedpair(array);
