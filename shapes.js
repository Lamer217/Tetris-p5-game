class Shapes {
  constructor() {
    this.shapesWidth = [0, 4, 4, 3, 4, 2, 1, 3, 1];
  }
  renderL(index, row) {
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 2) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 3) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 4) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    if ((parseInt(row) - 1) * game.blockSide < game.blockSide) {
      image(
        game.blockImage,
        (index + 4) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.blockImage,
        (index + 4) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
  }
  renderJ(index, row) {
    image(
      game.greenBlock,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.greenBlock,
      (index + 2) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.greenBlock,
      (index + 3) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.greenBlock,
      (index + 4) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    if ((parseInt(row) - 1) * game.blockSide < game.blockSide) {
      image(
        game.greenBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.greenBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
  }
  renderInvT(index, row) {
    image(
      game.yellowBlock,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.yellowBlock,
      (index + 2) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.yellowBlock,
      (index + 3) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    if ((parseInt(row) - 1) * game.blockSide < game.blockSide) {
      image(
        game.yellowBlock,
        (index + 2) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.yellowBlock,
        (index + 2) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
  }
  renderHI(index, row) {
    image(
      game.lBlueBlock,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.lBlueBlock,
      (index + 2) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.lBlueBlock,
      (index + 3) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.lBlueBlock,
      (index + 4) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
  }
  renderO(index, row) {
    image(
      game.orangeBlock,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    if ((parseInt(row) - 1) * game.blockSide < game.blockSide) {
      image(
        game.orangeBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
      image(
        game.orangeBlock,
        (index + 2) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.orangeBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
      image(
        game.orangeBlock,
        (index + 2) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
    image(
      game.orangeBlock,
      (index + 2) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
  }
  renderVI(index, row) {
    image(
      game.lBlueBlock,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    if ((parseInt(row) - 1) * game.blockSide < game.blockSide) {
      image(
        game.lBlueBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.lBlueBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
    if ((parseInt(row) - 2) * game.blockSide < game.blockSide) {
      image(
        game.lBlueBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 2) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.lBlueBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 2) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
    if ((parseInt(row) - 3) * game.blockSide < game.blockSide) {
      image(
        game.lBlueBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 3) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.lBlueBlock,
        (index + 1) * game.blockSide,
        (parseInt(row) - 3) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
  }
  renderS(index, row) {
    image(
      game.redBlock,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.redBlock,
      (index + 2) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    if ((parseInt(row) - 1) * game.blockSide < game.blockSide) {
      image(
        game.redBlock,
        (index + 2) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
      image(
        game.redBlock,
        (index + 3) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.redBlock,
        (index + 2) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
      image(
        game.redBlock,
        (index + 3) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
  }
  renderZ(index, row) {
    image(
      game.redBlock,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.redBlock,
      index * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    if ((parseInt(row) - 1) * game.blockSide < game.blockSide) {
      image(
        game.redBlock,
        index * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
      image(
        game.redBlock,
        (index - 1) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        -1,
        -1
      );
    } else {
      image(
        game.redBlock,
        index * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
      image(
        game.redBlock,
        (index - 1) * game.blockSide,
        (parseInt(row) - 1) * game.blockSide,
        game.blockSide,
        game.blockSide
      );
    }
  }
  lToX(row, index) {
    game.board[row + 1][index + 1] = 'x';
    game.board[row + 1][index + 2] = 'x';
    game.board[row + 1][index + 3] = 'x';
    game.board[row][index + 3] = 'x';
  }
  jToX(row, index) {
    game.board[row][index] = 'x';
    game.board[row + 1][index + 1] = 'x';
    game.board[row + 1][index + 2] = 'x';
    game.board[row + 1][index + 3] = 'x';
  }
  invTToX(row, index) {
    game.board[row + 1][index + 1] = 'x';
    game.board[row][index + 1] = 'x';
    game.board[row + 1][index + 2] = 'x';
  }
  hIToX(row, index) {
    game.board[row + 1][index + 1] = 'x';
    game.board[row + 1][index + 2] = 'x';
    game.board[row + 1][index + 3] = 'x';
  }
  oToX(row, index) {
    game.board[row][index] = 'x';
    game.board[row + 1][index + 1] = 'x';
    game.board[row][index + 1] = 'x';
  }
  vIToX(row, index) {
    game.board[row][index] = 'x';
    game.board[row - 1][index] = 'x';
    game.board[row - 2][index] = 'x';
  }
  sToX(row, index) {
    game.board[row + 1][index + 1] = 'x';
    game.board[row][index + 1] = 'x';
    game.board[row][index + 2] = 'x';
  }
  zToX(row, index) {
    game.board[row + 1][index - 1] = 'x';
    game.board[row][index - 1] = 'x';
    game.board[row][index - 2] = 'x';
  }
}
