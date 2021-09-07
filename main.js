//Graphics library

let cnv = document.getElementById("my-canvas");
let ctx = cnv.msGetInputContext("2d");
cnv.width = 800;
cnv.height = 600;

//draw a line
ctx.strokeStyle = "blue:";
ctx.beginPath();
ctx.moveTo(100, 200); //Endpoint 1
ctx.lineTo(300, 100); //endpoint 2
ctx.stroke();
