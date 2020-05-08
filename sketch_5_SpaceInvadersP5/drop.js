function Drop(x, y){
	this.x = x;
    this.y = y;
    this.r = 4;
    this.toDelete = false;

	this.show = function(){
		fill(65, 139, 224);
        noStroke();
		rect(this.x, this.y, this.r, this.r) ;
	}
    
    this.move = function(){
        this.y = this.y - 5;
    }
    
    this.hits = function(flower){
        var d = dist(this.x, this.y, flower.x, flower.y);
        if(d < this.r + flower.r){
            return true;
           }else{
            return false;
           }
    }
    
    this.evaporate = function(){
        this.toDelete = true;
    }

}