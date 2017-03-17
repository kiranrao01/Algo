function insertionsort(arr) {
  var temp=0;
  for (var i = 1; i < arr.length; ++i) {
    temp = arr[i];
      for (var j = i-1; j>=0&& arr[j]>temp ; --j) {
        arr[j+1] = arr[j];
      }
      arr[j+1]=temp;
    }
    console.log(arr);
  }
  insertionsort([2,1,3,5,7,6,4,0]);


function insertionSort(arr){
  var i, len = arr.length, el, j;

  for(i = 1; i<len; i++){
    el = arr[i];
    j = i;

    while(j>0 && arr[j-1]>el){
      arr[j] = arr[j-1];
      j--;
   }

   arr[j] = el;
  }
console.log(arr);
  return arr;
}
insertionSort([7,5,2,4,3,9,1]);
