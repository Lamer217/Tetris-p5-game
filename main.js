const game = new Game();
const shapes = new Shapes();
// ⬇ Dictates a current figure
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

function constantDownward() {
  if (
    game.blockY +
      game.blockSide * shapes.shapesArr[currentIndex][3].downmostMultiplier >=
    height - 3 * game.blockSide
  ) {
    false;
  } else {
    game.blockY += game.blockSide;
    shapes.shapesArr[currentIndex].forEach((block) => {
      block.y += game.blockSide;
    });
  }
}
setInterval(constantDownward, 1000);
