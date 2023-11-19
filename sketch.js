const CANVAS_SIZE = 1000;
const CANVAS_CENTER = CANVAS_SIZE / 2;
const MIN_CIRCLE_SIZE = 50;
const MAX_CIRCLE_SIZE = 200;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(256);
  colorMode(HSL);
  angleMode(DEGREES);
  strokeWeight(round(random(1, 4)));
  translate(CANVAS_CENTER, CANVAS_CENTER);

  let circleSize = random(MIN_CIRCLE_SIZE, MAX_CIRCLE_SIZE);
  let shift = 0;
  for (let j = 0; j < random(3, floor(CANVAS_SIZE / MIN_CIRCLE_SIZE / 2)); j++) {
    shift += circleSize / 2 + random(10, 50);
    circleSize = random(MIN_CIRCLE_SIZE, MAX_CIRCLE_SIZE);
    shift += circleSize / 2;

    for (let i = 0; i < random(50, 100); i++) {
      drawCircle(circleSize, random(0, 360), shift);
    }
  }

  // Outer frame
  resetMatrix();
  const frameWidth = round(random(30, 100))
  strokeWeight(frameWidth);
  const h = random(0, 360);
  const s = random(50, 80);
  const b = random(40, 100);
  stroke(h, s, b, 0.25);
  drawFrame(0, CANVAS_SIZE);

  // Inner frame
  strokeWeight(1);
  drawFrame(frameWidth, CANVAS_SIZE - frameWidth);
}

function drawCircle(size, h, shift) {
  h = (h + random(30, 60)) % 360;
  const s = random(40, 80);
  const b = random(40, 100);
  stroke(h, s, b, 0.05);
  fill(h, s, b, random(0.01, 0.1));

  rotate(random(0, 360));
  circle(0, -shift, size);
}

function drawFrame(min, max) {
  line(min, min, max, min);
  line(max, min, max, max);
  line(max, max, min, max);
  line(min, max, min, min);
}