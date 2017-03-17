var arr= [3,2,4,3,7,9];
var min=0;
var max=0;
var temp=0;
function printreturn(arr) {
  var copy=arr;
for (var i = 0; i < arr.length; i++) {
    for (var j=i+1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
}
console.log(arr[0]);
console.log(arr[arr.length-1]);
}
printreturn(arr);













// for (var i = 0; i < arr.length; i++) {
//   if (arr[i]<arr[i+1]){
//      min=arr[i];
//      arr[i+1] = min
//    }
//   }
//   console.log(min);
//
// }
// printreturn(arr);
