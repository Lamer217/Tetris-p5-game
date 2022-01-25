const game = new Game();
const shapes = new Shapes();
const currentIndex = shapes.randomShape();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(401, 735);
}

function draw() {
  game.draw();
}

function keyPressed() {
  game.moveRight();
  game.moveLeft();
  game.moveDown();
}
