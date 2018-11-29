//main wrapper
var container = document.getElementById('container');

// imager wrapper
var slider = document.getElementById('slider');

//images array
var images = slider.getElementsByTagName('img');


//setInterval Toggle
var intervalToggle = false;


//main wrapper styling
container.style.width = '800px';
container.style.height = '400px';
container.style.margin = 'auto';
container.style.position = 'relative';
container.style.overflow = 'hidden';


// individual image styling
for (var i = 0; i < images.length; i++) {

    images[i].style.width = '800px';
    images[i].style.height = '400px';
    images[i].style.display = 'inline-block';
}


// image wrapper styling
slider.style.width = images[0].width * images.length + 'px';
slider.style.display = 'flex';
slider.style.position = 'absolute';
// slider.style.transition = '0.5s';


// next button
var nextBtn = document.createElement('button');
nextBtn.style.position = 'absolute';
nextBtn.style.width = '40px';
nextBtn.style.height = '100px';
// nextBtn.style.backgroundImage = "url('roit-slider/images/next.png')";
nextBtn.style.background = 'none';
nextBtn.style.border = 'none';
nextBtn.style.top = '40%';
nextBtn.style.right = '1%';
nextBtn.innerText='>'
nextBtn.style.color='gray'
nextBtn.style.fontSize = '50px';

container.appendChild(nextBtn);


//previous button
var prevBtn = document.createElement('button');
prevBtn.style.position = 'absolute';
prevBtn.style.width = '40px';
prevBtn.style.height = '100px';
// prevBtn.style.backgroundImage = 'url("roit-slider/images/prev.png")';
// prevBtn.style.background = 'black';
prevBtn.style.background = 'none';
prevBtn.style.border = 'none';
prevBtn.style.top = '40%';
prevBtn.style.left = '1%';
prevBtn.innerText='<'
prevBtn.style.color='gray'
prevBtn.style.fontSize = '50px';

container.appendChild(prevBtn);


//function to generate rounded button
function createRoundedButton(leftIndex){
    var roundBtn = document.createElement('div');
    roundBtn.style.width = '10px';
    roundBtn.style.height = '10px';
    roundBtn.style.background = 'gray';
    roundBtn.style.position = 'absolute';
    roundBtn.style.top = '90%';
    roundBtn.style.left = leftIndex+ '%';
    roundBtn.style.borderRadius = '50%';

    container.appendChild(roundBtn);
}


//rounded button array;
for(var i = 0;i<images.length;i++){
    var mar = 5*i;
    createRoundedButton(40+mar);
}


// counter
var index = 1;


// function to slide left;
function nextSlide() {
    clearInterval(time);
    enableButtons();

        var  mover = -parseInt(images[index].style.width)* (index-1);
    
        // console.log('init: '+mover);
        
    
    var interval = setInterval(function(){
        
        slider.style.left = mover + 'px';
        mover--;
        // console.log('mover:'+mover);
        
        
            if(mover == -parseInt(images[index].style.width)*(index-1)){

                // console.log(-parseInt(images[index].style.width)*(index-1));
                // console.log('index:'+index);
                mover = -parseInt(images[index].style.width)*(index-1);
                clearInterval(interval);
                disableButtons();
                time = setInterval(initSlider,5000);

            }else if(mover == -parseInt(images[index].style.width) * (images.length-1)){

                clearInterval(interval);
                disableButtons();
                time = setInterval(initSlider,5000);
            }
    },1);
    
    index++;

    if (index > images.length - 1) {
        index = 0;
    }
    
}

function initSlider() {
    var  mover = -parseInt(images[index].style.width)* (index-1);
   
    enableButtons();
        // console.log('init: '+mover);
        
    
    var interval = setInterval(function(){
        
        slider.style.left = mover + 'px';
        mover--;
        // console.log('mover:'+mover);
        
        
            if(mover == -parseInt(images[index].style.width)*(index-1)){

                // console.log(-parseInt(images[index].style.width)*(index-1));
                // console.log('index:'+index);
                mover = -parseInt(images[index].style.width)*(index-1);
                clearInterval(interval);
                disableButtons();

            }else if(mover == -parseInt(images[index].style.width) * (images.length-1)){

                clearInterval(interval);
                disableButtons();
              
            }
    },1);
    
    index++;

    if (index > images.length - 1) {
        index = 0;
    }
}


// function slide() {
//     if(mover % 800 == 0){
        
//     }
// }

//function to slide right
function prevSlide(direction) {

    clearInterval(time);
    enableButtons();
    // clearInterval(interval);

    // clearInterval(time);
    // toggleInterval();
    // console.log(intervalToggle);

    if(index == 0){
        var  mover = -parseInt(images[index].style.width)* (images.length-1);
    }else if(index == 1) {
        var  mover = -parseInt(images[index].style.width)* images.length;
    }else {
        mover = -parseInt(images[index].style.width)* (index-1);
    }
     
    
    var interval = setInterval(function(){
        
        

        slider.style.left = mover + 'px';
        mover++;

        
        if(mover == -parseInt(images[index].style.width)*(index-1)){
            
            mover = -parseInt(images[index].style.width)*(index-1);
            clearInterval(interval);
            disableButtons();
            time = setInterval(initSlider,5000);
            

        }else if(mover == -parseInt(images[index].style.width) * (images.length-1)){
            clearInterval(interval);
            disableButtons();
            time = setInterval(initSlider,5000);
           
           
        }
        
    },1);
    
    index--;

    if (index < 0) {
        index = images.length-1;
    }

  
    
}


// event handling for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click',prevSlide);


// function toggleInterval(){

//     if(intervalToggle == false){
//         intervalToggle = true;
//     }else {
//         intervalToggle = false;
//     }
// }

function enableButtons() {
    prevBtn.setAttribute('disabled','true');
    nextBtn.setAttribute('disabled','true');
}

function disableButtons() {
    prevBtn.removeAttribute('disabled');
    nextBtn.removeAttribute('disabled');
}

// if(intervalToggle == false) {
    var time = setInterval(initSlider,5000);
// }else if(intervalToggle == true){
    // clearInterval(time);
// }




 // index -= 1;

    // if (index < 0) {
    //     index = images.length - 1;
    // }
    // if (index == images.length-1) {
    //     var mover = -parseInt(images[index].style.width) * (index - 1);
    // } else if (index == 1) {
    //     var mover = 0;
    // } else {
    //     var mover = -parseInt(images[index].style.width) * ((images.length - 1) - index);
    // }

    // slider.style.left = mover + 'px';



    


// function prevSlide() {
    
//         clearInterval(time);

    
//         if(index == 0){
//             var  mover = -parseInt(images[index].style.width)* (images.length-1);
//         }else if(index == 1) {
//             var  mover = -parseInt(images[index].style.width)* images.length;
//         }else {
//             mover = -parseInt(images[index].style.width)* (index-1);
//         }
       
 
        
//         var interval = setInterval(function(){
            
//             slider.style.left = mover + 'px';
//             mover++;
    
            
//             if(mover == -parseInt(images[index].style.width)*(index-1)){
                
//                 mover = -parseInt(images[index].style.width)*(index-1);
//                 clearInterval(interval);
//                 time = setInterval(initSlider,5000);
    
//             }else if(mover == -parseInt(images[index].style.width) * (images.length-1)){
//                 clearInterval(interval);
//                 time = setInterval(initSlider,5000);
               
//             }
            
//         },1);
        
//         index--;
    
//         if (index < 0) {
//             index = images.length-1;
//         }
    
      
        
//     }