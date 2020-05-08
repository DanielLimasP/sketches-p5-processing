/*

 Connect4 para navegadores. Hecho con p5.js
    Hecho por danyl_pseudo

 */
var chip;
var chips = [];
var lanes = [];
var gForce;
var turnCounter;
var turn;

var lane;
var row;
var col0 = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var col4 = 0;
var col5 = 0;
var col6 = 0;

var x = 0;
var y = 0;

var cols = 7;
var rows = 6;

var gap;
var diameter;

function setup(){
    createCanvas(700, 600);
    translate(width/2, height/2);
    gap = width / cols;
    diameter = 70;
    gForce = createVector(0, 100);
    turnCounter = 0;
    turn = true;

    for (let i = 0; i < 7; i++) {
        lanes[i] = [];
    }
}

function draw(){
    background(255);
    drawGrid();
    drawMultipleChips();
}

function drawGrid(){
    fill(201, 115, 79);
    noStroke()
    rect(0,0, 700, 600);
    x = 50;
    y = 50;
    for(let i = 0; i < cols; i++){
        y = 50;
        for(let j = 0; j < rows; j++){
            fill(255);
            stroke(244);
            strokeWeight(0.5);
            ellipse(x, y, diameter, diameter);
            y += gap;
        }
        x += gap;
    }
    x = 0;
    y = 0;
    for(let i = 0; i < cols; i++){
        stroke(201, 115, 79);
        strokeWeight(10);
        fill(244);
        line(x, y, x, height)
        x += gap;
    }
    x = 0;
    y = 0;
    for(let i = 0; i < rows; i++){
        stroke(201, 115, 79);
        strokeWeight(10);
        fill(244);
        line(x, y, width, y);
        y += gap;
    }
}

function nextTurn(){
    lane = checkLane();
    //poner este switchcase en un metodo
    switch(lane){
        case 0: 
            row = col0;
            break;
        case 1: 
            row = col1;
            break;
        case 2: 
            row = col2;
            break;
        case 3: 
            row = col3;
            break;
        case 4: 
            row = col4;
            break;
        case 5: 
            row = col5;
            break;
        case 6: 
            row = col6;
            break;
        }
    turnCounter++;
    if(turnCounter%2 == 0){
        turn = true;
    }else{
        turn = false;
    }
    c = new chip(x, 80, turn);
    chips.push(c);
    lanes[lane][row] = turn;
    //console.log(lanes[lane][col]);
}

function mousePressed(){
    nextTurn();
    //console.log(false + true);
}

function checkLane(){
    //Columna 1
    if(mouseX >= 0 && mouseX <= 100){
        x =  50;
        col0++;
        return 0;    
    //Columna 2
    }else if(mouseX > 100 && mouseX <= 200){
        x =  150;  
        col1++;
        return 1;  
    //Columna 3
    }else if(mouseX > 200 && mouseX <= 300){
        x =  250;
        col2++;
        return 2;    
    //Columna 4
    }else if(mouseX > 300 && mouseX <= 400){
        x =  350;
        col3++;
        return 3;   
    //Columna 5
    }else if(mouseX > 400 && mouseX <= 500){
        x =  450;
        col4++;
        return 4;   
    //Columna 6    
    }else if(mouseX > 500 && mouseX <= 600){
        x =  550;
        col5++;
        return 5;   
    //Columna 7    
    }else if(mouseX > 600 && mouseX <= 700){
        x =  650;
        col6++;
        return 6;   
    }
}

function drawMultipleChips(){
    for (let i = 0; i < chips.length; i++) {
        chips[i].show();
        chips[i].update();
        chips[i].applyForce(gForce);
        chips[i].checkEdges();
    }
}
