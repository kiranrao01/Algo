function binarySearch(arr,x) {

    var min = 0;
    var max = arr.length;
    var i = Math.floor(max/2);

    while (min !== max) {

        if (arr[i] == x) {

            console.log("true");

            return true;

        }

        if (arr[i] < x) {

            min = i+1;

            i = Math.floor((min+max)/2);

        }

        else {

            max = i-1;

            i = Math.floor((min+max)/2);

        }

    }

    console.log("false")

    return false;



}
binarySearch([3,5,6,2,1,7],5)
