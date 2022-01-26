class Game {
  constructor() {
    this.blockSide = 33.4;
    this.currentFigure = 0;
    this.board = {
      1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      2: [0, , 0, 0, 0, 0, 0, 0, 0, 0],
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
    this.backgroundImage = loadImage("assets/Board/Board.png");
    this.blockImage = loadImage("assets/Single Blocks/Blue.png");
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
      });
    }
  }
  moveRight() {
    if (keyCode === RIGHT_ARROW) {
      for (const row in this.board) {
        // Later change 6 to be adaptive value of current figures width
        for (let i = 0; i < 10 - shapes.shapesWidth[this.currentFigure]; i++) {
          // later change if statement to only accept currently moved element
          if (this.board[row][i] > 0) {
            this.board[row][i + 1] = this.board[row][i];
            this.board[row][i] = 0;
            return true;
          }
        }
      }
    }
  }
  moveLeft() {
    if (keyCode === LEFT_ARROW) {
      for (const row in this.board) {
        for (let i = 0; i < this.board[row].length; i++) {
          if (this.board[row][i] > 0 && i - 1 > -1) {
            this.board[row][i - 1] = this.board[row][i];
            this.board[row][i] = 0;
            return true;
          }
        }
      }
    }
  }
  moveDown() {
    if (keyCode === DOWN_ARROW) {
      for (let i = 1; i < 21; i++) {
        for (let j = 0; j < this.board[i].length; j++) {
          if (this.board[i][j] > 0) {
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
    this.board["1"].splice(randomTile, 1, randomFigure);
  }
}
