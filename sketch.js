function setup() {
    createCanvas(windowWidth, windowHeight);
}

console.log("Hello World");
var x = 500;
console.log(x);

x = 10;
speed = 1;
speed2 = 1;

circleDims = [10, 20, 100];
z = 0;

function draw() {
    line(0, 0, windowWidth, windowHeight);
    line(0, 0, 100, 100);

    circle(windowWidth/2, windowHeight/2, 200);
}