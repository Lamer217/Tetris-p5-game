const game = new Game();
const shapes = new Shapes();

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

game.randomShape();
setInterval(() => {
  for (let i = 1; i < 21; i++) {
    for (let j = 0; j < game.board[i].length; j++) {
      if (game.board[i][j] > 0) {
        game.board[i + 1][j] = game.board[i][j];
        game.board[i][j] = 0;
        return true;
      }
    }
  }
}, 1500);
