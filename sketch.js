function setup() {
    createCanvas(windowWidth, windowHeight);
}

console.log("Hello World");
var x = 500;
console.log(x);

x = 10;
var speed = 1;
var speed2 = 1;

circleDims = [10, 20, 100];
z = 0;

function draw() {
    clear();

    rect((windowWidth/2)-120,  0, 240, windowHeight);
    rect((windowWidth/2)-105,  0, 210, windowHeight);
    rect((windowWidth/2)-100,  0, 200, windowHeight);
    rect((windowWidth/2)-95,   0, 190, windowHeight);
    rect((windowWidth/2)-92.5, 0, 185, windowHeight);
    rect((windowWidth/2)-90,   0, 180, windowHeight);

    
    for (var i = 0; i < 38; i++) {
        line(i * 50, 0, i * 50, windowHeight);
        line(0, i * 50, windowWidth, i * 50);   
    }

    // Rectangle in middle
    fill(75, 75, 150);
    rect((windowWidth/2)-90, 0, 180, windowHeight);

    fill(255, 255, 255);
    // Left Triangles
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-1, 0, 1);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-2, 0, 2);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-5, 0, 5);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-10, 0, 10);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-20, 0, 20);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-30, 0, 30);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-40, 0, 40);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-50, 0, 50);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-65, 0, 65);    
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-80, 0, 80);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-130, 0, 130);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-150, 0, 150);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-210, 0, 210);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-250, 0, 250);
    triangle(windowWidth/2, windowHeight/2, 0, windowHeight-290, 0, 290);
    triangle(windowWidth/2, windowHeight/2, 0, (windowHeight/2)-50, 0, (windowHeight/2)+50);

    //Right Triangles
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-1,   windowWidth, 1);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-2,   windowWidth, 2);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-5,   windowWidth, 5);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-10,  windowWidth, 10);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-20,  windowWidth, 20);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-30,  windowWidth, 30);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-40,  windowWidth, 40);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-50,  windowWidth, 50);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-65,  windowWidth, 65);    
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-80,  windowWidth, 80);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-130, windowWidth, 130);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-150, windowWidth, 150);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-210, windowWidth, 210);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-250, windowWidth, 250);
    triangle(windowWidth/2, windowHeight/2, windowWidth, windowHeight-290, windowWidth, 290);
    triangle(windowWidth/2, windowHeight/2, windowWidth, (windowHeight/2)-50, windowWidth, (windowHeight/2)+50);
    
    circle(windowWidth/2, windowHeight/2, 200);
    for (var i = 0; i < 20; i++) {
        circle(windowWidth/2, windowHeight/2, 200 - i*10);
    }
}