//Graphics library

let cnv = document.getElementById("my-canvas");
let ctx = cnv.msGetInputContext("2d");
cnv.width = 800;
cnv.height = 600;

//draw a line
ctx.strokeStyle = "blue:";
ctx.lineWidth = 3;
line(100, 200, 300, 100);

// draw a rectangle
ctx.fillStyle = "orange";
rect(100, 100, 200, 50, "fill");
rect(400, 500, 70, 100, "stroke");

//draw a circle
circle(400, 300, 50, "stroke");
ctx.fillStyle = "green";
circle(700, 300, 25, "fill");
