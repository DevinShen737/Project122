function preload() {
 img = loadImage('https://pixabay.com/get/gfeb41b724438279f714b450d6f25ea8cac82f7963fd9f9b7e38b2d9ccd6eca5303972b59da8682e38cb0bfce788ceb613649dd85444f761722010508d67252ca_640.jpg');
}

function setup() {
createCanvas(400, 400);
    image(img, 0, 0);
  img.resize(10, 0);
}

function draw() {
  const c = color('green');
fill(c);
rect(50, 50, 25, 300);
rect(325, 50, 25, 300);
rect(50, 325, 300, 25);
rect(50, 50, 300, 25);
  const b = color('red');
fill(b);
  circle(60, 60, 75);
  circle(340, 60, 75);
  circle(60, 340, 75);
  circle(340, 340, 75);
}