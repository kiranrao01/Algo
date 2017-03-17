function leapyear(year) {



   if (year%400==0) {
      console.log("leapyear");
    }
   else if (year%100==0) {
     console.log("Not a leapyear");
    }
    else if (year%4==0){
        console.log("leapyear");
   }
   else {
     console.log("Not a leapyear");
   }
}
leapyear(2015);
