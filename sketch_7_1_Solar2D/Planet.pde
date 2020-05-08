class Planet{
 float radius;
 float angle;
 float distance;
 float orbitSpeed;
 Planet[] planets;

Planet(float r, float d, float o){
  
  radius = r;
  distance = d;
  angle = random(TWO_PI);;
  orbitSpeed = o;
}

void spawnMoons(int total, int level){
  planets = new Planet[total];
  for(int i = 0; i < planets.length; i++){
    float r = radius/(level*1.2);
    float d = random(75, 300);
    float o = random(-0.01, 0.02);
    planets[i] = new Planet(r, d/level, o);
    if(level < 3){
      int num = int(random(0, 4));
      planets[i].spawnMoons(num, level+1);
    }
    
  }
}

void show(){
  
  pushMatrix();
  rotate(angle);
  translate(distance, 0);
  fill(255, 100);
  ellipse(0, 0, radius*2, radius*2); 
  if(planets != null){
    for(int i = 0; i < planets.length; i++){
      planets[i].show();
    }  
  }
  popMatrix();
}

void orbit(){
 angle = angle + orbitSpeed;
 if(planets != null){
    for(int i = 0; i < planets.length; i++){
      planets[i].orbit();
    } 
 }
}
}
