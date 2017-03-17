function LinkedList() {
  this.head = null;
  this.tail = null;

  this.add = function(value) {
    var node = new Node(value);
    if(this.head == null){
      this.head = node;
    }
    if(this.tail!=null){
      this.tail = node;
    }
    this.tali = node;
  };
}
function Node(value){
  this.value = value;
  this.next = null;
}
var list = new LinkedList();
list.add(5);
list.add(8);
console.log(list);
