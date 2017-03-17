var arr=[-1,1,1,1];
var count=0;
function countpositive(arr) {

for (var i = 0; i < arr.length; i++) {
     if(arr[i]>=0){
          count++;
          arr[arr.length-1]=count;
     }

}
console.log(arr);
}
countpositive(arr);
