var fruits = [
    { id: 1, name: 'Banana', color: 'Yellow' },
    { id: 2, name: 'Apple', color: 'Red' },
    { id: 3, name: 'Grapes', color: 'Green' },
    { id: 4, name: 'Orange', color: 'Orange' },
    { id: 5, name: 'Strawberry', color: 'Red' }
]

function searchByName(arr, keyword) {
    var result = {};

    for (var i = 0; i < arr.length; i++) {
        
        var obj = arr[i];
        var keyList = Object.keys(obj);

        keyList.forEach(function (key) {
            if (obj[key] === keyword) {
                result = obj;
            }
        });

    }
   
    return result;
}

function searchByKey(arr,key,val){
    var result = {};
    for(var i=0; i<arr.length;i++){
        if(arr[i][key] === val){
            result = arr[i];
        }
    }

    return result;

}

console.log(searchByName(fruits, 'Apple'));

console.log(searchByKey(fruits,'name','Orange'));


