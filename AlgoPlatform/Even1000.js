function even(sum) {

  sum = 0;
  for (var i = 0; i < 1001; i++) {
    if (i%2==0) {
      sum += i;
      }

  }
  console.log(sum);
}
even();
