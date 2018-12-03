var wordList = ["apple","hello","tomato","purple","sizzler","dinosaur","hippopotamus","cauliflower","spongebob","squarepants"]


var container = document.getElementById('container');

var width = 1000;
var height = 600;

container.style.width = width+'px';
container.style.height = height+'px';
container.style.background = 'url("app/img/bg.jpg")';
container.style.overflow = 'hidden';
container.style.position = 'relative';

//score and wordIndex variable
var score = 0;
var wordIndex = 0;



var word = new Word(wordList[wordIndex]);
word.draw();

word.checkLetter();


var interval = setInterval(function() {
    word.fall();


    if(word.checkComplete()) {
        word.completed();
        score++;
        wordIndex++;
        word = new Word(wordList[wordIndex]);
        word.draw();
        word.checkLetter();
    }
    
    if(word.checkErrorLimit()){
        gameOverDisplay();
        clearInterval(interval);
    }

    if(word.y >= height) {
        gameOverDisplay();
        clearInterval(interval);
    }
},10);


function gameOverDisplay() {
    var gameOver = document.createElement('div');
    gameOver.style.height = '300px';
    gameOver.style.width = '600px';
    gameOver.style.position - 'absolute';
    gameOver.style.top = '50%';
    gameOver.style.margin = 'auto';
    gameOver.style.padding = '20px 0 20px 20px';
    gameOver.style.textAlign = 'center';
    gameOver.style.fontSize = '30px';
    gameOver.style.background = 'white';
    gameOver.style.color = 'red';
    gameOver.style.opacity = '0.5';

    var Heading = document.createElement('h1');
    Heading.textContent = '!!! GAME OVER !!!';

    var scoreHeading = document.createElement('h2');
    scoreHeading.textContent = "No of Words: "+ score;


    

    gameOver.appendChild(Heading);
    gameOver.appendChild(scoreHeading);;
    
    container.appendChild(gameOver);
    
}