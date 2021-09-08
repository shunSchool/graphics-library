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
function rect(x, y, w, h, mode) {
 if (mode === "fill"){
ctx.fillRect(x, y, w, h);
 } else if(mode === "stroke"){
     ctx.strokeRect(x, y, w,h);
 }
}

//draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    console.log(x1, y1, x2, y2);
    ctx.beginPath();
    ctx.moveTo(x1, y1); //Endpoint 1
    ctx.lineTo(x2, y2); //endpoint 2
    ctx.stroke();    
}