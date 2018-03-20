function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.body = [];
    this.high = 1;
    
    this.end = function () {
        for(var i = 0; i < this.body.length; i++){
            var pos = this.body[i];
            var dis = dist(this.x, this.y, pos.x, pos.y);
            if (dis < 1){
                alert("Game Over, your score is " + this.total);
                this.total = 0;
                this.body = [];
            }
        }
    }
    
    this.show = function (){
        fill(20, 150, 50);
        rect(this.x, this.y, scl, scl);
        for (var i = 0; i < this.total; i++){
            rect(this.body[i].x, this.body[i].y, scl, scl);
        }
    }
    
    this.update = function () {
        for (var i = 0; i < this.body.length - 1; i++) {
            this.body[i] = this.body[i+1];
        }
        this.body[this.total-1] = createVector(this.x, this.y);
        
        this.x += this.xspeed*scl;
        this.y += this.yspeed*scl;
        
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }
}






