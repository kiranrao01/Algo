function greaterthan(arr, neg) {

    for(var i=0; i<arr.length; i++){
      if(arr[i]>=0){
        neg.push(arr[i]);
      }
    }
    return neg;
}
greaterthan([1,-2,3,-4,5,-9,0],[])
