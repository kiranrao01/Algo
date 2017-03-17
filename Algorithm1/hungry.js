var arr=["sai","food", "sai"];
var count=0;
function hungry() {
  for (var i = 0; i < arr.length; i++) {

         if(arr[i]=="food"){
           count++;
          }
         }
  if (count == 0) {
    console.log("i am hungry");
  }else{console.log("food");}
  }
hungry(arr);
