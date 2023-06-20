const repeatString = function(word, num) {
    let output="";

    for(let i = 0; i<num; i++){
        output+=word;
    }
    return output;
};

repeatString("hey",3);
// Do not edit below this line
module.exports = repeatString;
