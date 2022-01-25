class Shapes {
  renderShape(index) {
    this.shapesArr[index].forEach((block) => {
      image(game.blockImage, block.x, block.y, game.blockSide, game.blockSide);
    });
  }
  randomShape() {
    return Math.floor(Math.random() * this.shapesArr.length);
  }
  constructor() {
    this.shapesArr = [
      [
        //   L shaped blocks
        {
          x: game.blockX,
          y: game.blockY,
        },
        {
          x: game.blockX + game.blockSide,
          y: game.blockY,
        },
        {
          x: game.blockX + game.blockSide * 2,
          y: game.blockY,
        },
        {
          x: game.blockX + game.blockSide * 3,
          y: game.blockY,
          rightmostMultiplier: 5,
          downmostMultiplier: 0,
        },
        {
          x: game.blockX + game.blockSide * 3,
          y: game.blockY - game.blockSide,
        },
      ],
      [
        //   J shaped blocks
        {
          x: game.blockX,
          y: game.blockY - game.blockSide,
        },
        { x: game.blockX, y: game.blockY },
        {
          x: game.blockX + game.blockSide,
          y: game.blockY,
        },
        {
          x: game.blockX + game.blockSide * 2,
          y: game.blockY,
          rightmostMultiplier: 5,
          downmostMultiplier: 0,
        },
        {
          x: game.blockX + game.blockSide * 3,
          y: game.blockY,
        },
      ],
      [
        //   Horizontal I shaped blocks
        { x: game.blockX, y: game.blockY },
        { x: game.blockX + game.blockSide, y: game.blockY },
        { x: game.blockX + game.blockSide * 2, y: game.blockY },
        {
          x: game.blockX + game.blockSide * 3,
          y: game.blockY,
          rightmostMultiplier: 5,
          downmostMultiplier: 0,
        },
      ],
      [
        //   Vertical I shaped blocks
        { x: game.blockX, y: game.blockY },
        { x: game.blockX, y: game.blockY + game.blockSide },
        { x: game.blockX, y: game.blockY + game.blockSide * 2 },
        {
          x: game.blockX,
          y: game.blockY + game.blockSide * 3,
          rightmostMultiplier: 2,
          downmostMultiplier: 3,
        },
      ],
      [
        // O shaped blocks
        { x: game.blockX, y: game.blockY },
        { x: game.blockX, y: game.blockY + game.blockSide },
        { x: game.blockX + game.blockSide, y: game.blockY },
        {
          x: game.blockX + game.blockSide * 1,
          y: game.blockY + game.blockSide * 1,
          rightmostMultiplier: 3,
          downmostMultiplier: 1,
        },
      ],
      [
        //   S shaped blocks
        { x: game.blockX, y: game.blockY + game.blockSide },
        { x: game.blockX + game.blockSide, y: game.blockY + game.blockSide },
        { x: game.blockX + game.blockSide, y: game.blockY },
        {
          x: game.blockX + game.blockSide * 2,
          y: game.blockY,
          rightmostMultiplier: 4,
          downmostMultiplier: 1,
        },
      ],
      [
        //   Z shaped blocks
        { x: game.blockX, y: game.blockY },
        { x: game.blockX + game.blockSide, y: game.blockY },
        { x: game.blockX + game.blockSide, y: game.blockY + game.blockSide },
        {
          x: game.blockX + game.blockSide * 2,
          y: game.blockY + game.blockSide,
          rightmostMultiplier: 4,
          downmostMultiplier: 1,
        },
      ],
      [
        //   Inverted T shaped blocks
        { x: game.blockX + game.blockSide, y: game.blockY },
        { x: game.blockX, y: game.blockY + game.blockSide },
        { x: game.blockX + game.blockSide, y: game.blockY + game.blockSide },
        {
          x: game.blockX + game.blockSide * 2,
          y: game.blockY + game.blockSide,
          rightmostMultiplier: 4,
          downmostMultiplier: 1,
        },
      ],
    ];
  }
}
