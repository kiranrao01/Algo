function fib(arr,a,b){
  var temp =a; //0
  a=b; // 1
  b = temp+b; // 1
  console.log(b); //1
  arr.push(b); // 1
  if (arr.length<100) {
    fib(arr,a,b);
  }
}
console.log(fib([],0,1));
