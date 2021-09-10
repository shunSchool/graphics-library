//Graphics library

let cnv = document.getElementById("my-canvas");
let ctx = cnv.msGetInputContext("2d");
cnv.width = 800;
cnv.height = 600;

//draw a line
stroke("blue");
lineWidth(3);
line(100, 200, 300, 100);

// draw a rectangle
fill ("orange");
rect(100, 100, 200, 50, "fill");
rect(400, 500, 70, 100, "stroke");

//draw a circle
circle(400, 300, 50, "stroke");
fill ("green");
circle(700, 300, 25, "fill");

//draw a triangle
triangle(0, 400, 300, 400, 250, 450, "fill");
stroke("purple")
triangle(0, 300, 400, 300, 350, 250, "stroke");
