function greaterthan(arr) {
  var x1 = arr[0];
  var x2 = arr[arr.length-1];

  arr[0] = x2;
  arr[arr.length-1]= x1;
  return arr
}
greaterthan([-3,4,5,7,6,9],[]);
