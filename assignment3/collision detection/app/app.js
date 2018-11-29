var body = document.querySelector('body');
body.style.margin = '0';
body.style.padding = '0';

var container = document.getElementById('container');

var width = 1000;
var height = 600;

container.style.width = width+'px';
container.style.height = height+'px';

container.style.border = '1px solid black';




circleList = [];
distanceList = [-1,1];

for(var i = 0;i<20; i++){
    var radius = Math.ceil(Math.random()*20);
    var x = Math.ceil(Math.random()* (width-(radius*2)));
    var y = Math.ceil(Math.random()* (height-(radius*2)));
    var dx =distanceList[Math.floor((Math.random()*2))];
    var dy = distanceList[Math.floor((Math.random()*2))];
    

    circleList.push(new Circle(x,y,dx,dy,radius));
}


for(var j = 0;j<circleList.length;j++){
    circleList[j].draw();
    
}

for(var k = 0;k<circleList.length;k++){
    circleList[k].move();
}


console.log(circleList);





