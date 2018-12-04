function WordsList() {
    var that = this;
    this.allWords = [];
    var container = document.getElementById('container');

    this.getAll = function() {
        return this.allWords;
    }

    this.add = function(word) {
        this.allWords.push(word);
    }

    this.remove = function(index,node){
        // console.log(node);
        container.removeChild(node);
        this.allWords.splice(index,1);
    }
}