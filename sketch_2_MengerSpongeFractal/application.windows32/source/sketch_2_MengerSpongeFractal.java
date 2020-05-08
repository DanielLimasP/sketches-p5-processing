import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class sketch_2_MengerSpongeFractal extends PApplet {


ArrayList<Box> next1 = new ArrayList<Box>();
    ArrayList<Box> next2 = new ArrayList<Box>();
     ArrayList<Box> next3 = new ArrayList<Box>();

float ax = 0.01f;
float ay = 0.01f;

float speedx;
float speedy;

int cont = 0;

Box b;
Box c;

ArrayList<Box> sponge;

public void setup(){
  surface.setLocation(200, 200);
  
  sponge = new ArrayList<Box>();
  Box b = new Box(0, 0, 0, 200);
  sponge.add(b);
  
}

public void mousePressed(){
  
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

public void draw(){

  background(51);
   stroke(255); 
   lights();
   noFill();
   
    speedx = map(mouseX, 0, width/2, 0, 0.03f);
    speedy = map(mouseY, 0, height/2, 0, 0.03f);
 
    translate(width/2, height/2);
    rotateX(ax);
     rotateY(ay);
 
 for(Box b: sponge){
 
   b.show();
   
 }

    ax += speedx;
    ay += speedy;
    
}
class Box{
  
  PVector pos;
  float r;
  
  Box(float x, float y, float z, float r_){
    pos = new PVector(x, y, z);
    r = r_;
    
}

public ArrayList<Box> generate(){
  
    ArrayList<Box> boxes = new ArrayList<Box>();
      
      for(int x = -1; x < 2; x++){
              for(int y = -1; y < 2; y++){
                      for(int z = -1; z < 2; z++){
                        
                        int sum =  abs(x) + abs(y) + abs (z);
                        
                        if(sum > 1){
                        
                      float newR = r/3;
                        Box b = new Box(pos.x+x*newR, pos.y+y*newR, pos.z+z*newR, newR);
                        boxes.add(b);
                        
                        }
                    }
              }
              
              
      }
                        
      return boxes;
      
      }  
  
  public void show(){
     pushMatrix();
     translate(pos.x, pos.y, pos.z); 
     noStroke();
     fill(255);
     box(r);
     popMatrix();
     
  }
}
  public void settings() {  size(400, 400, P3D); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch_2_MengerSpongeFractal" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
