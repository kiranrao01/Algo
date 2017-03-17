var arr=[2,2,3,5,6]
var temp=0;
var y=0;
function oneanother(arr) {

  for (var i = 0; i < arr.length; i++) {
      if(arr[i]%2!==0){
           return arr[i];
      }

        }


}

console.log(arr[arr.length-2]);

y=oneanother(arr);
console.log(y);
