var arrz=[

    [3,2,3,4,3],

    [2,3,3,4,0],

    [7,3,3,5,3],

    [6,5,3,4,1],

    [1,2,3,3,3]

];



var arrxx = [1,76,23,786,0,12,53,17,91,981,43]



var arr = [400,399,10,15]



function trade(arr) {

    var maxProfit = arr[1] - arr[0];

    var buy = 0;

    var sell = 1;

    var c = 0;

    forEach(arr, function(item,index){

        //TOO MANY loops of arr; use math.max to keep larger profit

        for (var i=index; i < arr.length; i++) {

            c++

            if (arr[i] - item > maxProfit && i !== index) {

                maxProfit = arr[i] - item;

                buy = index;

                sell = i;

            }

        }

    })

    return [maxProfit,buy,sell,c]

}
