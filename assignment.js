let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//drawmogus
function drawmogus (x, y, color, color) {
    //draw astronaut with top left corner (X, Y)
    //with given color
    rect(200, 200, 40, 60, "fill"); //body
    circle(220, 200, 20, "fill"); //head
    rect(190, 210, 10, 40, "fill"); // backpack
    rect(220, 220, 30, 20, "fill2"); //visor
}

drawmogus (20, 20, fill("red"), fill2("blue"))