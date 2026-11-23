let angle = 0;
let radius = 200;
let speed = 0.03;
let paused = false;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(20, 25, 45);

    translate(width / 2, height / 2);

    fill(255, 220, 100);
    noStroke();
    circle(0, 0, 30);



    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    fill(100, 200, 255);
    circle(x, y, 20);



    if (!paused) {
        angle += speed;
    }



    resetMatrix();
    fill(255);
    textAlign(CENTER);
    textSize(18);

    text("ORBITING DOT", width / 2, 40);
    text("SPACE: Pause / Resume", width / 2, 450);
    text("UP / DOWN: Change Speed", width / 2, 475);
}

function keyPressed() {
    if (key === " ") {
        paused = !paused;
    }

    if (keyCode === UP_ARROW) {
        speed += 0.01;
    }

    if (keyCode === DOWN_ARROW) {
        speed = max(0.01, speed - 0.01);
    }
}