function reverse(s, arr) {
  for (var i = s.length;  i>=0;  i--) {
    arr += s;
  }
return arr;
}
reverse("abcdefg",[])


function reverse(s) {
  var arr ="";
  for (var i = s.length;  i>=0;  i--) {
    arr += s[i];
  }
return arr;
}
reverse("abcdefg");

function reverseString(str) {
    var newstr =  str.split("").reverse().join("");
    return newstr;
}
reverseString("hello");
