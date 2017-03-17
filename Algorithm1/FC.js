

function functionName() {
var c=0;
var f=200;
while (f<=200) {
       c = (f-32)*5/9;
              if(c==f){
         console.log("temperatures are equal at:", f);
         return;
       }
       f=f-1;
       }

}
  functionName();
