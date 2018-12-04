function PipeList() {
    this.pipeList = [];
    var container = document.getElementById('container');

    this.add = function(pipe) {
        this.pipeList.push(pipe);
    }

    this.remove = function() {
        for(var i = 0;i<2;i++) {
            container.removeChild(this.pipeList[0].getElement());
            this.pipeList.splice(0,1);
        }       
    }

    this.getAll = function() {
        return this.pipeList;
    }
}