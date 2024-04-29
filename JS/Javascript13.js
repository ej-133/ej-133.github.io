// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

class Ball{
    constructor(x,y,velX,velY,color,size){
        this.x=x;
        this.y=y;
        this.velX =velX;
        this.velY = velY;
        this.color= color;
        this.size=size;

    }


    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }
    update(){

        if((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if((this.x-this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y+ this.size)>=height){
            this.velY =-(this.velY)
        }

        if ((this.y+ this.size)<=0){
            this.velY =-(this.velY)
        }
        this.x += this.velX;
        this.y +=this.velY;
    
    }
    collisonDetect(){
        for (const ball of balls){
            if (this !== ball){
                const dx = this.x-ball.x;
                const dy = this.y-ball.y;
                const distance=Math.sqrt(dx*dx+dy*dy);
                
                if (distance < this.size + ball.size){
                    ball.color =this.color =randomRGB();
                }
            }
        

        }
    }
}
    



const balls =[];
    while (balls.length<10){
        const size = random(2,20);
        const ball = new Ball(
            random(0+size,width-size),
            random(0+ size, height-size),
            random(-10,10),
            random(-10,10),
            randomRGB(),
            size,
        );
        balls.push(ball);
    }
function loop(){
    ctx.fillStyle= "rgb(0 0 0/250)";
    ctx.fillRect(0,0, width, height);

    for(const ball of balls){
        ball.draw();
        ball.update();
        ball.collisonDetect();
    }
    requestAnimationFrame(loop)

}
loop();
//bounce off each other for extra credit

const element = document.getElementById("increase-volume-button");
    const button= document.querySelector("click");
    let done = false;

    function step(increase-volume-button) {
    if (start === undefined) {
      start = timeStamp;
    }
    const elapsed = timeStamp - start;

    if (previousTimeStamp !== timeStamp) {
    
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = `translateX(${count}px)`;
    if (count === 200) done = true;
  }

    if (elapsed < 2000) {
      // Stop the animation after 2 seconds
      previousTimeStamp = timeStamp;
      if (!done) {
        window.requestAnimationFrame(step);
      }
  }
}
})
let done = false;
function increaseVolume() {
var audio = document.getElementById("increaseVolume");
if (audio.volume < 1.0) {
audio.volume += 0.1; 
moveVolumeButton(increaseVolume); 
}
if (elapsed < 2000) {
  // Stop the animation after 2 seconds
  previousTimeStamp = timeStamp;
  if (!done) {
    window.moveVolumeButton();
  }
}

function moveVolumeButton() {
var button = document.getElementById("increase-volume-button");
var newLeft = parseInt(button.style.left) + 20; // Move button 20 pixels to the right
button.style.left = newLeft + "px";
}