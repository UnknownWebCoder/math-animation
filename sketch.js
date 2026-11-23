let angle = 0;         // Controls the angle of the dot
let radius = 150;      // Distance between the dot and the center
let speed = 0.03;      // Controls how fast the dot moves
let paused = false;    // Checks if the animation is paused

function setup() {
    createCanvas(500, 500);        // Creates a 500 by 500 canvas
}

function draw() {
    background(20, 25, 45);

    // Moves the origin to the center of the canvas
    translate(width / 2, height / 2);

    // Draws the yellow circle at the center
    fill(255, 220, 100);
    noStroke();
    circle(0, 0, 30);

    // Calculates the horizontal position using cosine
    let x = cos(angle) * radius;

    // Calculates the vertical position using sine
    let y = sin(angle) * radius;

    // Draws the blue dot at the calculated position
    fill(100, 200, 255);
    circle(x, y, 20);

    // Increases the angle to make the dot move
    // The angle only changes when the animation is not paused
    if (!paused) {
        angle += speed;
    }

    // Resets the coordinate system for the text
    resetMatrix();

    // Displays the title and keyboard instructions
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("ORBITING DOT", width / 2, 40);
    text("SPACE: Pause / Resume", width / 2, 450);
    text("UP / DOWN: Change Speed", width / 2, 475);
}

// Detects when a keyboard key is pressed
function keyPressed() {

    // Spacebar pauses or resumes the animation
    if (key === " ") {
        paused = !paused;
    }

    // Up arrow increases the speed
    if (keyCode === UP_ARROW) {
        speed += 0.01;
    }

    // Down arrow decreases the speed
    // The speed cannot go below 0.01
    if (keyCode === DOWN_ARROW) {
        speed = max(0.01, speed - 0.01);
    }
}
