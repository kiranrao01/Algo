var arr=[1,2,3,4]

function double(arr) {

  for (var i = 0; i < arr.length; i++) {
    arr[i]=arr[i]+arr[i];
  }
console.log(arr);
}
double(arr);
