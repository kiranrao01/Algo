function countdown(p1,p2,p3,p4) {

    var i=p2;
    while (i<=p3) {
      if (i%p1==0) {
        if (i==p4) {
            i++;
          continue;
        }
        else {
          console.log(i);
        }

      }
  i++;
    }

  }
  countdown(3,5,17,9);
