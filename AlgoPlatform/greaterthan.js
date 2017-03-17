function greaterthan(arr, temp) {
    var arr1 = [];
    var count = 0;
    for(var i=0; i<arr.length; i++){
      if(temp<arr[i]){
          arr1.push(arr[i]);
          // return arr1;
      }

    }
    count = arr1.length;
    console.log(count);
    return arr1;

}
greaterthan([1,2,3,4,5,9],1)
