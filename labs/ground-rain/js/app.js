class Drop {
    constructor(dx, dy, radius, color) {
        this.x = dx;
        this.y = dy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 2;
    }

    update() {
        this.y = this.y + this.speed;
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }
}
class Ground {
    constructor(gx, gy, gw, gh, color) {
        this.x = gx;
        this.y = gy;
        this.width = gw;
        this.height = gh;
        this.color = color;
    }

    fillGround() {
        rect(this.x, this.y, this.width, this.height);
    }
    refill() {
        console.log("Blue");
        fill(this.color);
    }
}

var rain = [];
var r = 0; 
var g = 0; 
var b = 0;
var ground = new Ground(0, 280, 400, 20, [r, g, b]);

function setup() {
    //console.log("Setup");
    createCanvas(400, 300);
    for (var i = 0; i < 15; i++) {
        var rx = 1 + Math.random() * 399
        var drip = new Drop(rx, 10, 10, [145, 185, 255]);
        rain.push(drip);
    }
    console.log(rain);
}

function draw() {
    //console.log("Draw");
    background(168, 172, 179);
    ground.fillGround();
    for (var i = 0; i < rain.length; i++) {
        var currentDrop = rain[i];
        currentDrop.update();
        var touchGround = hitGround(currentDrop.x, currentDrop.y, ground.x, ground.y, ground.width, ground.height);
        if (touchGround) {
            b = b + 17;
            rain.splice(i,1);
            ground.refill();
            console.log(touchGround);
            console.log(b);
        }
        
    }
    
}

function hitGround(pX, pY, bX, bY, bW, bH) {
    var hit = false;
    if ((pX > bX) && (pY > bY)) {
        hit = true;
    }
    return hit;

}