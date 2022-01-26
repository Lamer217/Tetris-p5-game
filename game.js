class Game {
  constructor() {
    this.blockSide = 33.4;
    this.board = {
      1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      2: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
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
    this.renderBlock();
  }
  renderBlock() {
    for (const row in this.board) {
      this.board[row].forEach((cell, index) => {
        if (cell === 1) {
          shapes.renderL(index, row);
        }
        if (cell === 2) {
          shapes.renderJ(index, row);
        }
        if (cell === 3) {
          shapes.renderInvT(index, row);
        }
        if (cell === 4) {
          shapes.renderHI(index, row);
        }
        if (cell === 5) {
          shapes.renderO(index, row);
        }
        if (cell === 6) {
          shapes.renderVI(index, row);
        }
        if (cell === 7) {
          shapes.renderS(index, row);
        }
        if (cell === 8) {
          shapes.renderZ(index, row);
        }
      });
    }
  }
  moveRight() {
    if (keyCode === RIGHT_ARROW) {
      for (const row in this.board) {
        // Later change 6 to be adaptive value of current figures width
        for (let i = 0; i < 6; i++) {
          // later change if statement to only accept currently moved element
          if (this.board[row][i] === 1) {
            this.board[row][i + 1] = 1;
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
          if (this.board[row][i] === 1 && i - 1 > -1) {
            this.board[row][i - 1] = 1;
            this.board[row][i] = 0;
            console.log(this.board[row]);
            return true;
          }
        }
      }
    }
  }
  moveDown() {
    if (keyCode === DOWN_ARROW) {
      for (let i = 1; i < 21; i++) {
        // console.log(this.board[i]);
        for (let j = 0; j < this.board[i].length; j++) {
          if (this.board[i][j] === 1) {
            this.board[i + 1][j] = 1;
            this.board[i][j] = 0;
            return true;
          }
        }
      }
    }
  }
}
