var arr=[1,3,5,7,9,13]
var count=0;
var temp=[];
function functionName(arr,count,temp) {
  j=0;
  if(arr.length==0){
     console.log("arr is empty");
     return;
  }
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i]>arr[1]) {
      count++;
      temp[j]=arr[i];
      j=j+1;
    }
  }

console.log(temp);
console.log(count);

}
 functionName(arr,count,temp);
