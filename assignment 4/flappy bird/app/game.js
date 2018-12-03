var container = document.getElementById('container');

var width = 1000;
var height = 600;

container.style.width = width+'px';
container.style.height = height+'px';
container.style.position = 'relative';
container.style.background = 'url("app/img/background.png")';
container.style.overflow = 'hidden';

var welcome = document.createElement('div');
welcome.style.height = '30px';
welcome.style.width = '40px';
welcome.style.position - 'absolute';
welcome.style.top = '30px';
welcome.style.left = '40px';
welcome.style.fontSize = '50px';
welcome.textContent = 'score:'+score;

container.appendChild(welcome);


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
var score = 0;
var highScore = 0;


welcome.textContent = 'score:'+score;

var initializeGame = setInterval(function() {     
        
       var collision =  brd.checkCollision(pipeList.getAll());
       if(collision){

        if(score > highScore) {
            highScore = score;
            localStorage.setItem('highScore',highScore);
        }

        var gameOver = document.createElement('div');
        gameOver.style.height = '300px';
        gameOver.style.width = '600px';
        gameOver.style.position - 'absolute';
        gameOver.style.top = '50%';
        gameOver.style.margin = 'auto';
        gameOver.style.padding = '20px 0 20px 20px';
        gameOver.style.textAlign = 'center';
        gameOver.style.fontSize = '30px';
        gameOver.style.background = 'yellow';
        gameOver.style.opacity = '0.5';

        var Heading = document.createElement('h1');
        Heading.textContent = '!!! GAME OVER !!!';

        var scoreHeading = document.createElement('h2');
        scoreHeading.textContent = "Your Score: "+ score;

        var highScoreHeading = document.createElement('h3');
        highScoreHeading.textContent = "High Score: "+ localStorage.getItem('highScore');

        gameOver.appendChild(Heading);
        gameOver.appendChild(scoreHeading);
        gameOver.appendChild(highScoreHeading);
        
        container.appendChild(gameOver);
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
                if(i%2 ==1) {
                    if(pipeList.getAll()[i].location + pipeList.getAll()[i].width == brd.x) {
                        score++;
                        welcome.textContent = 'score:'+score;
                        console.log('score:'+score);
                    }
                }
                
                if(pipeList.getAll()[i].location == 0) {
                    pipeList.remove();
                    
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
        brd.changeDirection(brd.dy*3);
       }

     pipeCounter ++;

    }
},10);
