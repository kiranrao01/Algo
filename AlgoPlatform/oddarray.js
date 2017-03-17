function findMax(arr) {
    arr = [];
    for(var i=0; i<50; i++){
      if (i%5!==0) {
        if(i%3!==0){
          if(i%2!==0){
            arr.push(i);
          }

        }

      }
    }
    return arr;
}
findMax()
