function Pipe(height, appearFromTop) {
    var that = this;
    var container = document.getElementById('container');
    this.location = parseInt(container.style.width);

    this.x = location;
    this.width = 80;
    this.height = height;
    this.appearFromTop = appearFromTop;


    var pipe = document.createElement('div');

    


    this.draw = function () {

        pipe.style.width = this.width + 'px';
        pipe.style.height = this.height + 'px';
        pipe.style.background = '#86c656';
        pipe.style.position = 'absolute';
        pipe.style.left = this.location;
        if (this.appearFromTop == true) {
            pipe.style.top = '0px';
            pipe.style.borderBottom = '5px solid black';
        } else {

            pipe.style.bottom = '0px';
            pipe.style.borderTop = '5px solid black';
            
        }



        container.appendChild(pipe);
    }

    this.move = function () {
        pipe.style.left = this.location + 'px';
        this.location -= 1;
    }

    
}


