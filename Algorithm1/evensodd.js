var arr=[2,3,3,3,6,2,3,5,7,2,2,2,3,3,3]

function evenodd(arr) {
  for (var i = 0; i <= arr.length-3; i++) {
    if(arr[i]%2 !==0 && arr[i+1]%2 !==0 && arr[i+2]%2 !==0){
      console.log("odd");
    }
    if(arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0){
      console.log("even");
  }
}
}
evenodd(arr);
