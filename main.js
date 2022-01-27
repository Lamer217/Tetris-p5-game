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
  for (let i = 1; i <= 20; i++) {
    for (let j = 0; j < game.board[i].length; j++) {
      if (game.board[i][j] > 0 && i >= 19) {
        /* ⬆This is a condition to turn to x when at the bottom */
        game.board[i + 1][j] = "x";
        game.board[i][j] = 0;
        console.log(game.board);
        return true;
      } else if (game.board[i][j] > 0) {
        game.board[i + 1][j] = game.board[i][j];
        game.board[i][j] = 0;
        return true;
      }
    }
  }
}, 1500);
