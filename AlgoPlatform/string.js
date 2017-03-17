function greaterthan(arr) {
  for(var i=0; i<arr.length; i++){
    if(arr[i]<0){
      arr[i]="Dojo";
    }
  }
  return arr;
}
greaterthan([-3,4,-5,7,6,-9],[]);
