class Game {
  constructor() {
    this.blockSide = 33.4;
    this.blockX = 33.4;
    this.blockY = 33.4;
    this.board = {
      1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      2: [1, 0, 0, 0, 0, 0, 3, 0, 0, 0],
      3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      4: [2, 0, 0, 0, 0, 0, 4, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      7: [5, 0, 0, 0, 0, 0, 7, 0, 0, 0],
      8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      9: [0, 0, 0, 0, 6, 0, 0, 0, 0, 0],
      10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      12: [0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
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
  /*   arr.splice(5, 1, 0)
arr.splice(6, 1, 1) */
  moveRight() {}
  moveLeft() {}
  moveDown() {}
}
