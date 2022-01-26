class Shapes {
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
    image(
      game.blockImage,
      (index + 4) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
  }
  renderJ(index, row) {
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
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
  }
  renderInvT(index, row) {
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
      (index + 2) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
  }
  renderHI(index, row) {
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
  }
  renderO(index, row) {
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 2) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
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
  }
  renderVI(index, row) {
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      (parseInt(row) - 2) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      (parseInt(row) - 3) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
  }
  renderS(index, row) {
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
      (index + 2) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index + 3) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
  }
  renderZ(index, row) {
    image(
      game.blockImage,
      (index + 1) * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      index * game.blockSide,
      parseInt(row) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      index * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
    image(
      game.blockImage,
      (index - 1) * game.blockSide,
      (parseInt(row) - 1) * game.blockSide,
      game.blockSide,
      game.blockSide
    );
  }
}
