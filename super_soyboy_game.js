const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let radius = 25;
let x = 100;
let y = canvas.height - radius;

let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let speed = 10;
let gravity = 10;
let jumpHeight = 20;
let jumpAvailable = true;
var jumpTimer = 0;

function drawGame() {
    console.log("draw")
    requestAnimationFrame(drawGame);
    clearScreen();
    y += gravity;
    inputs();
    boundryCheck();
    drawCharacter();
}

function boundryCheck() {
    if (x < radius) {
        x = radius;
    }
    if (x > canvas.width - radius) {
        x = canvas.width - radius;
    }
    if (y < radius) {
        y = radius;
    }
    if (y > canvas.height - radius) {
        y = canvas.height - radius;
    }
    console.log(x, y);
}

function jump() {
    if (jumpAvailable === true) {
        y -= jumpHeight;
        setTimeout(() => {
            jumpAvailable = false
        }, 500);
    }
    else {
        jumpAvailable = true;
    }
}

function inputs() {
    if (upPressed) {
        jump()
    }
    if (downPressed) {
        y -= 0;
    }
    if (leftPressed) {
        x -= speed;
    }
    if (rightPressed) {
        x += speed;
    }
}

function drawCharacter() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y,radius, 0, Math.PI * 2);
    ctx.fill();
}

function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(event) {
    switch (event.keyCode) {
        case 38:
            upPressed = true;
            console.log("upPressed");
            break;
        case  32:
            upPressed = true;
            console.log("upPressed");
            break;
        case 87:
            upPressed = true;
            console.log("upPressed");
            break;
        case 40:
            downPressed = true;
            console.log("downPressed");
            break;
        case 83:
            downPressed = true;
            console.log("downPressed");
            break;
        case 37:
            leftPressed = true;
            console.log("leftPressed");
            break;
        case 65:
            leftPressed = true;
            console.log("leftPressed");
            break;
        case 39:
            rightPressed = true;
            console.log("rightPressed");
            break;
        case 68:
            rightPressed = true;
            console.log("rightPressed");
            break;
    }
}

function keyUp(event) {
    switch (event.keyCode) {
        case 38:
            upPressed = false;
            console.log("upReleased")
            break;
        case 32:
            upPressed = false;
            console.log("upReleased")
            break;
        case 87:
            upPressed = false;
            console.log("upReleased")
            break;
        case 40:
            downPressed = false;
            console.log("downReleased")
            break;
        case 83:
            downPressed = false;
            console.log("downReleased")
            break;
        case 37:
            leftPressed = false;
            console.log("leftReleased")
            break;
        case 65:
            leftPressed = false;
            console.log("leftReleased")
            break;
        case 39:
            rightPressed = false;
            console.log("rightReleased")
            break;
        case 68:
            rightPressed = false;
            console.log("rightReleased")
            break;
    }
}


drawGame();