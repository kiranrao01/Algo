function quickSort(arr, left, right) {
  var len = arr.length, pivot, partitionindex;
  if(left<right){
    pivot = right;
    partitionindex = partion(arr, pivot, left, right);
    quickSort(arr, left, partitionindex-1);
    quickSort(arr, partitionindex+1, right);
  }
return arr;
}
quickSort([0,3,9,4,2,-1,7],0,6);

function partion(arr, pivot, left, right) {
  var pivotVal = arr[pivot],
  partitionindex=left;
  for(var i = left; i < right; i++){
    if(arr[i] < pivotVal){
      swap(arr, i, partitionindex);
      partitionindex++;
    }
  }
  swap(arr, right, partitionindex);
  return partitionindex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
