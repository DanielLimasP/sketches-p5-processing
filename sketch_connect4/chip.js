function chip(x, y, turn){
    this.position = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 80;
    this.rad = this.mass;
    this.turn = turn;
    this.collisionRadio = 100;

    this.applyForce = function(force){
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }
    
    this.update = function(){
        this.vel.add(this.acc);
        this.position.add(this.vel);
        this.acc.mult(0);
    }

    this.show = function(){
        if(this.turn){
            fill(222, 235, 52);
            noStroke();
            ellipse(this.position.x, this.position.y, this.rad, this.rad);
        }else{
            fill(224, 77, 47);
            noStroke();
            ellipse(this.position.x, this.position.y, this.rad, this.rad);
        }  
    }

    this.checkEdges = function(){
        if(this.position.y > height - 50){
            this.position.y = height - 50;
        }
    }
}