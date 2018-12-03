function Word (word) {
    this.x = 300;
    this.y = 0;
    var that = this;
    this.word = word;
    this.dy = 1;
    this.letters = this.word.split('');
    this.spanList = [];
    this.matched = [];

    var container = document.getElementById('container');
    var wordDiv = document.createElement('div');

    // this.getLetters = function() {
    //   return this.letters = 

    // }

    this.draw = function() {
        // this.getLetters();

        for(var i = 0; i<this.letters.length;i++) {
            var letter = document.createElement('span');
            letter.innerHTML = this.letters[i];
            letter.style.width = '30px';
            letter.style.height = '30px';
            letter.style.background = 'gray';
            letter.style.padding = '20px';
            letter.style.marginRight = '10px';
            wordDiv.appendChild(letter);
            that.spanList.push(letter);
        }

        wordDiv.style.width = '200px';
        wordDiv.style.height = '200px';
        wordDiv.style.position = 'absolute';
        wordDiv.style.top = this.y+'0px';
        wordDiv.style.left = this.x+'px';
        // wordDiv.style.background = 'gray';

        container.appendChild(wordDiv);

    }

    this.fall = function() {
        var interval = setInterval(function() {
            wordDiv.style.top = that.y+'px';
            that.y += that.dy;
        },10);
    }

    this.checkLetter = function() {
        document.addEventListener('keydown',function(evt){
            var key = evt.keyCode;

            var noOfLetter = that.letters.length;
            var index = that.matched.length;
           

            if(key == that.letters[index].charCodeAt(0)-32){
                that.spanList[index].classList.add('pressed');
                that.spanList[index].style.background = 'yellow';
                that.spanList[index].style.color = 'white';
                that.matched.push(key);
            }

        });
    }
}
