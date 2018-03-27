var scl = 20;
var sk;
var fd;
var rdcol = ["blue", "red"];
var i = 0;

function setup() {
    createCanvas(600, 600);
    sk = new Snake();
    frameRate(10);
    fd = new Food();
    fd.loc();
}

function draw() {
    background(51);
    sk.end();
    fd.show();
    sk.update();
    sk.show();
    fd.coll(); 
    document.getElementById("score").innerHTML = "Score: " + sk.total;
    document.getElementById("highscore").innerHTML = "High Score: " + sk.high;
    document.body.style.backgroundColor = random(rdcol);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW){
            sk.xspeed = 0;
            sk.yspeed = 0;
            sk.xspeed = -1;
    } else if (keyCode === RIGHT_ARROW) {
            sk.xspeed = 0;
            sk.yspeed = 0;
            sk.xspeed = 1;
    } else if (keyCode === UP_ARROW) {
            sk.xspeed = 0;
            sk.yspeed = 0;
            sk.yspeed = -1;
    } else if (keyCode === DOWN_ARROW) {
            sk.xspeed = 0;
            sk.yspeed = 0;
            sk.yspeed = 1;
    }
    
    if(keyCode === ENTER){
        sk.total ++;
    }
}
