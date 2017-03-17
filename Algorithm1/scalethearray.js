var arr=[1,2,3,4]
var num=2;
function scale(arr){
 for (var i = 0; i < arr.length; i++) {
   arr[i] = num*arr[i] ;

 }
 return arr;

}
console.log(scale(arr));
