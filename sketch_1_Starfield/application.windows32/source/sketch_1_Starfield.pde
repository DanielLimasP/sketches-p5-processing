Star [] stars = new Star[200];
float speed, backcolor1 = 0, backcolor2 = 0, backcolor3 = 0, a;
int c1 = 0, c2 = 0, c3 = 0, sc = 255;
float rr = random(0, 255) , rg = random(0, 255), rb = random(0, 255);
void setup(){
  fullScreen();
  //size(600, 600);
  for(int i = 0; i < stars.length; i++){
    stars[i] = new Star();
  }
}
void draw(){
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
