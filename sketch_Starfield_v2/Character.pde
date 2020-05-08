class Character {

  float aLeftPosx;
  float aLeftPosy;
  float aRightPosx;
  float aRightPosy;
  float bodyPosx;
  float bodyPosy;
  float headPosx;
  float headPosy;
  PShape armL, armR, body, head;

  Character() {

    aLeftPosx = 390;
    aLeftPosy = 50;
    aRightPosx = -70;
    aRightPosy = -120;
    bodyPosx = 110;
    bodyPosy = -180;
    headPosx = 120;
    headPosy = -100;
  }

  void build() {

    armL = loadShape("bodyparts/armL.svg");
    armR = loadShape("bodyparts/armR.svg");
    body = loadShape("bodyparts/body.svg");
    head = loadShape("bodyparts/head2.svg");
    
    
  }

  void showChar() {
    
    shape(body, bodyPosx, bodyPosy);
    shape(armR, aRightPosx, aRightPosy);
    shape(armL, aLeftPosx, aLeftPosy);
    shape(head, headPosx, headPosy);
    
}

  void updateChar() {
    aRightPosy = map(mouseY, 0, height, -150, -100);
    aLeftPosy = map(mouseY, 0, height, 50, 20);
    
}

 void rotateChar(){
     if(keyPressed){
       if(key == 's' || key == 'S'){
         translate(0, 0);
         rotate(angle);
         scale(.3);
         
     }
  }
  }

}
