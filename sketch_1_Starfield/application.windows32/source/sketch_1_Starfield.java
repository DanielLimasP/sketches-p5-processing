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

public class sketch_1_Starfield extends PApplet {

Star [] stars = new Star[200];
float speed, backcolor1 = 0, backcolor2 = 0, backcolor3 = 0, a;
int c1 = 0, c2 = 0, c3 = 0, sc = 255;
float rr = random(0, 255) , rg = random(0, 255), rb = random(0, 255);
public void setup(){
  
  //size(600, 600);
  for(int i = 0; i < stars.length; i++){
    stars[i] = new Star();
  }
}
public void draw(){
noCursor();
speed = map(mouseX, 0, width, 5, 40);
  background(backcolor1, backcolor2, backcolor3);
  translate(width/2, height/2);
  for(int i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
    if(backcolor1 > 200 || backcolor2 > 100){
      stars[i].setStrokeColor(0);
    }else{
       stars[i].setStrokeColor(255); 
    }
  }
  // Rojo
if(backcolor1 < rr){
  backcolor1++;
  c1++;
}else{
   backcolor1--;
   c1++;
}
if(c1 == 200){
    c1 = 0;
    rr = random(255);
    // Verde
}if(backcolor2 < rg){
  backcolor2++;
  c2++;
}else{
   backcolor2--;
   c2++;
}
if(c2 == 200){
    c2 = 0;
    rg = random(255);
}
  // Azul
if(backcolor3 < rb){
  backcolor3++;
  c3++;
}else{
   backcolor3--;
   c3++;
}
if(c3 == 200){
    c3 = 0;
    rb = random(255);
}
}
class Star {
  float x;
  float y;
  float z;
  float pz;
  int sc;
  Star(){
    x = random(-width, width);
    y = random(-height, height);
    z = random(width);
    pz = z;
    sc = 255;
  }
  public void update(){
  z = z - speed;
    if(z < 1){
      z = width;
      x = random(-width, width);
      y = random(-height, height);
      pz = z;
    }
  }
  public void show(){
    fill(255);
    noStroke();
    float sx = map(x / z, 0, 1, 0, width);
    float sy = map(y / z, 0, 1, 0, height);
    //float r = map(z , 0, width, 16, 0);
    //ellipse(sx, sy, r, r);
    float px = map(x / pz, 0, 1 ,0, width);
    float py = map(y / pz, 0, 1 ,0, height);
    pz = z;
    stroke(sc);
    line(px, py, sx, sy);
  }
  public void setStrokeColor(int sc){
    this.sc = sc;
  }
}
  public void settings() {  fullScreen(); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "--present", "--window-color=#666666", "--hide-stop", "sketch_1_Starfield" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
