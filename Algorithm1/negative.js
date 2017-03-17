var arr=[1,-3,5]

function negative(arr) {
  for (var i = 0; i < arr.length; i++) {
       if(arr[i]>0){
        arr[i]= -1*arr[i];
       }
       console.log(arr[i]);
  }
return arr;
}
console.log(negative(arr));
