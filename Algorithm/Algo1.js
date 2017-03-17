var array=[3,1,6,4,2];
function foo(array){
  var sum = 0;
  var product =1;
  for (var i = 0; i<array.length; i++) {
    sum += array[i];
  }
  for (var i = 0; i < array.length; i++) {
    product *= array[i];
  }
 console.log(sum);
 console.log(product);
}
foo(array);
