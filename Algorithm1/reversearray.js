var arr=[3,1,6,4,2];
var temp=[];
var j=0;
function reverse(arr) {

for (var i=arr.length-1; i >=0; i--) {
      temp[j]=arr[i];
     j++;
}
 return temp;
}
console.log(reverse(arr));
