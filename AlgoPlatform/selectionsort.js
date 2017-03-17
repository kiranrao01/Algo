function selectionSort(arr) {
  var temp=0;
  var min=0;
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    min = i;
    for (var j = i+1; j < len; j++) {
      if (arr[j]<arr[min]) {
          min = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  console.log(arr);
}
selectionSort([2,1,6,3,4,9,5,7]);
