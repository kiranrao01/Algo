function findIndex(values, target) {
  for(var i = 0; i < values.length; ++i){
    if (values[i] == target) { return i; }
  }
}
findIndex([7, 3, 6, 1, 0], 6)
