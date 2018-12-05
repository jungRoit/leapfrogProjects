function Pipe(height, appearFromTop) {
    var that = this;
    var container = document.getElementById('container');
    var containerHeight = parseInt(container.style.height);
    this.location = parseInt(container.style.width);

    this.gap = 100;
    this.x = location;
    this.width = 50;
    this.height = height;
    this.appearFromTop = appearFromTop;

    var pipe = document.createElement('div');




    this.draw = function () {

        pipe.style.width = this.width + 'px';
        pipe.style.position = 'absolute';
        pipe.style.left = this.location;

        if (appearFromTop) {
            pipe.style.height = this.height + 'px';
            pipe.style.top = '0px';
            pipe.style.background = 'url("app/img/bottom-pipe.png")';
            pipe.style.backgroundPosition = 'bottom';
        }
        else {
            pipe.style.height = containerHeight - (this.height + this.gap) + 'px';
            pipe.style.top = this.height + this.gap + 'px';
            pipe.style.background = 'url("app/img/top-pipe.png")';
            pipe.style.backgroundPosition = 'top';
        }

        container.appendChild(pipe);
    }


    this.move = function () {
        pipe.style.left = this.location + 'px';
        this.location -= 1;
    }

    //get Node of pipe div to remove from array
    this.getElement = function () {
        return pipe;
    }


}


