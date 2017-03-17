var num1=4;
var num2=4;
var arr=[]
function functionName(arr,num1,num2) {
     if (num1==num2 ){
        console.log("Jinx!")
        return;
        }
    else{for (var i = 0; i < num1; i++) {
          arr[i]=num2
        }
      console.log(arr);
    }
     }

functionName(arr,num1,num2);
