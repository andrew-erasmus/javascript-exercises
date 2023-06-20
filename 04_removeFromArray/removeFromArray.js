const removeFromArray = function(arr, num) {
    let i = 0;

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] === num){
            arr.splice(i,1);
            break;
        }
    }
    return arr;
};

removeFromArray([1,2,3,4], 3)
// Do not edit below this line
module.exports = removeFromArray;
