function Bird(d) {
    var that = this;
    this.x = 350;
    this.y = 300;
    this.dy = 1;
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

        container.appendChild(bird);
    }

    this.move = function () {

        bird.style.top = that.y + 'px';
    }

    this.changeDirection = function (dy) {

        that.y += dy;
    }

    this.checkCollision = function (pipeList) {

        for (var i = 0; i < pipeList.length; i++) {

                var pipeX = pipeList[i].location;
                var pipeY = 0;
                if(!pipeList[i].appearFromTop){
                    pipeY = containerHeight - pipeList[i].height;
                }
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

        return false;
    }
}





            // if(birdRight>= pipeLeft && birdLeft<=pipeRight
            //  && birdTop>=pipeHeight){
            //      return true;
            //  }
            //  if(birdRight>= pipeLeft && birdLeft<=pipeRight
            //     && birdDown<=pipeTop){
            //         return true;
            //     }

            // if (pipeList[i].appearFromTop) {
               
                // if (birdRight > pipeLeft && pipeHeight == that.y) {
                //     return true;
                // } else if (birdRight == pipeLeft && pipeHeight > that.y) {
                //     console.log('col');
                //     return true;
                // } else {
                //     return false;
                // }
            

            // if (!pipeList[i].appearFromTop) {
            //     
            //     if (birdRight > pipeLeft && pipeTop == birdDown) {
            //         return true;
            //     } else if (birdRight == pipeLeft && pipeTop < birdTop) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // }