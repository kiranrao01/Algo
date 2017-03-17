var arr=["sai","naresh","pranay"]

function previouslength(arr) {
  for (var i = arr.length-1; i >= 1; i--) {
    arr[i]=arr[i-1].length;
    console.log(arr[i]);
  }
  arr[0]=0;
  return arr;

}
y=previouslength(arr)
console.log(y);
