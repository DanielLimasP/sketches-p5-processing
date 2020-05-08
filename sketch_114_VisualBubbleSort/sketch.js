// Expanding the concept of visualizing sorting algorithms
// Idea would be to map a color to each line and then sort it
// and visualize this sort of rainbow

var colors = []
var values = []
var i = 0
var j = 0
var red = 237
var green = 88
var blue = 88

function setup(){
    frameRate(60)
    createCanvas(800, 600)
    for (let i = 0; i < width; i++) {
        // Sorting height
        //values[i] = {h: int(random(height)), r: random(255), g: random(255), b: random(255) } 
        // Sorting color and height
        // New variable random height
        let hVal = random(360)
        let rh = hVal * 1.66
        values[i] = {h: rh, hue: hVal, sat: 78, val: 64 }  
        
    }
    //console.log(values)
}

function draw(){   
    colorMode(RGB, 255)
    background(200)
    bubbleSort(values)
    for (let i = 0; i < width; i++) {
        colorMode(HSB, 360, 100, 100)
        stroke(values[i].hue, values[i].sat, values[i].val)
        // Sorting by height
        line(i, height, i, height - values[i].h)  
        // Sort by color
        //line(i, height, i, 0)  
    }
}

function bubbleSort(array){
    if(i < array.length){
        for (let j = 0; j < array.length - i - 1; j++) {
            // To sort by hue
            let a = values[j].hue
            let b = values[j+1].hue
            // To use heights
            //let a = values[j].h
            //let b = values[j+1].h
            if(a > b){
                swap(values, j, j+1)
            }
        }
    }else{
        console.log('Finished')
        noLoop()
    }
    i++
}

function swap(array, a, b){
    var temp = array[a]
    array[a] = array[b]
    array[b] = temp
}

function rgb2hsv (r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}

function test(){
    let a = rgb2hsv(values[j].r, values[j].g, values[j].b)
    let b = rgb2hsv(values[j+1].r, values[j+1].g, values[j+1].b)
    console.log(a, a.h)
    console.log(b, b.h)
}