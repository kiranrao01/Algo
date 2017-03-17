var sum(Node node){
  if(node==null){
      return 0;
  }
  return sum(node.left)+node.value+sum(node.right);
}
