function Bird(d) {
    var that = this;
    this.x = 350;
    this.y = 300;
    this.gravity = 0;
    this.upThrust = 4;
    this.height = 30;
    this.width = 30;
    var bird = document.createElement('div');
    var container = document.getElementById('container');
    var containerHeight = parseInt(container.style.height);

    this.draw = function () {

        bird.style.width = this.width + 'px';
        bird.style.height = this.height + 'px';
        bird.style.background = "url('app/img/bird.png') no-repeat";
        bird.style.backgroundSize = '100%';
        bird.style.position = 'absolute';
        bird.style.top = this.y + 'px';
        bird.style.left = this.x + 'px';
        bird.style.marginBottom = '-2px';
        bird.style.marginTop = '-2px';

        container.appendChild(bird);
    }

    this.move = function () {

        that.gravity += 0.25;
        that.y += that.gravity;

        bird.style.top = that.y + 'px';
    }

    this.update = function () {
        
        if(that.gravity < -that.upThrust) {
            that.gravity -= that.upThrust;
        }else {
            that.gravity = -that.upThrust;
        }
        bird.style.top = that.y + 'px';
    }

    this.checkCollision = function (pipeList) {

        for (var i = 0; i < pipeList.length; i++) {

                var pipeX = pipeList[i].location;
                var pipeY = parseInt(pipeList[i].getElement().style.top);
                var pipeWidth = pipeList[i].width;
                var pipeHeight = pipeList[i].height;
                
            
                var birdX = that.x;
                var birdY = that.y;
                var birdWIdth = that.width;
                var birdHeight = that.height;

                if(birdX < pipeX + pipeWidth && birdX + birdWIdth > pipeX
                    && birdY < pipeY + pipeHeight && birdY + birdHeight > pipeY ){
                        return true;
                    }
        }

        if(birdY < 0 || birdY + birdHeight > containerHeight){
            return true;
        }

        return false;
    }
}


