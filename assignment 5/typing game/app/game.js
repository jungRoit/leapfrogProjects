var container = document.getElementById('container');

var width = 1000;
var height = 600;

container.style.width = width+'px';
container.style.height = height+'px';
container.style.background = 'url("app/img/bg.jpg")';
container.style.overflow = 'hidden';
container.style.position = 'relative';

var word = new Word('apple');
word.draw();
word.fall();
word.checkLetter();

