function Food(){
    this.x = 0;
    this.y = 0;
    
    this.loc = function (){
        this.x = floor(random(1, 29))*scl;
        this.y = floor(random(1, 29))*scl;
    }
    
    this.show = function (){
        fill(255, 0, 40);
        rect(this.x, this.y, scl, scl);
    }
    
    this.coll = function (){
        if(this.x == sk.x && this.y == sk.y) {
            this.loc();
            if(sk.total >= sk.high){
                console.log("highscore plus one");
                sk.high++;
            }
            sk.total ++;
        }
    }
}
