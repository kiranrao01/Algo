var str = "Hello world !!"

  word = str.split("");
  for (i=0; i<str.length; i++){
    if (word[i] !== "") {
      console.log(word);
    }
    else {
    word[i].split("");
    }

  }

  console.log(word);
