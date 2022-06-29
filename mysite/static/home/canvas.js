// a class for canvas
const canvas = document.getElementById("sandbox");
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// a function to draw a single circle
class Circle {
    constructor(ctx, x, y, r, c) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;

        // params for offset
        this.dx = Math.random() * 10 + 10;
        this.dy = Math.random() * 10 + 10;
    }

     // function to draw a single circle
     draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }

    // function to animate the circle
    animate() {
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

    // return seed value 
    generate_seed(){
        var seed = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        this.dx *= seed;
        this.dy *= seed;
        console.log(f`hello: {seed}`)
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

function Update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < balls_amount; i++) {
        bubbles[i].animate();
        bubbles[i].generate_seed();
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