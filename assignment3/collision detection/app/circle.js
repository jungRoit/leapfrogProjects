
function Circle(x,y,dx,dy,radius){
    var that = this;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
     this.colorSet = ['red','yellow','green','blue','black','purple','orange','gray','magenta','pink','silver','brown']
    this.color = Math.floor(Math.random()* this.colorSet.length);
    this.radius = radius;
    
    var ball = document.createElement('div');
    var container = document.getElementById('container');
    

    this.draw = function() {
        ball.style.width = this.radius*2+'px';
        ball.style.height =this.radius*2+'px';
        ball.style.position = 'absolute';
        ball.style.background = 'rgba('+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+')';
    //    var movY = this.y*this.dy;
    //    var movX = this.x*this.dx;
        ball.style.top = this.y+'px';
        ball.style.left = this.x+'px';
        ball.style.borderRadius = '50%';
       
               container.appendChild(ball);

    
    };
    this.update = function(){
        if(this.x + this.radius*2 > parseInt(container.style.width) || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if(this.y + this.radius*2 > parseInt(container.style.height) || this.y - this.radius < 0 ){
            this.dy = -this.dy;
        }
        
    
        // this.y += this.dy;
        // this.x += this.dx;

        // this.draw();
    }

    this.move = function() {
        
        var movement = setInterval(function(){
            that.update();
            that.checkCollision();
            ball.style.top = that.y+'px';
            ball.style.left = that.x+'px';
            that.x += that.dx;
            that.y += that.dy;
        },10);
    }
    this.checkCollision = function() {
        for(var i = 0;i<circleList.length;i++){
            var x1 = that.x;
            var y1 = that.y;
            var x2 = circleList[i].x;
            var y2 = circleList[i].y;
            var radius1 = that.radius;
            var radius2 = circleList[i].radius;

            var dx = x1 - x2;
            var dy = y1 - y2;
            var distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < radius1 + radius2) {
                that.dx = -that.dx;
                that.dy = -that.dy;
                circleList[i].dx = -circleList[i].dx;
                circleList[i].dy = -circleList[i].dy;
            }
           
                
        }
    }
}


























//function Circle(x,y){
//     this.x = x;
//     this.y = y;
//     this.dx = 5;
//     this.dy = 5;

//     this.draw = function() {
//         // c.beginPath();
//         // c.arc(this.x, this.y, this.radius,0,Math.PI*2,false);
//         // c.strokeStyle = "rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+")";
//         // c.stroke();
        
//         var cir = document.createElement('div');
//         cir.style.width = Math.ceil(Math.random()*150)+'px';
//         cir.style.height = Math.ceil(Math.random()*150)+'px';
//         cir.style.position = 'absolute';
//         cir.style.background = 'rgba('+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+')';
//         cir.style.top = this.y+'px';
//         cir.style.left = this.x+'px';
//         // cir.style.borderRadius = '50%';

//         container.appendChild(cir);
//     }
//     this.update = function(){

        

//         // if(this.x +this.width > container.width){
//         //     this.dx = -this.dx;
//         // }
    
//         // if(this.x  < 0){
//         //     this.dx = -this.dx;
//         // }
    
//         // if(this.y + this.height > container.height ){
//         //     this.dy = -this.dy;
//         // }
        
//         // if(this.y < 0){
//         //     this.dy = -this.dy;
//         // }
    
//         this.y++;
//         this.x++;

//         this.draw();
//     }

//     this.move = function() {
//         setInterval(function(){
            
//             this.style.top = this.y+'px';
//             this.style.left = this.x+'px';
//         },10);
//     }
//     this.checkCollision = function() {
        
//     }
// }