Character r = new Character();
Star [] stars = new Star[400];
Circle c = new Circle();
float speed;
float angle = 0.0;
float pz = -50;
int contz = -50;
float sca = 0.01;


void setup() {
  size(1024, 720, P3D);
  for(int i = 0; i < stars.length; i++){
    stars[i] = new Star();
  }
  r.build();
  
} 

void draw() {
  
  speed = map(mouseX, 0, width, 5, 40);
  background(0);
  armMovement();
  escalation();
  rotation();
  c.showCir();
  c.updateCir();
  r.showChar();
  r.updateChar();
  translate(width/2, height/2);
  for(int i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();

  }
  
}

void armMovement() {
   
    contz++;
    if (contz < 50) {
      pz++;
    } else if (contz >= 50) {
      pz--;

      if (pz == 0) {
        contz = 0;
      }
    }
    
    
    
  }
  
  void escalation(){
    
      if(keyPressed){
          if(key == 'a' || key == 'A'){
          translate(width/2, height/2);
           scale(sca);
             
           if(sca < 0.3){
             sca += 0.001;
           }else{
             sca = 0;
           
        }
      }
    }
  }
  
  void rotation(){
    translate(0, 0);
    rotate(angle); 
    angle += 0.0001;
  }
  
 
     
