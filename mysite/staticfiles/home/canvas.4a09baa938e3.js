// a class for canvas
const canvas = document.getElementById("sandbox");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// function to resize
function resize() {
    var height = window.innerHeight;
    var ratio = canvas.width / canvas.height;
    var width = height * ratio;

    if (width < window.innerWidth) {
        console.log(`the width is ${width} and canvas os ${window.innerWidth}`)
        // we will stretch the canvas out
        var new_ratio = window.innerWidth / width; 
        height *= new_ratio;
        width = height * ratio;
    } 

    // So we need to calculate the proper scaled width
    // that should work well with every resolution


    // add more width to canvas
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

  }
  
window.addEventListener('load', resize, false);
window.addEventListener('resize', resize, false);

const ctx = canvas.getContext("2d");

// a function to draw a single circle
class Circle {
    constructor(ctx, x, y, r, c) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = getRndColor();

        // params for offset
        this.dx = Math.random() * 10 + 10;
        this.dy = Math.random() * 10 + 10;
        this.generate_seed();
    }

     // function to draw a single circle
     draw() {
        ctx.beginPath();
        // gradient for fill
        // Create gradient
        var grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        grd.addColorStop(0, "white");
        grd.addColorStop(0.1, "white");
        grd.addColorStop(0.7, this.c);
        grd.addColorStop(1, "white");
        ctx.fillStyle = grd;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }

    // function to animate the circle
    animate() {
        // how we move this normally
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.r > canvas.width || this.x < this.r){
                this.dx *= -1;
        }
        else if (this.y + this.r > canvas.height || this.y < this.r){
            this.dy *= -1;
        }
       
        this.draw();
    }

    // return seed value 
    generate_seed(){
        var seed = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        this.dx *= seed;
        this.dy *= seed;
        console.log(`hello: ${seed}`)
    }
}

    // a class for creating bubble
    const bubbles = [];
    const balls_amount = 50;

    for(let i = 0; i <balls_amount; i++) {
    let r = Math.floor(Math.random() * 30 + 20);
    let x = Math.random() * (canvas.width - 2 * r) + r;
    let y = Math.random() * (canvas.height - 2 * r) + r;
    let c = 'blue';
    bubbles.push(new Circle(ctx, x, y, r, c));
}

// function to generate random color for fill
function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return `rgb(${r}, ${g}, ${b}, 0.3)`;
}

// function to update object
function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].animate();
    }
}

// init function
function init() {
    interval = 100;
    setInterval(() => {
        window.requestAnimationFrame(Update);
    }, interval);

}

init()

// function for user to add bubble
canvas.addEventListener('click', function(e){
    let r = Math.floor(Math.random() * 20) + 15;
    bubbles.push(new Circle(ctx, e.clientX, e.clientY, r))
    console.log(bubbles.length)
})