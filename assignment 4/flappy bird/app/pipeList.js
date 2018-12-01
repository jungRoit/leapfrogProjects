function PipeList() {
    this.pipeList = [];
    var container = document.getElementById('container');

    this.add = function(pipe) {
        this.pipeList.push(pipe);
    }

    this.remove = function() {
        this.pipeList.splice(0,1);
        container.removeChild(this.pipeList[0]);
    }

    this.getAll = function() {
        return this.pipeList;
    }
}