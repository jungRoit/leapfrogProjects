var collection = ["apple","hello","tomato","purple","game","cat","heaven","silly","mountain","canvas","jacket","laptop","mango","honey","cheese","hamburger","sausage","mars","hell","throne","sizzler","dinosaur","hippopotamus","cauliflower","spongebob","squarepants"]


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

 wordsList = new WordsList();

var gameTime = 0;

var word = new Word(collection[wordIndex]);
wordsList.add(word);
word.draw();

word.checkLetter();


var word1;

var interval = setInterval(function() {

    
    

    if(gameTime % 100 == 0) {
        wordIndex++;
        word = new Word(collection[wordIndex]);
        wordsList.add(word);
        word.draw();
        word.checkLetter();
    }

    for(var i = 0;i<wordsList.getAll().length;i++) {
        wordsList.getAll()[i].fall();


        if(wordsList.getAll()[i].checkComplete()) {
            var node = wordsList.getAll()[i].getElement();
            wordsList.remove(i,node);
            score++; 
        }

        if(wordsList.getAll()[i].y >= height) {
            gameOverDisplay();
            clearInterval(interval);
        }
    }

    

    // wordIndex++;
    // word = new Word(collection[wordIndex]);
    // word.draw();
    // word.checkLetter();
    
    // if(word.checkErrorLimit()){
    //     gameOverDisplay();
    //     clearInterval(interval);
    // }

   

    gameTime++;
},20);


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