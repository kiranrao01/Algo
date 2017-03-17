function countdown(lownum,highnum,mult)
{
  for (var i = highnum; i >lownum; i=i-mult) {
    console.log(i);
  }
}
countdown(2,8,4);
