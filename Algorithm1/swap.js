var arr=[1,2,3,4,5,6]

function swap() {

  for (var i = 0; i < arr.length/2; i=i+2) {
    temp=arr[i]
    arr[i]=arr[arr.length-(i+1)]
    arr[arr.length-(i+1)]=temp
  }
  return arr;
  }
  console.log(swap(arr));
