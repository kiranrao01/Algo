function findMax(arr) {
    var max=0;
    for(var i=0; i<arr.length; i++){
        if(max<arr[i]) {
          max = arr[i]
    }
    }
    max;
}
findMax([2,4,5,6,7])
