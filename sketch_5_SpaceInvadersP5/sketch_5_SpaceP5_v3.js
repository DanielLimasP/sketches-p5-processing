//hacer que los space invaders desaparezcan con cada hit
//hacer que al presionar una tecla la nave se mueva y al soltarla se detenga
//hacer que las flores desaparezcan lentamente

var ship;
var flowers = [];
var drops = [];

function setup(){
    createCanvas(600, 400);
    ship = new Ship();
    //drop = new Drop(width/2, height/2);
        for(var i = 0; i < 7; i++){
               flowers[i] = new Flower(i * 60 + 50, 30); 
            }
    }
function draw(){
    background(51);
    ship.show();
    ship.move();
    
    for(var i = 0; i < drops.length; i++){
        drops[i].show(); 
        drops[i].move();
        
         for(var j = 0; j < flowers.length; j++){
            if(drops[i].hits(flowers[j])){
                flowers[j].downSize();
                drops[i].evaporate();
                console.log("HITS");
               }
             
             if(flowers[j].r < 10){
                 flowers.splice(j, 1);

                }
            }
         }
    
   
    var edge = false;
    
    for(var i = 0; i < flowers.length; i++){
        flowers[i].show();   
        flowers[i].move();
        
        if(flowers[i].x > width || flowers[i].x < 0){
            
            edge = true;
           
           }
    }
    
    if(edge){
        for(var i = 0; i < flowers.length; i++){
                flowers[i].shiftDown();
            }
        }
  
    for(var i = drops.length - 1; i >= 0 ; i--){
        if(drops[i].toDelete){
            drops.splice(i, 1); 
           }  
    }
}

function keyReleased(){
    if(key != ' '){
    ship.setDir(0);
}
}

function keyPressed(){
    if(key === ' '){
        var drop = new Drop(ship.x, height);
        drops.push(drop);
       
       }
    
	if(keyCode === RIGHT_ARROW){
		ship.setDir(1);
	
	}else if(keyCode === LEFT_ARROW){
		ship.setDir(-1);
	}

}

