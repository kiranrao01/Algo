var array = [1,2,3,4];
function reverse(array) {
  var other =null;
  for (var i = 0; i < array.length / 2; i+=1) {
    other = array.length-i-1;
    var temp = array[i];
    array[i] = array[other];
    array[other] = temp;
  }
  return array;

}
reverse(array);
