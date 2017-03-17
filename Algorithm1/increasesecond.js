var arr=[1,2,3,4,5]
var temp=0;
function increasesecond(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]%2!==0){
        arr[i]=arr[i]+1;

    }
    console.log(arr[i]);
  }
return arr;
}
temp=increasesecond(arr);
console.log(temp);
