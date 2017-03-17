var n = 33;
function isprime(n) {
  for (var i = 2; i*i <= n; i++) {
    if (n%i==0) {
      return false;
    }
    }
    return true;
}
