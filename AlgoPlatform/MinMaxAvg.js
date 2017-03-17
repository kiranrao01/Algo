function greaterthan(arr,newarr) {
    var sum=1;
    var min=arr[0];
    var max=arr[0];
    for(var i=0; i<arr.length; i++){
      sum += arr[i];
      if(max < arr[i]){
        max = arr[i];
      }
      if(min>arr[i]){
        min=arr[i];
      }
    }
      var avg = sum / arr.length;
      newarr.push(max, min, avg)
      return newarr;
}
greaterthan([3,4,5,7,6,1],[]);
