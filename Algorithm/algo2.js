var array = [1,2,3,4]
function printpairs(array){
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i]+ ","+array[j]);
    }

  }


}
printpairs(array);
