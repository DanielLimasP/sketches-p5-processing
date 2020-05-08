class Circle{

   float x1, y1, w1, h1;
   float x2, y2, w2, h2;
   float x3, y3, w3, h3;
   
  Circle(){
    
    x1 = 475;
    y1 = 620;
    w1 = 100;
    h1 = 5;
    
    x2 = 475;
    y2 = 640;
    w2 = 50;
    h2 = 5;
    
    x3 = 475;
    y3 = 660;
    w3 = 10;
    h3 = 2;
    
  }
    
  void showCir(){
    
    for(int i = 0 ;i < 3; i++){
      noFill();
      ellipse(x1, y1, w1, h1);
      noFill();
      ellipse(x2, y2, w2, h2);
      noFill();
      ellipse(x3, y3, w3, h3);
      
     
  }
  }
  
  void updateCir(){
    
   y1 += 1;
   w1 -= 10;
   
   y2 += 1;
   w2 -= 5;
   
   y3 += 1;
   w3 -= 1;
   
   if(w1 == 0){
     
     w1 = 100;
     x1 = 475;
     y1 = 620;
     
   }
   
   if(w2 == 0){
     
    x2 = 475;
    y2 = 640;
    w2 = 50;
     
   }
   
   if(w3 == 0){
     
    x3 = 475;
    y3 = 660;
    w3 = 10;
     
   }
   
   
   
   
  }
  
}
