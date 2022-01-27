class Game {
  constructor() {
    this.blockSide = 33.4;
    this.currentFigure = 0;
    this.board = {
      1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      12: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      13: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      14: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      15: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      16: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      17: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      18: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      19: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      20: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  setup() {}

  preload() {
    this.backgroundImage = loadImage('assets/Board/Board.png');
    this.blockImage = loadImage('assets/Single Blocks/Blue.png');
  }

  draw() {
    clear();
    image(this.backgroundImage, 0, 0, width, height);
    this.renderBlocks();
  }
  renderBlocks() {
    for (const row in this.board) {
      this.board[row].forEach((cell, index) => {
        if (cell === 1) {
          shapes.renderL(index, row);
          this.currentFigure = 1;
        }
        if (cell === 2) {
          shapes.renderJ(index, row);
          this.currentFigure = 2;
        }
        if (cell === 3) {
          shapes.renderInvT(index, row);
          this.currentFigure = 3;
        }
        if (cell === 4) {
          shapes.renderHI(index, row);
          this.currentFigure = 4;
        }
        if (cell === 5) {
          shapes.renderO(index, row);
          this.currentFigure = 5;
        }
        if (cell === 6) {
          shapes.renderVI(index, row);
          this.currentFigure = 6;
        }
        if (cell === 7) {
          shapes.renderS(index, row);
          this.currentFigure = 7;
        }
        if (cell === 8) {
          shapes.renderZ(index, row);
          this.currentFigure = 8;
        }
        if (cell === 'x') {
          image(
            this.blockImage,
            (index + 1) * this.blockSide,
            parseInt(row) * game.blockSide,
            game.blockSide,
            game.blockSide
          );
        }
      });
    }
  }
  moveRight() {
    if (keyCode === RIGHT_ARROW) {
      for (let i = 1; i <= 20; i++) {
        for (let j = 0; j < 10 - shapes.shapesWidth[this.currentFigure]; j++) {
          if (
            this.currentFigure === 1 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j + 4] !== 0 || this.board[i - 1][j + 4] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 2 &&
            this.board[i][j] === this.currentFigure &&
            this.board[i][j + 4] !== 0
          ) {
            return false;
          } else if (
            this.currentFigure === 3 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j + 3] !== 0 || this.board[i - 1][j + 2] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 4 &&
            this.board[i][j] === this.currentFigure &&
            this.board[i][j + 4] !== 0
          ) {
            return false;
          } else if (
            this.currentFigure === 5 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j + 2] !== 0 || this.board[i - 1][j + 2] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 6 &&
            this.board[i][j] === this.currentFigure &&
            i > 3 &&
            (this.board[i][j + 1] !== 0 ||
              this.board[i - 1][j + 1] !== 0 ||
              this.board[i - 2][j + 1] !== 0 ||
              this.board[i - 3][j + 1] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 7 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j + 2] !== 0 || this.board[i - 1][j + 3] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 8 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j + 1] !== 0 || this.board[i - 1][j] !== 0)
          ) {
            return false;
          } else if (this.board[i][j] > 0) {
            this.board[i][j + 1] = this.board[i][j];
            this.board[i][j] = 0;
            return true;
          }
        }
      }
    }
  }
  moveLeft() {
    if (keyCode === LEFT_ARROW) {
      for (let i = 1; i <= 20; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
          if (
            this.currentFigure === 1 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j - 1] !== 0 || this.board[i - 1][j + 2] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 2 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j - 1] !== 0 || this.board[i - 1][j - 1] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 3 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j - 1] !== 0 || this.board[i - 1][j] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 5 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j - 1] !== 0 || this.board[i - 1][j - 1] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 6 &&
            this.board[i][j] === this.currentFigure &&
            i > 3 &&
            (this.board[i][j - 1] !== 0 ||
              this.board[i - 1][j - 1] !== 0 ||
              this.board[i - 2][j - 1] !== 0 ||
              this.board[i - 3][j - 1] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 7 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j - 1] !== 0 || this.board[i - 1][j] !== 0)
          ) {
            return false;
          } else if (
            this.currentFigure === 8 &&
            this.board[i][j] === this.currentFigure &&
            i > 1 &&
            (this.board[i][j - 2] !== 0 || this.board[i - 1][j - 3] !== 0)
          ) {
            return false;
          } else if (this.board[i][j] > 0 && j - 1 > -1) {
            this.board[i][j - 1] = this.board[i][j];
            this.board[i][j] = 0;
            return true;
          }
        }
      }
    }
  }
  moveDown() {
    if (keyCode === DOWN_ARROW) {
      for (let i = 1; i <= 20; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
          if (
            this.currentFigure === 1 &&
            this.board[i][j] === this.currentFigure &&
            (i >= 19 ||
              this.board[i + 2][j] === 'x' ||
              this.board[i + 2][j + 1] === 'x' ||
              this.board[i + 2][j + 2] === 'x' ||
              this.board[i + 2][j + 3] === 'x')
          ) {
            this.board[i + 1][j] = 'x';
            this.board[i][j] = 0;
            shapes.lToX(i, j);
            this.randomShape();
            return true;
          }
          if (
            this.currentFigure === 2 &&
            this.board[i][j] === this.currentFigure &&
            (i >= 19 ||
              this.board[i + 2][j] === 'x' ||
              this.board[i + 2][j + 1] === 'x' ||
              this.board[i + 2][j + 2] === 'x' ||
              this.board[i + 2][j + 3] === 'x')
          ) {
            this.board[i + 1][j] = 'x';
            this.board[i][j] = 0;
            shapes.jToX(i, j);
            this.randomShape();
            return true;
          }
          if (
            this.currentFigure === 3 &&
            this.board[i][j] === this.currentFigure &&
            (i >= 19 ||
              this.board[i + 2][j] === 'x' ||
              this.board[i + 2][j + 1] === 'x' ||
              this.board[i + 2][j + 2] === 'x')
          ) {
            this.board[i + 1][j] = 'x';
            this.board[i][j] = 0;
            shapes.invTToX(i, j);
            this.randomShape();
            return true;
          }
          if (
            this.currentFigure === 4 &&
            this.board[i][j] === this.currentFigure &&
            (i >= 19 ||
              this.board[i + 2][j] === 'x' ||
              this.board[i + 2][j + 1] === 'x' ||
              this.board[i + 2][j + 2] === 'x' ||
              this.board[i + 2][j + 3] === 'x')
          ) {
            this.board[i + 1][j] = 'x';
            this.board[i][j] = 0;
            shapes.hIToX(i, j);
            this.randomShape();
            return true;
          }
          if (
            this.currentFigure === 5 &&
            this.board[i][j] === this.currentFigure &&
            (i >= 19 ||
              this.board[i + 2][j] === 'x' ||
              this.board[i + 2][j + 1] === 'x')
          ) {
            this.board[i + 1][j] = 'x';
            this.board[i][j] = 0;
            shapes.oToX(i, j);
            this.randomShape();
            return true;
          }
          if (
            this.currentFigure === 6 &&
            this.board[i][j] === this.currentFigure &&
            (i >= 19 || this.board[i + 2][j] === 'x')
          ) {
            this.board[i + 1][j] = 'x';
            this.board[i][j] = 0;
            shapes.vIToX(i, j);
            this.randomShape();
            return true;
          }
          if (
            this.currentFigure === 7 &&
            this.board[i][j] === this.currentFigure &&
            (i >= 19 ||
              this.board[i + 2][j] === 'x' ||
              this.board[i + 2][j + 1] === 'x' ||
              this.board[i + 1][j + 2] === 'x')
          ) {
            this.board[i + 1][j] = 'x';
            this.board[i][j] = 0;
            shapes.sToX(i, j);
            this.randomShape();
            return true;
          }
          if (
            this.currentFigure === 8 &&
            this.board[i][j] === this.currentFigure &&
            (i >= 19 ||
              this.board[i + 2][j] === 'x' ||
              this.board[i + 2][j - 1] === 'x' ||
              this.board[i + 1][j - 2] === 'x')
          ) {
            this.board[i + 1][j] = 'x';
            this.board[i][j] = 0;
            shapes.zToX(i, j);
            this.randomShape();
            return true;
          } else if (this.board[i][j] > 0) {
            this.board[i + 1][j] = this.board[i][j];
            this.board[i][j] = 0;
            return true;
          }
        }
      }
    }
  }
  randomShape() {
    const randomFigure = Math.ceil(Math.random() * 8);
    const randomTile = Math.floor(Math.random() * (7 - 2) + 2);
    setTimeout(() => {
      this.board['1'].splice(randomTile, 1, randomFigure);
    }, 600);
  }
}
