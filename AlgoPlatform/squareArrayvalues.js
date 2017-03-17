function greaterthan(arr, sqr) {

    for(var i=0; i<arr.length; i++){
      sqr.push(arr[i] * arr[i]);
    }
    return sqr;
}
greaterthan([1,2,3,4,5,9],[])
