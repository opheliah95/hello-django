// a class for canvas
const canvas = document.getElementById("sandbox");
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// a function to draw a single circle
class Circle {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
    }
    // function to draw a single circle
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// a class for creating bubble
const bubbles = [];
const balls_amount = 100;

for (let i = 0; i < balls_amount; i++) {
    let r = Math.floor(Math.random() * 30 + 20);
    let x = Math.random() * (canvas.width - 2 * r) + r;
    let y = Math.random() * (canvas.height - 2 * r) + r;
    let c = 'red';
    bubbles.push(new Circle(x, y, r, c));
}

function Update() {
    for (let i = 0; i < balls_amount; i++) {
        bubbles[i].draw();
        console.log(bubbles[i].x);
    }
}

requestAnimationFrame(Update);
Update()