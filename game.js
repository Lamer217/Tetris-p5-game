class Game {
  constructor() {
    this.blockSide = 33.4;
    this.blockX = 33.4;
    this.blockY = 33.4;
    // ⬇ To be used later to represent a figure that's currently active
    // this.currentShapeIndex = shapes.randomShape();
    this.blockShapeL = [
      {
        x: this.blockX,
        y: this.blockY,
      },
      {
        x: this.blockX + this.blockSide,
        y: this.blockY,
      },
      {
        x: this.blockX + this.blockSide * 2,
        y: this.blockY,
      },
      {
        x: this.blockX + this.blockSide * 3,
        y: this.blockY,
      },
      {
        x: this.blockX + this.blockSide * 3,
        y: this.blockY - this.blockSide,
      },
    ];
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
        width - this.blockSide
        /* ✅ Change multiplier according to the current shape width
              Create a parameter in every shape's object that will store
              a rightmost multiplyer that will be passed here */
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
    if (keyCode === LEFT_ARROW) {
      if (this.blockX <= this.blockSide) {
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

// Current issues:
/* ✅ LShapedBlock doesn't move. It moves only if all the block are entered into the draw function. 
⬆ Solution: in a move method have to loop inside the lShapeArray and change it's x & y value
✅ If done as above, blocks don't collide with the borders, 
because the conditional checks for blockX and blockY values
⬆ Solution: Added a loop to the conditional that goes through every figure's block
 and changes its' x & y values.
✅ More bugs to come...*/
