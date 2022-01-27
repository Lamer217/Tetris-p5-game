const game = new Game();
const shapes = new Shapes();

function preload() {
  game.preload();
}

function setup() {
  game.setup();
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
      if (
        game.currentFigure === 1 &&
        game.board[i][j] === game.currentFigure &&
        (i >= 19 ||
          game.board[i + 2][j] === 'x' ||
          game.board[i + 2][j + 1] === 'x' ||
          game.board[i + 2][j + 2] === 'x' ||
          game.board[i + 2][j + 3] === 'x')
      ) {
        game.board[i + 1][j] = 'x';
        game.board[i][j] = 0;
        shapes.lToX(i, j);
        game.removeRow();
        game.randomShape();
        return true;
      }
      if (
        game.currentFigure === 2 &&
        game.board[i][j] === game.currentFigure &&
        (i >= 19 ||
          game.board[i + 2][j] === 'x' ||
          game.board[i + 2][j + 1] === 'x' ||
          game.board[i + 2][j + 2] === 'x' ||
          game.board[i + 2][j + 3] === 'x')
      ) {
        game.board[i + 1][j] = 'x';
        game.board[i][j] = 0;
        shapes.jToX(i, j);
        game.removeRow();
        game.randomShape();
        return true;
      }
      if (
        game.currentFigure === 3 &&
        game.board[i][j] === game.currentFigure &&
        (i >= 19 ||
          game.board[i + 2][j] === 'x' ||
          game.board[i + 2][j + 1] === 'x' ||
          game.board[i + 2][j + 2] === 'x')
      ) {
        game.board[i + 1][j] = 'x';
        game.board[i][j] = 0;
        shapes.invTToX(i, j);
        game.removeRow();
        game.randomShape();
        return true;
      }
      if (
        game.currentFigure === 4 &&
        game.board[i][j] === game.currentFigure &&
        (i >= 19 ||
          game.board[i + 2][j] === 'x' ||
          game.board[i + 2][j + 1] === 'x' ||
          game.board[i + 2][j + 2] === 'x' ||
          game.board[i + 2][j + 3] === 'x')
      ) {
        game.board[i + 1][j] = 'x';
        game.board[i][j] = 0;
        shapes.hIToX(i, j);
        game.removeRow();
        game.randomShape();
        return true;
      }
      if (
        game.currentFigure === 5 &&
        game.board[i][j] === game.currentFigure &&
        (i >= 19 ||
          game.board[i + 2][j] === 'x' ||
          game.board[i + 2][j + 1] === 'x')
      ) {
        game.board[i + 1][j] = 'x';
        game.board[i][j] = 0;
        shapes.oToX(i, j);
        game.removeRow();
        game.randomShape();
        return true;
      }
      if (
        game.currentFigure === 6 &&
        game.board[i][j] === game.currentFigure &&
        (i >= 19 || game.board[i + 2][j] === 'x')
      ) {
        game.board[i + 1][j] = 'x';
        game.board[i][j] = 0;
        shapes.vIToX(i, j);
        game.removeRow();
        game.randomShape();
        return true;
      }
      if (
        game.currentFigure === 7 &&
        game.board[i][j] === game.currentFigure &&
        (i >= 19 ||
          game.board[i + 2][j] === 'x' ||
          game.board[i + 2][j + 1] === 'x' ||
          game.board[i + 1][j + 2] === 'x')
      ) {
        game.board[i + 1][j] = 'x';
        game.board[i][j] = 0;
        shapes.sToX(i, j);
        game.removeRow();
        game.randomShape();
        return true;
      }
      if (
        game.currentFigure === 8 &&
        game.board[i][j] === game.currentFigure &&
        (i >= 19 ||
          game.board[i + 2][j] === 'x' ||
          game.board[i + 2][j - 1] === 'x' ||
          game.board[i + 1][j - 2] === 'x')
      ) {
        game.board[i + 1][j] = 'x';
        game.board[i][j] = 0;
        shapes.zToX(i, j);
        game.removeRow();
        game.randomShape();
        return true;
      } else if (game.board[i][j] > 0) {
        game.board[i + 1][j] = game.board[i][j];
        game.board[i][j] = 0;
        return true;
      }
    }
  }
}, 1300);
