
ArrayList<Box> next1 = new ArrayList<Box>();
    ArrayList<Box> next2 = new ArrayList<Box>();
     ArrayList<Box> next3 = new ArrayList<Box>();

float ax = 0.01;
float ay = 0.01;

float speedx;
float speedy;

int cont = 0;

Box b;
Box c;

ArrayList<Box> sponge;

void setup(){
  surface.setLocation(200, 200);
  size(400, 400, P3D);
  sponge = new ArrayList<Box>();
  Box b = new Box(0, 0, 0, 200);
  sponge.add(b);
  
}

void mousePressed(){
  
  cont++;
  
  switch(cont){
  
case 1:
    
    for(Box b : sponge){
      
      ArrayList<Box> newBoxes = b.generate();
      next1.addAll(newBoxes);
      
    }
    
    sponge = next1;  
    
      break;

case 2:
    
    for(Box b : sponge){
      
      ArrayList<Box> newBoxes = b.generate();
      next2.addAll(newBoxes);
      
    }
    
    sponge = next2;
    
      break;
      
case 3:
    
    for(Box b : sponge){
      
      ArrayList<Box> newBoxes = b.generate();
      next3.addAll(newBoxes);
      
    }
    
    sponge = next3;
    
      break;
      
case 4:
    
    sponge = next2;
  
  break;

case 5:
    
    sponge = next1;

      break;

case 6:
  
  sponge = new ArrayList<Box>();
  Box b = new Box(0, 0, 0, 200);
  sponge.add(b);
  
  cont  = 0;

      break;

}
}

void draw(){

  background(51);
   stroke(255); 
   lights();
   noFill();
   
    speedx = map(mouseX, 0, width/2, 0, 0.03);
    speedy = map(mouseY, 0, height/2, 0, 0.03);
 
    translate(width/2, height/2);
    rotateX(ax);
     rotateY(ay);
 
 for(Box b: sponge){
 
   b.show();
   
 }

    ax += speedx;
    ay += speedy;
    
}
