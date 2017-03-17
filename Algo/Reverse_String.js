var  firstreverse = "helooworld"
  var reverse = "";
  var len = firstreverse.length-1;
  console.log("String length : "+len);
  for (var i = len ; i > 0 ; i--) {
    reverse = reverse + firstreverse[i];
  }
console.log("Reverse String : "+reverse);
