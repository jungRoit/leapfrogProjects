var input = [[1,2,3],[2,4,5],6];


var output  = input.reduce(function(acc,val){
    return acc.concat(val);
},[]);

var finalResult = output.filter(function(val,index){
    return output.indexOf(val) == index;
});

console.log(finalResult);