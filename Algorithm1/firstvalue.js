var arr=[5,4,5,8,9]
function functionName(arr) {
  for (var i = 0; i < arr.length; i++) {

       if(arr[0]>arr.length){
         console.log("Too Big!")
         return;
       }
       if (arr[0]<arr.length) {
         console.log("Too small!")
         return;

       }
       else {
         console.log("Just Right!");
         return;
       }
  }

}
functionName(arr);
