class Game {
  constructor() {
    this.blockSide = 33.4;
    this.blockX = 33.4;
    this.blockY = 33.4;
    this.blockShapeL = [
      {
        image: this.blockImage,
        x: this.blockX,
        y: this.blockY,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
      {
        image: this.blockImage,
        x: this.blockX + this.blockSide,
        y: this.blockY,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
      {
        image: this.blockImage,
        x: this.blockX + this.blockSide * 2,
        y: this.blockY,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
      {
        image: this.blockImage,
        x: this.blockX + this.blockSide * 3,
        y: this.blockY,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
      {
        image: this.blockImage,
        x: this.blockX + this.blockSide * 3,
        y: this.blockY - this.blockSide,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
    ];
  }

  setup() {}

  preload() {
    this.backgroundImage = loadImage("assets/Board/Board.png");
    this.blockImage = loadImage("assets/Single Blocks/Blue.png");
    /* // The L shape doesn't work
    // Maybe that's cause only loadImage is supposed to be in the preload and not all the other coordinates
    this.blockShapeL = [
      {
        image: this.blockImage,
        x: this.blockX,
        y: this.blockY,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
      {
        image: this.blockImage,
        x: this.blockX + this.blockSide,
        y: this.blockY,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
      {
        image: this.blockImage,
        x: this.blockX + this.blockSide * 2,
        y: this.blockY,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
      {
        image: this.blockImage,
        x: this.blockX + this.blockSide * 3,
        y: this.blockY,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
      {
        image: this.blockImage,
        x: this.blockX + this.blockSide * 3,
        y: this.blockY - this.blockSide,
        blockWidth: this.blockSide,
        blockHeight: this.blockSide,
      },
    ]; */
  }

  draw() {
    clear();
    image(this.backgroundImage, 0, 0, width, height);
    image(
      this.blockImage,
      this.blockX,
      this.blockY + this.blockSide,
      this.blockSide,
      this.blockSide
    );
    // console.log("this is the background");
    this.renderLShapedBlock();
    // console.log(game.blockX, game.blockY);
  }

  moveRight() {
    if (keyCode === RIGHT_ARROW) {
      if (
        this.blockX >= this.blockSide * 9.5 ||
        this.blockY >= height - this.blockSide * 3
      ) {
        false;
      } else {
        this.blockX += this.blockSide;
      }
    }
  }

  moveLeft() {
    if (keyCode === LEFT_ARROW) {
      if (
        this.blockX <= this.blockSide ||
        this.blockY >= height - this.blockSide * 3
      ) {
        false;
      } else {
        this.blockX -= this.blockSide;
      }
    }
  }

  moveDown() {
    if (keyCode === DOWN_ARROW) {
      if (this.blockY >= height - 3 * this.blockSide) {
        false;
      } else {
        this.blockY += this.blockSide;
      }
    }
  }
  renderLShapedBlock() {
    this.blockShapeL.forEach((block) => {
      image(
        this.blockImage,
        block.x,
        block.y,
        block.blockWidth,
        block.blockHeight
      );
    });
  }
}

// Current issues:
/* ❌LShapedBlock doesn't move. It moves only if all the block are entered into the draw function. 
❌ If done as above, blocks don't collide with the borders, 
because the conditional checks for blockX and blockY values
✅ More bugs to come...*/
