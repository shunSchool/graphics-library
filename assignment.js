let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//drawmogus
function drawmogus (x, y,) {
    //draw astronaut with top left corner (X, Y)
    //with the given colors
    fill("red");
    rect(x + 0, y + 20, 40, 60, "fill"); //body
    circle(x + 20, y + 20, 20, "fill"); //head
    rect(x - 10, y + 25, 10, 40, "fill"); // backpack
    fill("blue");
    rect(x + 20, y + 20, 30, 20, "fill"); //visor
    fill("red");
    rect(x + 0, y + 80, 14, 14, "fill"); //left leg
    rect(x + 26, y + 80, 14, 14, "fill"); //right leg
}
function drawstar (x, y,){
    lineWidth(2);
    stroke("orange")
    line(20, 20, 60, 20);
    
}
drawmogus (200, 200,);
drawstar(20, 20);