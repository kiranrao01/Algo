// function bubblesort(arr) {
//   var temp=0;
//   var count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     temp = arr[i+1];
//       if (arr[i]>temp) {
//           arr[i+1]=arr[i];
//           arr[i]=temp;
//           count += count+1;
//       }
//     }
//     console.log(arr);
//   if (count === 0) {
//     return arr;
//   }
//   else {
//     console.log(count);
//     return bubblesort(arr);
//   }
//   }
// bubblesort([2,1,3,5,7,6,4,0]);
//
function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   console.log(arr);
}
bubbleSort([7,5,2,4,3,9,-1,-2]);
