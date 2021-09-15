let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//drawmogus
function drawmogus (x, y, color1, color2) {
    //draw astronaut with top left corner (X, Y)
    //with the given colors
    fill(color1);
    rect(x + 0, y + 20, 40, 60, "fill"); //body
    circle(x + 20, y + 20, 20, "fill"); //head
    rect(x - 10, y + 25, 10, 40, "fill"); // backpack
    fill(color2);
    rect(x + 20, y + 20, 30, 20, "fill"); //visor
    fill(color1);
    rect(x + 0, y + 80, 14, 14, "fill"); //left leg
    rect(x + 26, y + 80, 14, 14, "fill"); //right leg
}

//drawstar
function drawstar (x, y, Width, color){
    //draw a star with top left (x, y)
    //with given color and width
    lineWidth(Width);
    stroke(color)
    line(x + 0, y + 20, x + 60, y + 20);
    line(x + 60, y + 20, x + 0, y + 60);
    line(x + 0, y + 60, x + 30, y + 0);
    line(x + 30, y + 0, x + 60, y + 60);
    line(x + 60, y + 60, x + 0, y + 20);
}
drawmogus (200, 200, "red", "blue");
drawmogus (400, 100, "blue", "cyan");
drawmogus (600, 400, "green", "cyan");


drawstar(20, 20, 3, "orange");
drawstar(350, 180, 2, "blue");
drawstar(230, 300, 1, "purple");