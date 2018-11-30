var container = document.getElementById('container');

var width = 1000;
var height = 600;

container.style.width = width+'px';
container.style.height = height+'px';
container.style.position = 'relative';
container.style.background = 'url("app/img/background.png")';
container.style.overflow = 'hidden';

var brd = new Bird();
brd.draw();
brd.move();

var pipeHeight = Math.ceil(Math.random()*(height-100));

var pipe = new Pipe(pipeHeight,true);
pipe.draw();

var pipe2 = new Pipe(height-(pipeHeight+100),false);
pipe2.draw();



pipeList = new PipeList();

pipeList.add(pipe);
pipeList.add(pipe2);
// console.log(pipeList.getAll());

var pressed = false;


var initializeGame = setInterval(function() {     
        
       var collision =  brd.checkCollision(pipeList.getAll());
       if(collision){
        clearInterval(initializeGame);
       }else {

        brd.move();
        pipe.move();
        pipe2.move();
    
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

    }

    //    pipeHeight = Math.ceil(Math.random()*(height-100));

    //    var p1 = new Pipe(pipeHeight,true);
    //    p1.draw();
    //    pipeList.add(p1);
    // //    pipeList.add(new Pipe(height-pipeHeight,false));
       

       
    //     p1.move();
       

    
    
   

},10);
