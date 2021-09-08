//Graphics library

let cnv = document.getElementById("my-canvas");
let ctx = cnv.msGetInputContext("2d");
cnv.width = 800;
cnv.height = 600;

//draw a line
ctx.strokeStyle = "blue:";
ctx.lineWidth = 3;
line(100, 200, 300, 100);

ctx.strokeStyle = "red";
line(500, 50, 300, 450);
line(0, 0, 100, 100);

//draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    console.log(x1, y1, x2, y2);
    ctx.beginPath();
    ctx.moveTo(x1, y1); //Endpoint 1
    ctx.lineTo(x2, y2); //endpoint 2
    ctx.stroke();    
}