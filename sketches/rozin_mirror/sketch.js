let w = 320;
let h = 180;
let capture;

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch-parent")
  pixelDensity(1 / 2);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  ellipseMode(RADIUS)
  ellipseMode(CENTER)
  
}

function draw() {
  background(224, 200, 220);
  let stepSize = 5
  capture.loadPixels();
  // let threshold = 200;
  let threshold = map(mouseX, 3, width, 3, 250, true);
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      let c = color (r, g, b);
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/ 3;
      
      let size = map(brightness, 0, 255, stepSize/4, stepSize*2);
      noStroke();
      fill(255, 240, 75);
      fill(c);
      
    push();
      translate(capture.width, 2);
      scale(-1, 1);
      translate(-stepSize, stepSize/2);
      rect(x, y, size * 4, size/4);
      pop();
   {push();
      translate(capture.width, 1);
      scale(-1, 3);
      translate(-stepSize, stepSize);
      rect(x, y, size * 2, size/2);
      pop();}
      
      
    }
  }
  
  //image(capture, 0, 0);
}