class Game {
  constructor() {
    this.blockSide = 33.4;
    this.blockX = 33.4;
    this.blockY = 33.4;
    this.board = {
      1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      2: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      3: [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
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
    image(
      this.blockImage,
      this.blockSide * 6,
      this.blockSide * 3,
      this.blockSide,
      this.blockSide
    );
    this.renderBlock();
  }
  renderBlock() {
    for (const row in this.board) {
      this.board[row].forEach((cell, index) => {
        if (cell === 1) {
          image(
            this.blockImage,
            ++index * this.blockSide,
            parseInt(row) * this.blockSide,
            this.blockSide,
            this.blockSide
          );
        }
      });
    }
  }
}
