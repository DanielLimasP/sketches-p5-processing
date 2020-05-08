function Flower(x, y){
	this.x = x;
    this.y = y;
    this.r = 18;
    this.xdir = 1;
    
	this.show = function(){
		fill(190, 219, 63, 150);
        rectMode(CENTER);
		ellipse(this.x, this.y, this.r * 2, this.r);
	}
    
    this.shiftDown = function(){
        this.xdir *= -1;
        this.y += this.r;
        
    }
    
    this.move = function(){
       this.x = this.x + this.xdir;

    }
        
    this.downSize = function(){
        this.r--;
        this.r--;
        this.r--;
    }
    
    }

 