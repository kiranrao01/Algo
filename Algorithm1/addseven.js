var arr=[1,2,3];

function addseven(arr) {
  for (var i = 0; i < arr.length; i++) {
            arr[i]=arr[i]+7;
          console.log(arr[i]);
}
     arr[0]=arr[0]-7;
     return arr;
}
console.log(addseven(arr));
