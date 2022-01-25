class Game {
  constructor() {
    this.blockSide = 33.4;
    this.blockX = this.blockSide * 4;
    this.blockY = 33.4;
    // ⬇ To be used later to represent a figure that's currently active
    // this.currentShapeIndex = shapes.randomShape();
  }

  setup() {}

  preload() {
    this.backgroundImage = loadImage("assets/Board/Board.png");
    this.blockImage = loadImage("assets/Single Blocks/Blue.png");
  }

  draw() {
    clear();
    image(this.backgroundImage, 0, 0, width, height);
    // ⬇⬇⬇ ✅ Solved: When called with this or forEach loop directly, the figures don't move
    // ✅ Keeps redrawing random shapes
    /* Solution: call for randomShape once and put it's result into a variable
     later will be called when an active shape is placed*/
    shapes.renderShape(currentIndex);
  }

  moveRight() {
    if (keyCode === RIGHT_ARROW) {
      if (
        this.blockX +
          this.blockSide *
            shapes.shapesArr[currentIndex][3].rightmostMultiplier >=
          width - this.blockSide ||
        /* ✅ Change multiplier according to the current shape width
              Create a parameter in every shape's object that will store
              a rightmost multiplyer that will be passed here */ this.blockY +
          this.blockSide *
            shapes.shapesArr[currentIndex][3].downmostMultiplier >=
          height - this.blockSide * 3
      ) {
        false;
      } else {
        this.blockX += this.blockSide;
        /* ✅ Solved: ⬇⬇⬇ will have to be changed to some kind of argument that's going to address
        the array with currently used figure's blocks */
        shapes.shapesArr[currentIndex].forEach((block) => {
          block.x += this.blockSide;
        });
      }
    }
  }

  moveLeft() {
    console.log(height);
    if (keyCode === LEFT_ARROW) {
      if (
        this.blockX <= this.blockSide ||
        this.blockY +
          this.blockSide *
            shapes.shapesArr[currentIndex][3].downmostMultiplier >=
          height - this.blockSide * 3
      ) {
        false;
      } else {
        this.blockX -= this.blockSide;
        /* ✅ Solved: ⬇⬇⬇ will have to be changed to some kind of argument that's going to address
        the array with currently used figure's blocks */
        shapes.shapesArr[currentIndex].forEach((block) => {
          block.x -= this.blockSide;
        });
      }
    }
  }

  moveDown() {
    if (keyCode === DOWN_ARROW) {
      if (
        this.blockY +
          this.blockSide *
            shapes.shapesArr[currentIndex][3].downmostMultiplier >=
        height - 3 * this.blockSide
      ) {
        false;
      } else {
        this.blockY += this.blockSide;
        /* ✅ Solved: ⬇⬇⬇ will have to be changed to some kind of argument that's going to address
        the array with currently used figure's blocks */
        shapes.shapesArr[currentIndex].forEach((block) => {
          block.y += this.blockSide;
        });
      }
    }
  }
}
