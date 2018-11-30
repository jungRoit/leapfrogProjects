function PipeList() {
    this.pipeList = [];

    this.add = function(pipe) {
        this.pipeList.push(pipe);
    }

    this.remove = function() {
        this.pipeList.splice(0,1);
    }

    this.getAll = function() {
        return this.pipeList;
    }
}