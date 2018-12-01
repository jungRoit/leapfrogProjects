var container = document.getElementById('container');

var width = 1000;
var height = 600;

container.style.width = width+'px';
container.style.height = height+'px';
container.style.position = 'relative';
container.style.background = 'url("app/img/background.png")';
container.style.overflow = 'hidden';

// var welcome = document.createElement('div');
// welcome.style.height = '30px';
// welcome.style.width = '40px';
// welcome.style.position - 'absolute';
// welcome.style.top = '30px';
// welcome.style.left = '40px';
// welcome.style.background = 'black';

// container.appendChild(welcome);


var brd = new Bird();
brd.draw();
brd.move();

var pipeHeight = Math.ceil(Math.random()*(height-100));

// var pipe = new Pipe(pipeHeight,true);
// pipe.draw();

// var pipe2 = new Pipe(height-(pipeHeight+100),false);
// pipe2.draw();



pipeList = new PipeList();

// pipeList.add(pipe);
// pipeList.add(pipe2);


var pressed = false;
var pipeCounter = 0;


var initializeGame = setInterval(function() {     
        
       var collision =  brd.checkCollision(pipeList.getAll());
       if(collision){
        clearInterval(initializeGame);
       }else {

        brd.move();
       
        pipeHeight = Math.ceil(Math.random()*(height-100));
        if(pipeCounter % 500 == 0) {
          var  pipe = new Pipe(pipeHeight,true);
            pipe.draw();
            pipeList.add(pipe);
            
            var pipe2 = new Pipe(height-(pipeHeight+100),false);
            pipe2.draw();
            pipeList.add(pipe2);
        }
                

               for(var i = 0;i<pipeList.getAll().length;i++) {
                pipeList.getAll()[i].move();
                if(pipeList.getAll()[i].location <= 0) {
                    pipeList.remove();
                    console.log(pipeList.getAll());
                }
            }
      
    
        document.addEventListener('keydown',function(){
            pressed = true;
        });
    
        document.addEventListener('keyup',function(){
            pressed = false;
        });
    
       if(pressed == true){
        brd.changeDirection(-brd.dy);
       }else{
        brd.changeDirection(brd.dy);
       }

     pipeCounter ++;

    }
},10);
